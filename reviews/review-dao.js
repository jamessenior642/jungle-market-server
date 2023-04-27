import reviewModel from "./review-model.js";

const postReview = async (userId, productId, review) => {
	review.userID = userId;
	review.productID = productId;
	const actualReview = await reviewModel.create(review);
	console.log(review)
	return actualReview;
};

const findReviewByProductID = (productID) => {
	const reviews = reviewModel.find({productID: productID})
	return reviews
};

const findReviewByUser = (userID) => {
	const reviews = reviewModel.find({userID: userID.toString()});
	console.log(reviews)
	return reviews;
}
export default {
	postReview,
	findReviewByProductID,
	findReviewByUser
};