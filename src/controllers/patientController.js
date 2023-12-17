const Patient = require('../models/patientModel');
const PersonalData = require('../models/personalDataModel');
const Address = require('../models/addressModel');

const getPersonalDataByCardId = async (req, res) => {
    try {
        const personalData = await PersonalData.findOne({
            where: { CARD_ID: req.params.cardId },
            include: [{ model: Address }],
        });

        if (!personalData) {
            return res.status(404).json({ message: "PersonalData not found" });
        }

        res.json(personalData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = {
    getPersonalDataByCardId,
};

