"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "First story",
          content: "First story of the first dude",
          imageUrl: "",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 1,
        },

        {
          name: "Second story",
          content: "Second story of the first dude",
          imageUrl: "",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 1,
        },
        {
          name: "Third story",
          content: "First story of the second dude",
          imageUrl: "",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 2,
        },

        {
          name: "Fourth story",
          content: "Second story of the second dude",
          imageUrl: "",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("stories", null, {});
  },
};
