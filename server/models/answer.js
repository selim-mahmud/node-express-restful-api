module.exports = (sequelize, dataTypes) => {
    let answer = sequelize.define('answer', {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        question_id: {
            type: dataTypes.INTEGER,
            onDelete: 'CASCADE',
            references: {
                model: 'questions',
                key: 'id',
                as: 'question_id',
                deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        },
        user_id: {
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
        up_vote: {
            type: dataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        down_vote: {
            type: dataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        created_at: {
            allowNull: false,
            type: dataTypes.DATE
        },
        updated_at: {
            allowNull: false,
            type: dataTypes.DATE
        }
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