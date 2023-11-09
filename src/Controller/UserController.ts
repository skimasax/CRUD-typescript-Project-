import express, { Request, Response } from "express";
import { UserModel } from "../Model/User";
import bcrypt from "bcryptjs";
import { User } from "../Types/User";

export const register = async (req: Request, res: Response) => {
  const { firstname, lastname, email, password, confirm_password } = req.body;

  if (!firstname || !lastname || !email || !password) {
    return res.status(422).json({
      status: false,
      message: "Please complete all fields.",
    });
  }

  if (password !== confirm_password) {
    return res.status(422).json({
      status: false,
      message: "Passwords do not match.",
    });
  }

  try {
    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user document using the UserModel
    const newUser: User = new UserModel({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save(); // Using the save method provided by Mongoose

    return res.status(200).json({
      status: true,
      message: "Registration successful.",
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "An error occurred during registration.",
    });
  }
};
