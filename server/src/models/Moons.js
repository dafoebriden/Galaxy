import { Schema } from "mongoose";


export const MoonSchema = new Schema(
    {
        size: { type: String, required: true, minLength: 2, maxLength: 20 },
        surface: { type: String, required: true, minLength: 2, maxLength: 20 },
        atmosphere: { type: String, required: true, minLength: 2, maxLength: 20 },
        core: { type: String, required: true, minLength: 2, maxLength: 20 },
        layers: { type: Number, required: true, min: 2, maxLength: 2000 },
        creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
    },
    {
        timestamps: true,
        toJSON: { virtuals: true }
    },
)
MoonSchema.virtual('creator', {
    localField: 'creatorId',
    ref: 'Account',
    foreignField: '_id',
    justOne: true
})