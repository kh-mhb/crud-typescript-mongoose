import express from "express";
import { UserController } from "./user_controller";

const router = express.Router();

router.post("/", UserController.createUser);
router.get("/", UserController.getUsers);
router.get("/:userId", UserController.getSpecificUser);
router.put("/:userId", UserController.updateUser);
router.delete("/:userId", UserController.deleteSpecificUser);
router.put("/:userId/orders", UserController.addOrder);
router.get("/:userId/orders", UserController.getOrders);
router.get("/:userId/orders/total-price", UserController.getTotalPrice);



export const UserRoutes = router;