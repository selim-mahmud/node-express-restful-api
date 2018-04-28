module.exports = (sequelize, dataTypes) => {
    let question = sequelize.define('question', {
        id: dataTypes.INTEGER,
        user_id: dataTypes.INTEGER,
        title: dataTypes.STRING,
        slug: dataTypes.STRING,
        description: dataTypes.STRING,
        feature: dataTypes.BOOLEAN,
        sticky: dataTypes.BOOLEAN,
        solved: dataTypes.BOOLEAN,
        up_vote: dataTypes.INTEGER,
        down_vote: dataTypes.INTEGER,
        created_at: dataTypes.DATE,
        updated_at: dataTypes.DATE,
    }, {});
    question.associate = function (models) {
        question.belongsTo(models.user, {
            foreignKey: 'user_id',
            onDelete: 'CASCADE',
        });

        question.belongsToMany(models.tag, {through: 'questionTag'});
    };
    return question;
};