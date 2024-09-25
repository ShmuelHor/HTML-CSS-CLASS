import express from 'express';
import { CreateNewUser, DeleteUser, getAllUsers, getUsersByEmail, LoginUser, UpdateUser } from '../controller/controller.js';

const router = express.Router();

router.route('/').get(getAllUsers);
router.route("/:email").get(getUsersByEmail);
router.route("/create").post(CreateNewUser);
router.route("/delete/:email").delete(DeleteUser);
router.route("/update/:email").put(UpdateUser);
router.route("/login").post(LoginUser);



export default router;