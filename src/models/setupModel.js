const sequelize = require("../utils/database");
const Address = require("./addressModel");
const Doctor = require("./doctorModel");
const Patient = require("./patientModel");
const PersonalData = require("./personalDataModel");

async function setup() {
    try {
        await Address.sync();
        await PersonalData.sync();
        await Patient.sync();
        await Doctor.sync();

        console.log("Database setup complete");
    } catch (error) {
        console.log(error);
    }
}




module.exports = setup;