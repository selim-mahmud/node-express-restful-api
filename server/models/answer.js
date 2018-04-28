module.exports = (sequelize, dataTypes) => {
    let answer = sequelize.define('answer', {
        id: dataTypes.INTEGER,
        user_id: dataTypes.INTEGER,
        question_id: dataTypes.INTEGER,
        description: dataTypes.TEXT,
        excepted: dataTypes.BOOLEAN,
        up_vote: dataTypes.INTEGER,
        down_vote: dataTypes.INTEGER,
        created_at: dataTypes.DATE,
        updated_at: dataTypes.DATE,
    }, {});
    answer.associate = function (models) {

        answer.belongsTo(models.user, {
            foreignKey: 'user_id',
            onDelete: 'CASCADE',
        });

        answer.belongsTo(models.question, {
            foreignKey: 'question_id',
            onDelete: 'CASCADE',
        });

    };
    return answer;
};