const jwt = require('jsonwebtoken')

module.exports = {
    sign: (payload) => {
        // console.log();
        return jwt.sign(payload, process.env.SECRET)
    },
    decodepayload: (access_token) => {
        return jwt.verify(access_token, process.env.SECRET)
    }
}