import Music from "../models/Music.js";

//Post service add e new music
const create = (body) => Music.create(body);

export default { create };