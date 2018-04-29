const tag = require('../models').tag;

module.exports = {
    list(req, res) {
        return tag
            .findAll({})
            .then(tags => res.status(200).send(tags))
            .catch(error => res.status(400).send(error));
    },
    create(req, res) {
        //
    },
    retrieve(req, res) {
        return tag
            .findById(req.params.tagId, {})
            .then(tag => {
                if (!tag) {
                    return res.status(404).send({
                        message: 'Tag not found',
                    });
                }
                return res.status(200).send(tag);
            })
            .catch(error => res.status(400).send(error));
    },
    update(req, res) {
        //
    },
    destroy(req, res) {
        return tag
            .findById(req.params.tagId)
            .then(tag => {
                if (!tag) {
                    return res.status(400).send({
                        message: 'Tag not found',
                    });
                }
                return tag
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
};