const mongoose = require("mongoose");
const resturantSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    // avatar: {
    //   type: String,
    // },
  },
  {
    timestamps: true, // this fild is for tracking created and udated time checking
  }
);
const Resturant = mongoose.model("Resturant", resturantSchema);
module.exports = Resturant;
