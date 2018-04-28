module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('questions', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            user_id: {
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                references: {
                    model: 'users',
                    key: 'id',
                    as: 'user_id',
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
            up_vote: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            down_vote: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('questions');
    }
};