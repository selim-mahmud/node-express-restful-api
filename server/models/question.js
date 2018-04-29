module.exports = (sequelize, dataTypes) => {
    let question = sequelize.define('question', {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: dataTypes.INTEGER,
            onDelete: 'CASCADE',
            references: {
                model: 'users',
                key: 'id',
                as: 'userId',
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
    question.associate = function (models) {
        question.belongsTo(models.user, {
            foreignKey: 'userId',
            onDelete: 'CASCADE',
        });

        question.belongsToMany(models.tag, {through: 'questionTag'});
    };
    return question;
};