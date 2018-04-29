const questionController = require('../controllers').questionController;

module.exports = app => {
    app.get('/api/questions', questionController.list);
    app.post('/api/questions', questionController.create);
    app.get('/api/questions/:questionId', questionController.retrieve);
    app.put('/api/questions/:questionId', questionController.update);
    app.delete('/api/questions/:questionId', questionController.destroy);
}