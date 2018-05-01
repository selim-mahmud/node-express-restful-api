const bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, dataTypes) => {

    let user = sequelize.define('user', {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Name field is required."
                },
                len: {
                    args: [3, 255],
                    msg: "Name must be between 3 to 255 characters long."
                },
                is: {
                    args: /^[a-z\d\-_\s]+$/i,
                    msg: "Name must only contain letters, numbers, - and _."
                }
            }
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                    notEmpty: {
                        args: true,
                        msg: "Email field is required."
                    },
                    isEmail: {
                        args: true,
                        msg: 'This field must be a valid email.'
                    },
                    len: {
                        args: [5, 255],
                        msg: "Name must be between 5 to 255 characters long."
                    },
                    isUnique: function (value, next) {
                        let self = this;
                        user.find({where: {email: value}})
                            .then(function (user) {
                                if (user && self.id !== user.id) {
                                    return next('Email already in use.');
                                }
                                return next();
                            })
                            .catch(function (err) {
                                return next(err);
                            });
                    }
                }
            },
            password: {
                type: dataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        args: true,
                        msg: "Email field is required."
                    },
                    len: {
                        args: [6, 255],
                        msg: "Password must be between 6 to 255 characters."
                    },
                    is: {
                        args: /^[a-z\d\-_~!@#$%^&*()\s]+$/i,
                        msg: "Name must only contain letters, numbers and special characters."
                    }
                }
            },
            active: {
                type: dataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
                validate: {
                    isIn: {
                        args: [[true, false]],
                        msg: 'active field must be boolean.'
                    }
                }
            },
            activationToken: {
                type: dataTypes.STRING,
                allowNull: true,
                validate: {
                    len: {
                        args: [10, 255],
                        msg: "activationToken must be between 10 to 255 characters."
                    }
                }
            },
            rememberToken: {
                type: dataTypes.STRING,
                allowNull: true,
                validate: {
                    len: {
                        args: [10, 255],
                        msg: "rememberToken must be between 10 to 255 characters."
                    }
                }
            },
            createdAt: {
                type: dataTypes.DATE,
                allowNull: false
            },
            updatedAt: {
                type: dataTypes.DATE,
                allowNull: false
            }

    });

    user.beforeCreate(function (user, options) {
        return cryptPassword(user.password)
            .then(success => {
                user.password = success;
            })
            .catch(err => {
                if (err) console.log(err);
            });
    });

    user.beforeUpdate(function (user, options) {
        return cryptPassword(user.password)
            .then(success => {
                user.password = success;
            })
            .catch(err => {
                if (err) console.log(err);
            });
    });

    return user;
};

function cryptPassword(password) {
    return new Promise(function (resolve, reject) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) return reject(err);

            bcrypt.hash(password, salt, null, function (err, hash) {
                if (err) return reject(err);
                return resolve(hash);
            });

        });
    });
}