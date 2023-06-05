const Task = require('../models/Task');

module.exports = class TaskController {

    static async getAll(req, res) {

        const {id} = req.user;

        const tasks = await Task.findAll({where:{userId:id}});
        console.log(req.user)
        return res.status(200).json(tasks);

    }


    static async addTask(req, res) {
        const { descricao} = req.body;

        if (!descricao) {
            return res.status(400).json({ "message": "A descrição da tarefa não pode ser vazia!" });
        }

        try {

            const newTask = await Task.create({
                descricao: descricao,
                userId: req.user.id

            });

            return res.status(201).json(newTask);

        } catch (error) {
            console.log(error);
            return res.status(500).json({ "message": "Erro ao processar a sua solicitação." });
        }

    }

    static async updateTask(req, res) {

        try {

            const { id } = req.params;

            await Task.update({
                completed: true
            }, { where: { id: id } });

            return res.status(204).json({});

        } catch (error) {
            console.log(error);
            return res.status(500).json({ "message": "Erro ao processar a sua solicitação." });
        }

    }

    static async deleteTask(req,res){
        try {
            const {id} = req.params;

            await Task.destroy({where: {id:id}});
            return res.status(204).json({});

        } catch (error) {
            console.log(error);
            return res.status(500).json({ "message": "Erro ao processar a sua solicitação." });
        }
    }

}