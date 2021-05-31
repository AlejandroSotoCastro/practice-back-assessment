"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "spaces",
      [
        {
          title: "George's Work list",
          description: "This is the first space",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: "This is the third space",
          description: "This is the third space",
          userId: 2,
          backgroundColor: "#ffff00",
          color: "#ff0000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("spaces", null, {});
  },
};
