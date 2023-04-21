import mongoose from 'mongoose';

const schema = mongoose.Schema(
    {
        email: String,
        username: String,
        password: String,
        role: {
            type:String,
            enum: ['Buyer', 'Seller'],
            default: 'Buyer'
        },
    },
    {
        collection: 'users'
    }
);

export default schema;