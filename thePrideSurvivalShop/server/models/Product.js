import { Schema } from "mongoose";

export const ProductSchema = new Schema({
  productName: { type: String, required: true },
  price: { type: String, required: true},
  sku: { type: String, required: true},
  quantity: { type: String, required: true},
  currency: { type: String, required: true},
  description: { type: String, required: true},
  imageUrl: { type: String, required: true},
}, { timestamps: true, toJSON: { virtuals: true } })
