var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { v4 as uuidv4 } from 'uuid';
import { writeUserToJsonFile, readFromJsonFile, updateUser } from "../DAL/jsonUser.js";
import bcrypt from 'bcrypt';
import axios from 'axios';
export const register = (req, res) => {
    try {
        const user = req.body;
        user.id = uuidv4();
        user.password = bcrypt.hashSync(user.password, 10);
        writeUserToJsonFile(user);
        res.send(user);
    }
    catch (e) {
        res.status(500).send({ message: e.message });
    }
};
export const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        const users = yield readFromJsonFile();
        const userFind = users.find((u) => u.userName == user.userName);
        if (userFind && bcrypt.compareSync(user.password, userFind.password)) {
            res.status(200).json({ userid: userFind.id });
        }
        else {
            throw new Error("password incorect");
        }
    }
    catch (e) {
        res.status(500).send({ message: e.message });
    }
});
export const getBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield readFromJsonFile();
        const userFind = users.find((u) => u.id == req.params.id);
        if (userFind) {
            res.status(200).send(userFind.books);
        }
        else {
            throw new Error("user not found");
        }
    }
    catch (e) {
        res.status(500).send({ message: e.message });
    }
});
export const addBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield readFromJsonFile();
        const userFind = users.find((u) => u.id == req.body.id);
        if (userFind === null || userFind === void 0 ? void 0 : userFind.books.find((b) => b.title == req.body.title)) {
            throw new Error("Book already exists");
        }
        const response = yield axios.get(`https://freetestapi.com/api/v1/books?search=${req.body.title}`);
        const book = response.data;
        if (userFind) {
            userFind.books.push(book[0]);
            yield updateUser(userFind);
            res.status(200).send({ bookId: book[0].id, book: book[0] });
        }
        else {
            throw new Error("User not found");
        }
    }
    catch (e) {
        res.status(500).send({ message: e.message });
    }
});
export const deleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield readFromJsonFile();
        const userFind = users.find((u) => u.id == req.body.userId);
        if (!userFind) {
            throw new Error("user not found");
        }
        const bookIndex = userFind.books.findIndex((b) => b.id == req.params.bookId);
        if (bookIndex == -1) {
            throw new Error("book not found");
        }
        userFind.books.splice(bookIndex, 1);
        updateUser(userFind);
        res.status(200).send({ message: "book deleted" });
    }
    catch (e) {
        res.status(500).send({ message: e.message });
    }
});
export const updateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield readFromJsonFile();
        const userFind = users.find((u) => u.id == req.body.userId);
        if (!userFind) {
            throw new Error("user not found");
        }
        const bookIndex = userFind.books.findIndex((b) => b.id == req.params.bookId);
        if (bookIndex == -1) {
            throw new Error("book not found");
        }
        userFind.books[bookIndex].cover_image = req.body.cover_image;
        updateUser(userFind);
        res.status(200).send({ message: "book updated" });
    }
    catch (e) {
        res.status(500).send({ message: e.message });
    }
});
