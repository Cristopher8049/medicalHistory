const sequelize = require("../utils/database");
const Patient = require("./personalDataModel");
const Address = require("./addressModel");

async function setup() {
    try {
        await sequelize.sync({ force: true });

        console.log("Database setup complete");
    } catch (error) {
        console.log(error);
    }
}

module.exports = setup;