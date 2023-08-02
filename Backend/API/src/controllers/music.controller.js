import musicService from "../services/music.service.js";

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

export default { create };