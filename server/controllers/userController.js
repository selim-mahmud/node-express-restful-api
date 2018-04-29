const user = require('../models').user;

module.exports = {
    list(req, res) {
        return user
            .findAll({})
            .then(users => res.status(200).send(users))
            .catch(error => res.status(400).send(error));
    },
    create(req, res) {
        //
    },
    retrieve(req, res) {
        return user
            .findById(req.params.userId, {})
            .then(user => {
                if (!user) {
                    return res.status(404).send({
                        message: 'User not found',
                    });
                }
                return res.status(200).send(user);
            })
            .catch(error => res.status(400).send(error));
    },
    update(req, res) {
        //
    },
    destroy(req, res) {
        return user
            .findById(req.params.userId)
            .then(user => {
                if (!user) {
                    return res.status(400).send({
                        message: 'User not found',
                    });
                }
                return user
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
};