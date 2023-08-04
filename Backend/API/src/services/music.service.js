import Music from "../models/Music.js";

//Post service add e new music
const create = (body) => Music.create(body);
//getAll service
const getAllService = () => Music.find();
//get by id service
const getById = (id) => Music.findById(id);
export default { create, getAllService, getById };