import mongoose from "mongoose";

export type User = mongoose.Document & {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;

    // Define a function type for the save method
    save: () => Promise<User>;
};
