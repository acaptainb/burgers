import { Schema } from "mongoose";



export const burgerSchema = new Schema({
    name: { type: String, minLength: 1, maxLength: 25, required: true, },
    price: { type: Number, min: 1, max: 1000, required: true }
})