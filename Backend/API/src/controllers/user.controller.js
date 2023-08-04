import userService from "../services/user.service.js";
//para importar usa-se o require
//criar usuario
const create = async(req, res) => {
    try {
        const { email, username, password } = req.body;

        if (!email || !username || !password) {
            res.status(400).send({
                message: "Complete todos os campos para se cadastrar",
            });
        }

        const user = await userService.create(req.body);

        if (!user) {
            return res.status(400).send({ message: "Erro na criasao e usuario" });
        }

        res.status(201).send({
            message: "Usuario criado com sucesso",
            user: {
                id: user._id,
                email,
                username,
            },
        });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};
//Encontrar usuario por id

const findAll = async(req, res) => {
    try {
        const users = await userService.findAllservice();
        if (users.length === 0) {
            return res.status(400).send({ message: "No users on DB" });
        }
        res.send(users);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};


export default { create, findAll };