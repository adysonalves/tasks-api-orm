const jwt = require('jsonwebtoken');

function gerarToken(usuario) {
    const payload = {
        id: usuario.id,
        email: usuario.email
    };

    const secretJWT = process.env.SECRET_JWT;
    const opcoes = {
        expiresIn: '1h'
    };

    return jwt.sign(payload, secretJWT, opcoes);
}

function protected(req, res, next) {
    const token = req.headers.authorization;
    const secretJWT = process.env.SECRET_JWT;

    if (!token) {
        if (!token) {
            return res.status(401).json({ "message": 'Token não fornecido.' });
        }
    }

    jwt.verify(token, secretJWT, (err, decoded) => {
        if(err){
            return res.status(401).json({ "message": 'Token inválido.' });
        }

        req.user = decoded;
        next();

    });
}




module.exports = {
    gerarToken,
    protected
}