const bcrypt = require('bcrypt')

exports.hashing = (password) => {
    const salt = bcrypt.genSaltSync();
    return bcrypt.hashSync(password, salt);
}

exports.compare = (password, hashPassword) => {
    return bcrypt.compareSync(password, hashPassword);
}