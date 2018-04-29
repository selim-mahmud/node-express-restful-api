const userController = require('../controllers').userController;

module.exports = app => {
    app.get('/api/users', userController.list);
    app.post('/api/users', userController.create);
    app.get('/api/users/:userId', userController.retrieve);
    app.put('/api/users/:userId', userController.update);
    app.delete('/api/users/:userId', userController.destroy);
}