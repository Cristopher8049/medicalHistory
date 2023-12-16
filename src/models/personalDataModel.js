const { DataTypes, Model } = require("sequelize");
const sequelize = require("../utils/database");
const Address = require("./addressModel");

class PersonalData extends Model { }

PersonalData.init({
    ID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    NAME: {
        type: DataTypes.STRING,
        allowNull: false
    },
    LASTNAME: {
        type: DataTypes.STRING,
        allowNull: false
    },
    BIRTHDAY: {
        type: DataTypes.DATE,
        allowNull: false
    },
    CARD_ID: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    GENDER: {
        type: DataTypes.STRING,
        allowNull: false
    },
    BLOOD_TYPE: {
        type: DataTypes.STRING(3),
        allowNull: false
    },
    PHONE: {
        type: DataTypes.STRING(8),
        allowNull: false
    },
    EMAIL: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    ADDRESS_ID: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Address,
            key: "ID"
        }
    }

}, {
    sequelize,
    modelName: "PersonalData",
    tableName: "PERSONAL_DATA"
});

PersonalData.belongsTo(Address, { foreignKey: 'ADDRESS_ID' });

module.exports = PersonalData;