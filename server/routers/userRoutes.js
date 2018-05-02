const userController = require('../controllers').userController;
const requireAuth = require('../middlewares/auth').requireAuth;

module.exports = app => {
    app.get('/api/users', requireAuth, userController.list);
    app.post('/api/users', requireAuth, userController.create);
    app.get('/api/users/:userId', requireAuth, userController.retrieve);
    app.put('/api/users/:userId', requireAuth, userController.update);
    app.delete('/api/users/:userId', requireAuth, userController.destroy);
};