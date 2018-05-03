const user = require('../models').user;

module.exports = {

    list(req, res) {

        user.findAll({})
            .then(users => {
                return res.status(200).send(users);
            })
            .catch(error => {
                return res.status(400).send(error);
            });
    },

    create(req, res){

        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;

        user.create({name, email, password}, {isNewRecord: true})
            .then(createdUser => {

                return res.status(200).send({
                    data: createdUser,
                });
            })
            .catch(error => res.status(400).send(error));
    },

    retrieve(req, res) {

        user.findById(req.params.userId, {})
            .then(user => {
                if (!user) {
                    return res.status(404).send({
                        message: 'User not found',
                    });
                }
                return res.status(200).send(user);
            })
            .catch(error => {
                return res.status(400).send(error);
            });
    },

    update(req, res) {

        user.findById(req.params.userId)
            .then(currentUser => {

                if (!currentUser) {
                    return res.status(404).send({
                        message: 'User Not Found',
                    });
                }

                user.update({
                        name: req.body.name || user.name,
                        email: req.body.email || user.email,
                        password: req.body.password || user.password,
                        active: req.body.active || user.active,
                        activationToken: req.body.activationToken || user.activationToken,
                        rememberToken: req.body.rememberToken || user.rememberToken,
                    })
                    .then(() => {return res.status(200).send(user);})
                    .catch((error) => {return res.status(400).send(error);});
            })
            .catch((error) => {return res.status(400).send(error)});
    },

    destroy(req, res) {

        user.findById(req.params.userId)
            .then(currentUser => {

                if (!currentUser) {
                    return res.status(404).send({
                        message: 'User Not Found',
                    });
                }

                user.destroy()
                    .then(() => {return res.status(204).send();})
                    .catch((error) => {return res.status(400).send(error);});
            })
            .catch((error) => {return res.status(400).send(error)});
    },
};