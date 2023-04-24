import mongoose from 'mongoose';

const schema = mongoose.Schema(
    {
        id: String,
        title: String,
        description: String,
        price: Number,
        rating: Number,
        stock: Number,
        brand: String,
        thumbnail: String,
        image: String,
        seller: String,
    },
    {
        collection: 'products'
    }
);

export default schema;