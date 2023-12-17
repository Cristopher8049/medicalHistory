const { DataTypes, Model } = require("sequelize");
const sequelize = require("../utils/database");
const PersonalData = require("./personalDataModel");

class Patient extends Model { }

Patient.init({
    ID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    PERSONAL_DATA_ID: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: PersonalData,
            key: "ID"
        }
    },
    PARENT_ID: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: Patient,
            key: "ID"
        }
    }
}, {
    sequelize,
    modelName: "Patient",
    tableName: "PATIENT"
});

Patient.belongsTo(PersonalData, { foreignKey: 'PERSONAL_DATA_ID' });
PersonalData.hasOne(Patient, { foreignKey: 'ID' });

Patient.belongsTo(Patient, { foreignKey: 'PARENT_ID' });

module.exports = Patient;