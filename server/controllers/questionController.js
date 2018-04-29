const question = require('../models').question;

module.exports = {
    list(req, res) {
        return question
            .findAll({})
            .then(questions => res.status(200).send(questions))
            .catch(error => res.status(400).send(error));
    },
    create(req, res) {
        //
    },
    retrieve(req, res) {
        return question
            .findById(req.params.questionId, {})
            .then(question => {
                if (!question) {
                    return res.status(404).send({
                        message: 'Question not found',
                    });
                }
                return res.status(200).send(question);
            })
            .catch(error => res.status(400).send(error));
    },
    update(req, res) {
        //
    },
    destroy(req, res) {
        return question
            .findById(req.params.questionId)
            .then(question => {
                if (!question) {
                    return res.status(400).send({
                        message: 'Question not found',
                    });
                }
                return question
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
};