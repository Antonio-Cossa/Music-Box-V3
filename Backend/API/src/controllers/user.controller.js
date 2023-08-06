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
//pegar todos usuarios

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

//Encontrar po id
const getById = async(req, res) => {
    try {
        const id = req.params.id;
        const user = await userService.getById(id);
        res.send(user);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

//Eliminar Usuario
const deleteUser = async(req, res) => {
    try {
        const id = req.params.id;
        await userService.deleteUser(id);
        res.send({ message: "Usuario Eliminado" });

    } catch (error) {
        res.status(500).send({ message: error.message });

    }
};

export default { create, findAll, getById, deleteUser };