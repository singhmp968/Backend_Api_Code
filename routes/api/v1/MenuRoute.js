const express = require("express");
const router = express.Router();
const passport = require("passport");

const menuApi = require("../../../controllers/api/v1/MenuController");
// router.get("/", resturantOwnerApi.createNewResturantOwner);
router.post(
  "/create-new-menu",
  passport.authenticate("jwt", { session: false }),
  menuApi.createNewMenu
);
router.post(
  "/update-menu",
  passport.authenticate("jwt", { session: false }),
  menuApi.updateMenu
);

router.delete(
  "/delete-menu",
  passport.authenticate("jwt", { session: false }),
  menuApi.deleteMenuItem
);

router.delete(
  "/delete-All-menu",
  passport.authenticate("jwt", { session: false }),
  menuApi.deleteMenu
);

module.exports = router;
