const Resturant = require("../../../models/Resturant");
const ResturantOwner = require("../../../models/RestaurantOwner");

module.exports.createNewResturant = async function (req, res) {
  try {
    console.log("reqBoDY - ", req.body);
    const { email, resturantName } = req.body;
    console.log("email", email);
    let resturantOwner = await ResturantOwner.findOne({
      ownerEmail: email,
    });
    if (resturantOwner == null) {
      return res.json(500, {
        message: "not found",
      });
    }

    console.log("resturantOwner---", resturantOwner);
    await Resturant.create({
      resturantName: resturantName,
      ResturantOwnerId: resturantOwner._id,
    });
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

module.exports.index = async function (req, res) {
  try {
    console.log("res", req);
    return res.json(200, {
      message: "connected successfully",
    });
  } catch (error) {
    console.log("error=>", error);
    return res.json(500, {
      message: "Internal server Error",
    });
  }
  //   let resturants = await Resturant.find({}) // awaited to this post to b completed
  //     .populate("user")
  //     .sort("-createdAt") // sorting ny using createdAt method in MongooseDb i.e nearest
  //     .populate({
  //       path: "comments",
  //       populate: {
  //         path: "user",
  //       },
  //     });

  //   return res.json(200, {
  //     message: "List of Post",
  //     posts: posts,
  //   }); // whe
};
