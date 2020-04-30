const express = require("express");
const router = express.Router();

const menuController = require("../controllers/Menu");

router.get("/show", menuController.getData);
router.post("/create", menuController.createData);
router.get("/show/:menuId", menuController.getDataById);
router.delete("/delete/:menuId", menuController.deleteDataById);
router.put("/edit/:menuId", menuController.updateDataById);

module.exports = router;
