const express = require("express");
const router = express.Router();
const multer = require("multer");
const menuController = require("../controllers/Menu");

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "./public/");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + file.originalname);
  },
});
const upload = multer({
  storage: storage,
});

router.get("/show", menuController.getData);
router.post("/create", upload.single("image"), menuController.createData);
router.get("/show/:menuId", menuController.getDataById);
router.delete("/delete/:menuId", menuController.deleteDataById);
router.put("/edit/:menuId", menuController.updateDataById);

module.exports = router;
