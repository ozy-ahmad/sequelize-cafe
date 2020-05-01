const expres = require("express");
const router = expres.Router();
const caffeController = require("../controllers/Coffe");

router.get("/show", caffeController.getData);
router.post("/create", caffeController.createData);
router.get("/show/:coffeId", caffeController.getDataById);
router.delete("/delete/:coffeId", caffeController.deleteDataById);
router.put("/edit/:coffeId", caffeController.updateDataById);

module.exports = router;
