const user = require('../models').user;
const jwt = require('jwt-simple');
const config = require('../config/config');

function tokenForUser(user){
    const timestamp = new Date().getTime();
    return jwt.encode({sub: user.id, iat: timestamp}, config.appSecret);
}


module.exports = {

    signup(req, res, next){

        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;

        user.create({name, email, password}, {isNewRecord: true})
            .then(createdUser => {

                return res.status(200).send({
                    data: {
                        token: tokenForUser(createdUser)
                    },
                });
            })
            .catch(error => res.status(400).send(error));
    },
    signin(req, res, next){

        return res.status(200).send({
            data: {
                token: tokenForUser(req.user)
            },
        });

    },
};