"use strict";
module.exports = {
    up: async (queryInterface) => {
        // ✅ Best Practice: Seed only metadata and not test record, read "Dealing with data" section for further information
        await queryInterface.bulkInsert('users', [
            {
                name: 'Italy',
            },
            {
                name: 'USA',
            },
            {
                name: 'India',
            },
        ], {});
    },
};
