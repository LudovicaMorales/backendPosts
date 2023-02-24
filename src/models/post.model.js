import mongoose from "mongoose";
const { Schema, model } = mongoose;

const postSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "El campo 'title' es requerido"]
        },
        description: {
            type: String,
            required: [true, "El campo 'description' es requerido"]
        },
        imgUrl: {
            type: String,
            required: [true, "El campo 'imgUrl' es requerido"]
        },
        date: {
            type: Date
        },
        category: {
            type: String,
            enum: ["All Categories", "Business", "Social", "Important", "Cute"],
            required: [true, "El campo 'category' es requerido, los valores deben ser 'Bussiness', 'Social', 'Important', 'Cute'"]
        }
    },{
        timestamps: true
    }
)

export const postModel = model('post', postSchema)