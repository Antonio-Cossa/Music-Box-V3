import User from "../models/User.js";

//create service
const create = (body) => User.create(body);
//find services
const findAllservice = () => User.find();
//find by id
const getById = (id) => User.findById(id);
//delete user using id
const deleteUser = (id) => User.findByIdAndDelete(id);

export default { create, findAllservice, getById, deleteUser };