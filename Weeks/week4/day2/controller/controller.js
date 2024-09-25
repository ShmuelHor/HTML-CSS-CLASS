import { v4 as uuidv4 } from 'uuid';
import bcrypt from "bcrypt";

import * as EmailValidator from 'email-validator';
import passwordValidator from 'password-validator';
const schema = new passwordValidator();
import jsonfile from 'jsonfile';
const file = './users.json'

schema.is().min(8);
schema.has().uppercase();
schema.has().lowercase();

const users = [];
jsonfile.readFile(file)
    .then(user => {
        users.push(...user); 
    })
    .catch(err => {
        console.error(err);
    });

export const getAllUsers = ((req,res)=>{
    try{
        res.send(users)
    }
    catch(error){
        res.status(401).json({ message: error.message });
    }
})

export const getUsersByEmail =((req,res)=>{
    try{
        res.send(users.find(x => x.email == req.params.email))
    }
    catch(error){
        res.status(401).json({ message: error.message });
    }
})


export const CreateNewUser = (req, res) => {
    try {
        if (EmailValidator.validate(req.body.email) && schema.validate(req.body.password)) {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.password, salt);

            users.push({ id: uuidv4(), email: req.body.email, password: hash });
            UpdateFileUsers();
            res.status(200).json({ message: "Ok" });
        } else {
            throw new Error("One of the details is abnormal");
        }
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};


export const DeleteUser = ((req,res)=>{
    try{
        users.splice((users.findIndex(x => x.email == req.params.email)),1)
        UpdateFileUsers();
        res.status(200).json({massage:"ok"})
    }
    catch(error){
        res.status(401).json({ message: error.message });
    }
 })

 export const UpdateUser = async (req, res) => {
    try {
        if (EmailValidator.validate(req.body.email) && schema.validate(req.body.password)) {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.password, salt);

            const indexUser = users.findIndex(x => x.email === req.params.email);
            if (indexUser === -1) {
                throw new Error("User not found");
            }

            users[indexUser].email = req.body.email;
            users[indexUser].password = hash;
            UpdateFileUsers();
            res.send(users);
        } else {
            throw new Error("One of the details is abnormal");
        }
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};


 export const LoginUser = (async (req, res) => {
    try{
        const user = users.find(x => x.email === req.body.email);
        if (user) {
            const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
            if (isPasswordValid) {
                res.status(200).json({ message: "User is connected" });
            } else {
                res.status(400).json({ message: "Wrong credentials" });
            }
        } else {
            throw new Error("Wrong credentials");
        }
    }
    catch(error){
        res.status(401).json({ message: error.message });
    }
});

function UpdateFileUsers() {
    jsonfile.writeFile(file, [], { spaces: 2 }, function (err) {
        if (err) {
            console.error(err);
            return;
        }

        jsonfile.readFile(file, function (err, existingUsers) {
            if (err) {
                existingUsers = [];
            }
            existingUsers.push(...users);
            jsonfile.writeFile(file, existingUsers, { spaces: 2 }, function (err) {
                if (err) console.error(err);
            });
        });
    });
}



