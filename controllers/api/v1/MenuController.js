const Resturant = require("../../../models/Resturant");
const ResturantOwner = require("../../../models/RestaurantOwner");
const Menu = require("../../../models/Menu");

module.exports.createNewMenu = async function (req, res) {
  try {
    console.log("req", req.body);
    const { item, price, resturantId } = req.body;
    let restOwner = await ResturantOwner.findOne({ ResturantId: resturantId });
    if (restOwner == null) {
      return res.json(401, {
        message: "not found",
      });
    }

    await Menu.create({
      item: item,
      price: price,
      resturantId: resturantId,
    });

    console.log("restOwner", restOwner);

    return res.json(200, {
      message: "connected successfully",
    });
  } catch (error) {
    console.log("error=>", error);
    return res.json(500, {
      message: "Internal server Error",
    });
  }
};
// for updating
module.exports.updateMenu = async function (req, res) {
  try {
    const { menuId, item, price } = req.body;
    console.log("updateMenu", menuId);

    let menuData = await Menu.findByIdAndUpdate(menuId, {
      item: item,
      price: price,
    });
    if (menuData == null) {
      return res.json(401, {
        message: "not found",
      });
    }
    return res.json(200, {
      message: "update success full",
    });
  } catch (error) {
    console.log("error=>", error);
    return res.json(500, {
      message: "Internal server Error",
    });
  }
};

// for deleting the existing menu item
module.exports.deleteMenuItem = async function (req, res) {
  try {
    //ObjectId("63fc4618eeb13fa8dcc1e15e")
    console.log("req", req.query);
    const { menuId } = req.query;
    console.log("delete", menuId);

    let menuData = await Menu.findByIdAndRemove(menuId);
    if (menuData == null) {
      return res.json(401, {
        message: "not found",
      });
    }
    return res.json(200, {
      message: "menu delete success fully success full",
    });
  } catch (error) {
    console.log("error=>", error);
    return res.json(500, {
      message: "Internal server Error",
    });
  }
};

// for deleting the existing menu
module.exports.deleteMenu = async function (req, res) {
  try {
    const { resturantID } = req.query;
    console.log("resturantID", resturantID);

    let menuItemList = await Menu.deleteMany({ resturantId: resturantID });
    console.log("menuItemList", menuItemList);
    if (menuItemList == null) {
      return res.json(401, {
        message: "not found",
      });
    }
    return res.json(200, {
      message: "menu delete success fully success full",
    });
  } catch (error) {
    console.log("error=>", error);
    return res.json(500, {
      message: "Internal server Error",
    });
  }
};
