"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user_controller");
const router = express_1.default.Router();
router.post("/", user_controller_1.UserController.createUser);
router.get("/", user_controller_1.UserController.getUsers);
router.get("/:userId", user_controller_1.UserController.getSpecificUser);
router.put("/:userId", user_controller_1.UserController.updateUser);
router.delete("/:userId", user_controller_1.UserController.deleteSpecificUser);
router.put("/:userId/orders", user_controller_1.UserController.addOrder);
router.get("/:userId/orders", user_controller_1.UserController.getOrders);
exports.UserRoutes = router;
