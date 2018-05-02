const authController = require('../controllers').authController;
const requireSignin = require('../middlewares/auth').requireSignin;

module.exports = app => {
    app.post('/api/auth/signup', authController.signup);
    app.post('/api/auth/signin', requireSignin, authController.signin);
}