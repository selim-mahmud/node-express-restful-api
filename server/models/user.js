module.exports = (sequelize, dataTypes) => {

    let user = sequelize.define('user', {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        active: {
            type: dataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        activationToken: {
            type: dataTypes.STRING,
            allowNull: true,
        },
        rememberToken: {
            type: dataTypes.STRING,
            allowNull: true,
        },
        createdAt: {
            type: dataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: dataTypes.DATE,
            allowNull: false
        }
    }, {});
    user.associate = function (models) {

        // user.hasMany(models.question, {
        //     foreignKey: 'user_id',
        //     as: 'users',
        // });

        user.hasMany(models.answer, {
            foreignKey: 'user_id',
            as: 'users',
        });
    };
    return user;
};