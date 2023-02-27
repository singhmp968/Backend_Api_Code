// this is similar to index to main index
const express = require("express");
const router = express.Router();

router.use("/resturant", require("./resturant"));
router.use("/resturantOwner", require("./resturantOwner"));
router.use("/menu", require("./MenuRoute"));

module.exports = router;
