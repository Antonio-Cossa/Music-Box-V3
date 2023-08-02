import express from "express";
import musicController from "../controllers/music.controller.js";

const route = express.Router();

route.post("/", musicController.create);

export default route;