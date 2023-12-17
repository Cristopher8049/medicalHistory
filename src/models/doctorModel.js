const { DataTypes, Model } = require("sequelize");
const sequelize = require("../utils/database");
const PersonalData = require("./personalDataModel");

class Doctor extends Model { }

Doctor.init({
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
    SPECIALTY: {
        type: DataTypes.STRING,
        allowNull: false
    },
    REGISTRATION_NUMBER: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: "Doctor",
    tableName: "DOCTOR"
});

Doctor.belongsTo(PersonalData, { foreignKey: 'PERSONAL_DATA_ID' });

module.exports = Doctor;