require('dotenv').config();
const app = require('./app');
const PORT = process.env.PORT || 3000;
const conn = require('./database/conn');


conn.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server listen on ${PORT}`);
        })
    }).catch(error => {
        console.log("Ocorreu um erro ao iniciar a aplicação: " + error);
    })
