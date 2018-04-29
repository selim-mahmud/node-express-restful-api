const tagController = require('../controllers').tagController;

module.exports = app => {
    app.get('/api/tags', tagController.list);
    app.post('/api/tags', tagController.create);
    app.get('/api/tags/:tagId', tagController.retrieve);
    app.put('/api/tags/:tagId', tagController.update);
    app.delete('/api/tags/:questionId', tagController.destroy);
}