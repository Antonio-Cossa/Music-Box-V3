import express from "express";
import userController from "../controllers/user.controller.js";

const route = express.Router();

route.post("/", userController.create);
route.get("/", userController.findAll);
export default route;