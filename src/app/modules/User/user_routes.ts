import express from "express";
import { UserController } from "./user_controller";

const router = express.Router();

router.post("/create-user", UserController.createUser);
router.get("/get-all-users", UserController.GetUsers);
router.get("/:userId", UserController.getSingleUser);
router.post("/:userId", UserController.editUser);


export const UserRoutes = router;