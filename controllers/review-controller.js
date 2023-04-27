import reviewDao from "../reviews/review-dao.js"

const postReview  = async (req, res) => {
    const review = req.body
    const productID = req.params.productID;
    const userID = req.params.userID;
    const insertedReview = await reviewDao.postReview(userID, productID, review)
    res.json(insertedReview)
};

const findReviewsByProductID = async (req, res) => {
    const productID = req.params.productID;
    const reviews = await reviewDao.findReviewByProductID(productID);
    res.json(reviews);
}

const findReviewsByUserId = async (req, res) => {
    const userID = req.params.userID;
    const reviews = await reviewDao.findReviewByUser(userID);
    res.json(reviews);
}

export default (app) => {
    app.post('/api/products/:productID/reviews/:userID', postReview);
    app.get('/api/products/:productID/reviews', findReviewsByProductID);
    app.get('/api/users/:userID/reviews', findReviewsByUserId);
}

