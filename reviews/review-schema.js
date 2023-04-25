import mongoose from "mongoose";
const reviewSchema = mongoose.Schema(
  {
    text: String,
    productID: String,
    username: String,
    reviewer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserModel",
    },
  },
  { collection: 'reviews' }
);

export default reviewSchema;