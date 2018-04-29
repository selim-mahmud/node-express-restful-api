module.exports = (sequelize, dataTypes) => {
    let tag = sequelize.define('tag', {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        slug: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        active: {
            type: dataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
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
    tag.associate = function (models) {
        tag.belongsToMany(models.question, {through: 'questionTag'});
    };
    return tag;
};