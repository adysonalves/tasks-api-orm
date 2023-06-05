const bcrypt = require('bcrypt');

module.exports = async(passwd) => {
    return await bcrypt.hash(passwd, 10);
}