const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);
const config = require('../config/config');
const db = {};

const Op = Sequelize.Op;
let sequelize;

sequelize = new Sequelize(
    config.dbDatabase,
    config.dbUsername,
    config.dbPassword,
    {
        host: config.dbHost,
        dialect: config.dbDialect,
        logging: false,
        freezeTableName: true,
        operatorsAliases: {
            $and: Op.and,
            $or: Op.or,
            $eq: Op.eq,
            $gt: Op.gt,
            $lt: Op.lt,
            $lte: Op.lte,
            $like: Op.like
        }
    }
);

fs.readdirSync(__dirname)
    .filter(file =>
        (file.indexOf('.') !== 0) &&
        (file !== basename) &&
        (file.slice(-3) === '.js'))
    .forEach(file => {
        const model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;