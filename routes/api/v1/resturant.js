// this is similar to post rutes
const express = require("express");
const router = express.Router();
const passport = require("passport");
const resturantApi = require("../../../controllers/api/v1/ResturantDetails");
router.get("/", resturantApi.index);
router.post(
  "/create-new-resturant",
  passport.authenticate("jwt", { session: false }),
  resturantApi.createNewResturant
);

module.exports = router;
