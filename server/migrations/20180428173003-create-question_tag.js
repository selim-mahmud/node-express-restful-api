module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('questionTag', {
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
            tagId: {
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                references: {
                    model: 'tags',
                    key: 'id',
                    as: 'tagId',
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('questionTag');
    }
};