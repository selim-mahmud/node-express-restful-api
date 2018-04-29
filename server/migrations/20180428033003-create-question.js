module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('questions', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
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
            title: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            slug: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            description: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            feature: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,

            },
            sticky: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            solved: {
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
        return queryInterface.dropTable('questions');
    }
};