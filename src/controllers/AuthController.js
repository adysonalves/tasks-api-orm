const User = require('../models/User');
const Auth = require('../functions/Auth');
const bcrypt = require('bcrypt');

module.exports = class AuthController{

    static async login(req,res){
        const {email, passwd} = req.body;

        const getUser = await User.findOne({where: {email: email}});

        if(getUser && getUser.ativo === true && await bcrypt.compare(passwd, getUser.passwd)){
            const token = Auth.gerarToken(getUser);
            return res.status(200).json({"token":token});
        }

        return res.status(401).json({"message":"Credenciais inválidas!"});
    }

}