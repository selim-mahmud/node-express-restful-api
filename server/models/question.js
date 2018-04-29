module.exports = (sequelize, dataTypes) => {
    let question = sequelize.define('question', {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
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
        title: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        slug: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: dataTypes.TEXT,
            allowNull: false,
        },
        feature: {
            type: dataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,

        },
        sticky: {
            type: dataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        solved: {
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
    question.associate = function (models) {
        question.belongsTo(models.user, {
            foreignKey: 'user_id',
            onDelete: 'CASCADE',
        });

        question.belongsToMany(models.tag, {through: 'questionTag'});
    };
    return question;
};