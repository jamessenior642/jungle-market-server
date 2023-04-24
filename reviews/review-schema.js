import mongoose from "mongoose";
const reviewSchema = mongoose.Schema(
  {
    rating: Number,
    productID: String,
    userName: String,
    reviewer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserModel",
    },
  },
  { collection: 'reviews' }
);

export default reviewSchema;