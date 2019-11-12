const router = require("express").Router();
const incidentRoutes = require("./incidents");

// Book routes
router.use("/incident", incidentRoutes);

module.exports = router;
