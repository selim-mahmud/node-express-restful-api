module.exports = (sequelize, dataTypes) => {
    let user = sequelize.define('user', {
        id: dataTypes.INTEGER,
        email: dataTypes.STRING,
        password: dataTypes.STRING,
        active: dataTypes.BOOLEAN,
        activation_token: dataTypes.STRING,
        remember_token: dataTypes.STRING,
        created_at: dataTypes.DATE,
        updated_at: dataTypes.DATE,
    }, {});
    user.associate = function (models) {
        user.hasMany(models.question, {
            foreignKey: 'user_id',
            as: 'users',
        });
    };
    return user;
};