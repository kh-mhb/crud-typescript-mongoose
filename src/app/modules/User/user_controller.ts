import { Request, Response } from "express";
import { UserServices } from "./user_services";
import { UserModel } from "./user_model";
import { orderSchema, userSchemaValidator } from "./user_validator";

const createUser = async (req: Request, res: Response) => {
  try {
   
    const { error, value } = userSchemaValidator.validate(req.body);
    if (error) {
      res.status(400).json({
        success: false,
        message: "Something Fishing ",
        error: error.details,
      });
    } else {
      const result = await UserServices.CreateUserToDB(value);
      res.status(200).json({
        success: true,
        message: "User created successfully!",
        data: result,
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something Fishing ",
      error: error,
    });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
   
    const { userId } = req.params;

    const User = new UserModel();
    const userData = await User.isExists(userId);

    if (userData) {
      const { error } = await userSchemaValidator.validate(req.body);

      if (error) {
        res.status(400).json({
          success: false,
          message: "Something Fishing ",
          error: error.details,
        });
      } else {
        const result = await UserServices.UpdateOneUser(userId, req.body);
        res.status(200).json({
          success: true,
          message: "User Updated",
          data: result,
        });
      }
    } else {
      res.status(400).json({
        success: false,
        message: "User not found",
        error: {
          code: 404,
          description: "User not found!",
        },
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something Fishing ",
      error: error,
    });
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.GetUsers();

    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something Fishing ",
      error: error,
    });
  }
};

const getSpecificUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const User = new UserModel();

    const userData = await User.isExists(userId);
    if (userData) {
      res.status(200).json({
        success: true,
        message: "Users fetched successfully",
        data: userData,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "User not found",
        error: {
          code: 404,
          description: "User not found!",
        },
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something Fishing ",
      error: error,
    });
  }
};

const deleteSpecificUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const User = new UserModel();

    const userData = await User.isExists(userId);
    if (userData) {
      await UserServices.DeleteOneUser(userId);
      res.status(200).json({
        success: true,
        message: "User deleted successfully",
        data: null,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "User not found",
        error: {
          code: 404,
          description: "User not found!",
        },
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something Fishing ",
      error: error,
    });
  }
};

const addOrder = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const User = new UserModel();
    const { error, value } = await orderSchema.validate(req.body);
    const userData = await User.isExists(userId);
    if (userData && !error) {
      await UserServices.addOrder(userId, value);
      res.status(200).json({
        success: true,
        message: "Order created successfully!",
        data: null,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Something Went wrong ",
        error: {
          code: 404,
          description: "Not inserted",
        },
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something Fishing ",
      error: error,
    });
  }
};

const getOrders = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const User = new UserModel();
    const userData = await User.isExists(userId);
    if (userData) {
      const result = await UserServices.getOrderFromDB(userId);
      res.status(200).json({
        success: true,
        message: "Order fetched successfully!",
        data: result,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Something Went wrong ",
        error: {
          code: 404,
          description: "Something Went wrong",
        },
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something Fishing ",
      error: error,
    });
  }
};

const getTotalPrice = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const User = new UserModel();
    const userData = await User.isExists(userId);
    if (userData) {
      const result = await UserServices.GetTotalPriceOfOrders(userId);
      res.status(200).json({
        success: true,
        message: "Total price calculated successfully!",
        data: result,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Something Went wrong ",
        error: {
          code: 404,
          description: "Something Went wrong",
        },
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something Fishing ",
      error: error,
    });
  }
};

  export const UserController = {
    createUser,
  getUsers,
  updateUser,
  getSpecificUser,
  deleteSpecificUser,
  getOrders,
  addOrder,
  getTotalPrice
  };