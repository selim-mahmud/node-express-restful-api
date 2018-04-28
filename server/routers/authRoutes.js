
module.exports = app => {
    app.get('/api/test', (req, res, next) => {
        res.status(200).send({
            message: 'Welcome to my app.'
        });
    });
}