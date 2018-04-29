module.exports = (sequelize, dataTypes) => {
    let questionTag = sequelize.define('questionTag', {
        questionId: dataTypes.INTEGER,
        tagId: dataTypes.INTEGER,
    }, {});
    questionTag.associate = function (models) {

    };
    return questionTag;
};