import reviewModel from "./review-model.js";

const postReview = async (userId, productId, review) => {
	review.reviewer = userId;
	review.productID = productId;
	const actualReview = await reviewModel.create(review);
	return actualReview;
};

const findReviewByProductID = (productID) => {
	const reviews = reviewModel.find({productID})
	return reviews
};

const findReviewByUserId = (userId) =>
	reviewModel.find({reviewer: userId});

export default {
	postReview,
	findReviewByProductID,
	findReviewByUserId
};