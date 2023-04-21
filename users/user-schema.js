import mongoose from 'mongoose';

const schema = mongoose.Schema(
    {
        userName: String,
        role: {
            type:String,
            enum: ['Buyer', 'Seller'],
            default: 'Buyer'
        },
        password: String,
        email: String,
    },
    {
        collection: 'users'
    }
);

export default schema;