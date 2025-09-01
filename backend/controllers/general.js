import { dataUser } from "../data/index.js";
import userModel from "../models/user.model.js";

export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userModel.find({ id });
        if (!user) throw new Error('User not found');
        res.status(200).json({
            success: true,
            message: 'User found successfully',
            data: user
        });
    }
    catch(err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

export const importAllUsers = async (req, res) => {
    try {
        await userModel.insertMany(dataUser);
        res.status(201).json({
            success: true,
            message: "Successfull imported all the users"
        })
    }
    catch(err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}