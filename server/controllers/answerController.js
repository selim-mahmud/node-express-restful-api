const answer = require('../models').answer;

module.exports = {
    list(req, res) {
        return question
            .findAll({})
            .then(answers => res.status(200).send(answers))
            .catch(error => res.status(400).send(error));
    },
    create(req, res) {
        //
    },
    retrieve(req, res) {
        return answer
            .findById(req.params.answerId, {})
            .then(answer => {
                if (!answer) {
                    return res.status(404).send({
                        message: 'Answer not found',
                    });
                }
                return res.status(200).send(answer);
            })
            .catch(error => res.status(400).send(error));
    },
    update(req, res) {
        //
    },
    destroy(req, res) {
        return answer
            .findById(req.params.answerId)
            .then(answer => {
                if (!answer) {
                    return res.status(400).send({
                        message: 'Answer not found',
                    });
                }
                return answer
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
};