import User from "../models/User.js";

//Post service
const create = (body) => User.create(body);

export default { create };