module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('answers', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            questionId: {
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                references: {
                    model: 'questions',
                    key: 'id',
                    as: 'questionId',
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            },
            userId: {
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                references: {
                    model: 'users',
                    key: 'id',
                    as: 'userId',
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            },
            description: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            excepted: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            upVote: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            downVote: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('answers');
    }
};