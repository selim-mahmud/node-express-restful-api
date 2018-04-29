module.exports = (sequelize, dataTypes) => {
    let answer = sequelize.define('answer', {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        questionId: {
            type: dataTypes.INTEGER,
            onDelete: 'CASCADE',
            references: {
                model: 'questions',
                key: 'id',
                as: 'question_id',
                deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        },
        userId: {
            type: dataTypes.INTEGER,
            onDelete: 'CASCADE',
            references: {
                model: 'users',
                key: 'id',
                as: 'user_id',
                deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        },
        description: {
            type: dataTypes.TEXT,
            allowNull: false,
        },
        excepted: {
            type: dataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        upVote: {
            type: dataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        downVote: {
            type: dataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        createdAt: {
            allowNull: false,
            type: dataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: dataTypes.DATE
        }
    }, {});
    answer.associate = function (models) {

        answer.belongsTo(models.user, {
            foreignKey: 'userId',
            onDelete: 'CASCADE',
        });

        answer.belongsTo(models.question, {
            foreignKey: 'questionId',
            onDelete: 'CASCADE',
        });

    };
    return answer;
};