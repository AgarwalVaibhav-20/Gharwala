const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for customer reviews
const customerReviewSchema = new Schema({
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true }
});

// Define the schema for the product
const productMens = new Schema({
  company: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  PrePrice: { type: String, required: true },
  discount: { type: String, required: true },
  ProductDetails: { type: [String], required: true },
  sizeandfit: { type: [String], required: true },
  Material_Care: { type: [String], required: true },
  CustomerReview: { type: [customerReviewSchema], required: true },
  images: {
    image1: { type: String, required: true },
    image2: { type: String, required: true },
    image3: { type: String, required: true },
    image4: { type: String, required: true }
  }
});
const ProductforMens = mongoose.model('forMens', productMens);
module.exports= ProductforMens;