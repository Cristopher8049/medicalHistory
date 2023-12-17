const { Router } = require("express");
const patientRoutes = require("./patientRoutes");
const router = Router();

router.use("/patients", patientRoutes);


module.exports = router;
