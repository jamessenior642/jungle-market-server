import reviewDao from "../reviews/review-dao"

const makeReview  = async (req, res) => {
    const review = req.body
    const productID = req.params.productID;
    const userID = req.params.userID;
    const insertedReview = await reviewDao.postReview(userID, productID, review)
    res.json(insertedReview)
};


const postReview = async (userId, productId, review) => {
    review.reviewer = userId;
    review.productID = productId;
    const actualReview = await reviewModel.create(review);
    console.log(actualReview)
    return actualReview;
    };

export default (app) => {
    app.post('/api/products/:productID/reviews/:userID', makeReview);
}

