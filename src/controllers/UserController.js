const User = require('../models/User');
const criptgrafarSenha = require('../functions/criptografarSenha');

module.exports = class UserController {

    static async getAll(req, res) {

        try {
            
            const users = await User.findAll({ where: { ativo: 1 }, attributes: ['id', 'email'] });
            return res.status(200).json(users);

        } catch (error) {
            console.log(error);
            return res.status(500).json({ "message": "Erro ao processar a sua solicitação." });
        }


    }

    static async createUser(req, res) {

        try {
            let { email, passwd } = req.body;

            const user = {
                email: email,
                passwd: await criptgrafarSenha(passwd)
            }

            await User.create(user);

            return res.status(201).json({ "message": "Usuário criado com sucesso!" })
        } catch (error) {
            console.log(error);
            return res.status(500).json({ "message": "Erro ao processar a sua solicitação." });
        }

    }

    static async updateUser(req, res) {

        try {
            const { id } = req.params;
            let { email, passwd } = req.body;


            const user = {
                email: email
            }

            if (passwd) {
                user.passwd = await criptgrafarSenha(passwd);
            }

            await User.update(user, { where: { id: id } });
            return res.status(204).json({});

        } catch (error) {
            console.log(error);
            return res.status(400).json({ "message": "Erro ao processar a sua solicitação." });
        }

    }

    static async deleteUser(req, res) {
        try {
            const { id } = req.params;
            await User.update({ ativo: 0 }, { where: { id: id } });

            return res.status(204).json({});
        } catch (error) {
            console.log(error);
            return res.status(500).json({ "message": "Erro ao processar a sua solicitação." });
        }
    }


}