import musicService from "../services/music.service.js";
//Add musics
const create = async(req, res) => {
    try {
        const { src, titulo, artista, capa } = req.body;
        if (!src || !titulo || !artista || !capa) {
            res.status(400).send({ message: "Complete todos os campos" });
        }

        const music = await musicService.create(req.body);

        if (!music) {
            return res.status(400).send({ message: "Erro ao adicionar musica" });
        }

        res.status(201).send({
            message: "Adicionado com sucesso",
            music: { id: music._id, titulo, artista, src, capa },
        });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
//Get all musics
const getAll = async(req, res) => {
    try {
        const music = await musicService.getAllService();

        if (music.length === 0) {
            return res.status(400).send({ message: "No Musics On DB" })
        };

        res.send(music);

    } catch (error) {
        res.status(500).send({ message: error.message });
    }

};
//Get music by id
const getById = async(req, res) => {
    try {
        const id = req.params.id;
        const music = await musicService.getById(id);
        res.send(music);

    } catch (error) {
        res.status(500).send({ message: error.message });

    }
};

//Delete music by id
const deleteMusic = async(req, res) => {
    try {
        const dmusic = await musicService.deleteMusic(req.params.id);
        res.send({ message: "Musica Eliminada" });
    } catch (error) {
        res.status(500).send({ message: error.message });

    }
};
export default { create, getAll, getById, deleteMusic };