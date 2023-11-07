import express, { Request, Response } from "express";
import { UserModel } from "../Model/User";
import bcrypt from "bcryptjs";

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

  // Add code here to create a new user with the provided information and hash the password using bcrypt.

  try {
    // Example: Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Example: Create a new user in the database using the UserModel
    const newUser = new UserModel({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

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
