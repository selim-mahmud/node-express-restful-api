module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('question_tag', {
            question_id: {
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                references: {
                    model: 'questions',
                    key: 'id',
                    as: 'question_id',
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            },
            tag_id: {
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                references: {
                    model: 'tags',
                    key: 'id',
                    as: 'tag_id',
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('question_tag');
    }
};