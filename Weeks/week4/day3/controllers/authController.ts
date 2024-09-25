import { Request,Response } from "express";
import {Book, User} from '../models/types.js';
import {v4 as uuidv4} from 'uuid'
import { writeUserToJsonFile,readFromJsonFile ,updateUser} from "../DAL/jsonUser.js";
import bcrypt from 'bcrypt';
import axios from 'axios';

export const register = (req:Request,res:Response)=>{
    try{
    
    const user:User = req.body;
    user.id = uuidv4();
    user.password = bcrypt.hashSync(user.password,10);
    writeUserToJsonFile(user)
    res.send( user);
    }
    catch(e: any) {
        res.status(500).send({ message: e.message });
    }
}
export const login = async (req:Request,res:Response)=>{
    try {
        const user: User = req.body;
        const users: User[] = await readFromJsonFile();
        const userFind: User | undefined = users.find((u) =>u.userName == user.userName );
        if (userFind && bcrypt.compareSync(user.password, userFind.password)) {

            res.status(200).json({ userid: userFind.id })
        }
        else {
            throw new Error("password incorect")
        }
    }
    catch(e: any) {
        res.status(500).send({ message: e.message });
    }
}

export const getBooks = async (req:Request,res:Response)=>{
    try {
    const users: User[] = await readFromJsonFile();
    const userFind: User | undefined = users.find((u) =>u.id == req.params.id );
    if (userFind) {
        res.status(200).send(userFind.books);
    }
    else {
        throw new Error("user not found")
    }
    }
    catch(e: any) {
        res.status(500).send({ message: e.message });
    }
}

export const addBook = async (req: Request, res: Response) => {
    try {
        const users: User[] = await readFromJsonFile();
        const userFind: User | undefined = users.find((u) => u.id == req.body.id);

        if (userFind?.books.find((b) => b.title == req.body.title)) {
            throw new Error("Book already exists");
        }

        const response = await axios.get(`https://freetestapi.com/api/v1/books?search=${req.body.title}`);
        const book = response.data as Book[];

        if (userFind) {
            userFind.books.push(book[0]);
            await updateUser(userFind);
            res.status(200).send({bookId: book[0].id, book: book[0]});
        } else {
            throw new Error("User not found");
        }
    } catch (e: any) {
        res.status(500).send({ message: e.message });
    }
};


export const deleteBook = async (req:Request,res:Response)=>{
    try {
    const users: User[] = await readFromJsonFile();
    const userFind: User | undefined = users.find((u) =>u.id == req.body.userId );
    if (!userFind) {
        throw new Error("user not found")
    }
    const bookIndex = userFind.books.findIndex((b)=>b.id == req.params.bookId);
    if(bookIndex == -1){
        throw new Error("book not found")
    }
    userFind.books.splice(bookIndex,1)
    updateUser(userFind)
    res.status(200).send({message:"book deleted"});
    }
    catch(e: any) {
        res.status(500).send({ message: e.message });
    }
}

export const updateBook = async (req:Request,res:Response)=>{
    try {
    const users: User[] = await readFromJsonFile();
    const userFind: User | undefined = users.find((u) =>u.id == req.body.userId );
    if (!userFind) {
        throw new Error("user not found")
    }
    const bookIndex = userFind.books.findIndex((b)=>b.id == req.params.bookId);
    if(bookIndex == -1){
        throw new Error("book not found")
    }
    userFind.books[bookIndex].cover_image = req.body.cover_image;
    updateUser(userFind)
    res.status(200).send({message:"book updated"});
    }
    catch(e: any) {
        res.status(500).send({ message: e.message });
    }
}


