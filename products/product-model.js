import mongoose from 'mongoose';
import productSchema from './product-schema.js';

const productsModel = mongoose
    .model('ProductModel', productSchema);

export default productsModel;