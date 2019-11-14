const router = require("express").Router();
const incidentController = require("../../controller/incidentController");

router.route("/")
  .get(incidentController.findAll);

router.route("/search")
  .post(incidentController.search);

router.route("/create")
  .post(incidentController.create);
  
module.exports = router;
