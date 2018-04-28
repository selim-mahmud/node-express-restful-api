module.exports = (sequelize, dataTypes) => {
    let questionTag = sequelize.define('questionTag', {
        question_id: dataTypes.INTEGER,
        tag_id: dataTypes.INTEGER,
    }, {});
    questionTag.associate = function (models) {

    };
    return questionTag;
};