import mongoose from "mongoose";
const reviewSchema = mongoose.Schema(
  {
    text: String,
    productID: String,
    username: String,
    userID: String,
  },
  { collection: 'reviews' }
);

export default reviewSchema;