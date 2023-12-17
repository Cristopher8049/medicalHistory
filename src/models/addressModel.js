const { DataTypes, Model } = require("sequelize");
const sequelize = require("../utils/database");

class Address extends Model { }

Address.init(
    {
        ID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        ADDRESS: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        PROVINCE: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        CITY: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        COUNTRY: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "Address",
        tableName: "ADDRESSES",
    }
);




module.exports = Address;