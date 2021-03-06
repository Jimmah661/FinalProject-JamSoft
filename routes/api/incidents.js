const router = require("express").Router();
const incidentController = require("../../controller/incidentController");

router.route("/")
  .get(incidentController.findAll);

router.route("/search")
  .post(incidentController.search);

router.route("/:id")
  .get(incidentController.findOne)

router.route("/create")
  .post(incidentController.create);
  
router.route("/update")
  .put(incidentController.update)
module.exports = router;
