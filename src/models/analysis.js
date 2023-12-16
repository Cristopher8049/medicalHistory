const { DataTypes, Model } = require("sequelize");
const sequelize = require("../utils/database");
const ClinicHistory = require("./clinicHistoryModel");

class Analysis extends Model { }

Analysis.init({
    ID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    CLINIC_HISTORY_ID: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: "ClinicHistory",
            key: "ID"
        }
    },
    NAME: {
        type: DataTypes.STRING,
        allowNull: false
    },
    DESCRIPTION: {
        type: DataTypes.STRING,
        allowNull: false
    },
    RESULT: {
        type: DataTypes.STRING,
        allowNull: false
    },
    DATE: {
        type: DataTypes.DATE,
        allowNull: false
    },
}, {
    sequelize,
    modelName: "Analysis",
    tableName: "ANALYSIS"
});

Analysis.belongsTo(ClinicHistory, { foreignKey: "CLINIC_HISTORY_ID" });

module.exports = Analysis;