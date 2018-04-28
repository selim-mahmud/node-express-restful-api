module.exports = (sequelize, dataTypes) => {
    let tag = sequelize.define('tag', {
        id: dataTypes.INTEGER,
        name: dataTypes.STRING,
        slug: dataTypes.STRING,
        active: dataTypes.BOOLEAN,
        created_at: dataTypes.DATE,
        updated_at: dataTypes.DATE,
    }, {});
    tag.associate = function (models) {
        tag.belongsToMany(models.question, {through: 'questionTag'});
    };
    return tag;
};