const { Router } = require("express");
const router = Router();
const patientController = require("../controllers/patientController")

router.get("/:cardId", patientController.getPersonalDataByCardId);

module.exports = router;
