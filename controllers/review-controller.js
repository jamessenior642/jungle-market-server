import reviewDao from "../reviews/review-dao.js"

const makeReview  = async (req, res) => {
    const review = req.body
    const productID = req.params.productID;
    console.log(review)
    const insertedReview = await reviewDao.postReview(productID, review)
    res.json(insertedReview)
};

const findReviewsByProductID = async (req, res) => {
    const productID = req.params.productID;
    const reviews = await reviewDao.findReviewByProductID(productID);
    res.json(reviews);
}


const postReview = async (userId, productId, review) => {
    review.reviewer = userId;
    review.productID = productId;
    const actualReview = await reviewDao.postReview(review);
    console.log(actualReview)
    return actualReview;
    };

export default (app) => {
    app.post('/api/products/:productID/reviews/:userID', makeReview);
    app.get('/api/products/:productID/reviews', findReviewsByProductID);
}

