const { DataTypes, Model } = require("sequelize");
const sequelize = require("../utils/database");
const Patient = require("./patientModel");
const Doctor = require("./doctorModel");
const Analysis = require("./analysisModel");

class ClinicHistory extends Model { }

ClinicHistory.init({
    ID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    PATIENT_ID: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: "Patient",
            key: "ID"
        }
    },
    DOCTOR_ID: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: "Doctor",
            key: "ID"
        }
    },
    DATE: {
        type: DataTypes.DATE,
        allowNull: false
    },
    DIAGNOSIS: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    sequelize,
    modelName: "ClinicHistory",
    tableName: "CLINIC_HISTORY"
});

ClinicHistory.belongsTo(Patient, { foreignKey: "PATIENT_ID" });

ClinicHistory.belongsTo(Doctor, { foreignKey: "DOCTOR_ID" });

module.exports = ClinicHistory;
