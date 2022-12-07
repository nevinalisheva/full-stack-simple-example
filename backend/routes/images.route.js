const { getImages, getImagesByType } = require("../controllers/images");
const router = require("express").Router();

router.get("/", getImages);
router.get("/", getImagesByType);

module.exports = router;
