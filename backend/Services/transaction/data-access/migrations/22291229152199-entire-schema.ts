// ✅ Best Practice: Manage DB schemas explicitly using migrations
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cash_transactions', {
      id: {
        allowNull: false,

        primaryKey: true,
        type: Sequelize.UUID,
      },
      userId: {
        type: Sequelize.UUID,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      businessName: {
        type: Sequelize.STRING,
      },
      amount: {
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.createTable('categories', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      accountId: {
        type: Sequelize.UUID,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.createTable('transaction_action', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      type: {
        allowNull: false,
        type: Sequelize.ENUM('WITHDRAW', 'DEPOSITE'),
      },
    });

    await queryInterface.addColumn('cash_transactions', 'action', {
      type: Sequelize.UUID,
      reference: {
        model: 'transaction_action',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });

    await queryInterface.addColumn('cash_transactions', 'category', {
      type: Sequelize.UUID,
      reference: {
        model: 'categories',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: (queryInterface) => {
    return (
      queryInterface.dropTable('cash_transactions'),
      queryInterface.dropTable('categories'),
      queryInterface.dropTable('transaction_action')
    );
  },
};
