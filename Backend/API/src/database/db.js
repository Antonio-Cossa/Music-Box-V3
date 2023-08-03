import mongoose from "mongoose";

const connectDataBase = () => {
    mongoose
        .connect("mongodb://127.0.0.1:27017/Music_Box", { useNEwUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("Datebase Connected!"))
        .catch((error) => console.log(error));

    console.log("Connecting To MongoDB Compass Please Wait...");
};

export default connectDataBase;