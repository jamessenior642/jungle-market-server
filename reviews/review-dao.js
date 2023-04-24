import reviewModel from "./review-model.js";

const postReview = async (userId, productId, review) => {
  review.reviewer = userId;
  review.productID = productId;
  const actualReview = await reviewModel.create(review);
  return actualReview;
};

const findReviewByProductID = (productID) => reviewModel.find({ productID });

const findReviewByUserId = (userId) =>
  reviewModel.find({ reviewer: userId });

export default {
  postComment: postReview,
  findCommentsByMemeID: findReviewByProductID,
  findCommentsByUserId: findReviewByUserId,
};