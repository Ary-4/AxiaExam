const userModel = require("../Model/user.model");


const createUser = async (req, res) => {
    const payload = req.body
    const newUser = new userModel(payload)
    const usersaved = await newUser.save()
    return res.json(usersaved);
};

const loginUser = async (req, res) => {
    return res.json(req.body) 
};
       
const getUser = async (req, res) => {
    const allUsers = await userModel.find()
    return res.json(allUsers)
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    const updatedUser = await userModel.findByIdAndUpdate(id, payload, { new: true });
    return res.json(updatedUser);
};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    await userModel.findByIdAndDelete(id);
    return res.json({ message: "User deleted successfully" });
};

module.exports = {createUser, loginUser, getUser, updateUser, deleteUser };