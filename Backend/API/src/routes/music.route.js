import express from "express";
import musicController from "../controllers/music.controller.js";

const route = express.Router();

route.post("/", musicController.create);
route.get("/", musicController.getAll);
export default route;