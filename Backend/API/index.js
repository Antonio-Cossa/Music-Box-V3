import express from "express";
import connectDataBase from "./src/database/db.js";
import musicRoute from "./src/routes/music.route.js";
import userRoute from "./src/routes/user.route.js";
const app = express();

connectDataBase();

//Routes
app.use(express.json());
app.use("/music", musicRoute);
app.use("/user", userRoute);

app.listen(3000, () => {
    console.log("Server started on port 3000");
});