import User from "../models/User.js";

//create service
const create = (body) => User.create(body);
//find services
const findAllservice = () => User.find();

export default { create, findAllservice };