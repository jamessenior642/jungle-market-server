import userModel from "./user-model.js";

const findAllUsers = async () => {
    return await userModel.find();
    };

const findUserById = async (id) => {
    return await userModel.findById(id);
    };

const findUserByUserName = async (userName) => {
    return await userModel.findOne({userName: userName});
    };

const createUser = async (user) => {
    return await userModel.create(user);
    };

const updateUser = async (id, user) => {
    return await userModel.findByIdAndUpdate(id, user);
    };

const deleteUser = async (id) => {
    return await userModel.findByIdAndDelete(id);
    };

const findbyCredentials = async (email, password) => {
    return await userModel.findOne({email: email, password: password});
    };

const findByEmail = async (email) => {
    return await userModel.findOne({email: email});
};

export default {
    findAllUsers,
    findUserById,
    findUserByUserName,
    findbyCredentials,
    findByEmail,
    createUser,
    updateUser,
    deleteUser,
};

