import mongoose from "mongoose";

const MusicSchema = new mongoose.Schema({
    src: {
        type: String,
        required: true,
        unique: true,
    },
    titulo: {
        type: String,
        required: true
    },
    artista: {
        type: String,
        required: true
    },
    capa: {
        type: String,
        required: true
    }
});

const Music = mongoose.model("Music", MusicSchema);

export default Music;