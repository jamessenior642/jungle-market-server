import mongoose from 'mongoose';

const schema = mongoose.Schema(
    {
        _id:String,
        userName: String,
        role: {
            type:String,
            enum: ['Buyer', 'Seller'],
            default: 'User'
        },
        password: String,
        email: String,
    },
    {
        collection: 'users'
    }
);

export default schema;