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
        created_at: {
            type: dataTypes.DATE,
            allowNull: false
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: false
        }
    }, {});
    tag.associate = function (models) {
        tag.belongsToMany(models.question, {through: 'questionTag'});
    };
    return tag;
};