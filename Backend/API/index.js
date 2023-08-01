import expresss from "express";
import mongoose from "mongoose";

const uri = "mongodb://localhost:27017/Music_Box";
const app = expresss;

mongoose
    .connect(url, {})
    .then((result) => console.log("Connected"))
    .catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.send("so far so good");
});

const port = process.env.PORT || 3000;

app.listen(port, () => `Server running on port ${port} 🔥`);