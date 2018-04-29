const answerController = require('../controllers').answerController;

module.exports = app => {
    app.get('/api/answers', answerController.list);
    app.post('/api/answers', answerController.create);
    app.get('/api/answers/:answerId', answerController.retrieve);
    app.put('/api/answers/:answerId', answerController.update);
    app.delete('/api/answers/:answerId', answerController.destroy);
}