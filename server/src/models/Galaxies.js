import { Schema } from "mongoose";


export const GalaxySchema = new Schema(
    {
        sizeInLightYears: { type: Number, required: true, minLength: 1, MaxLength: 100000000000000000000000 },
        stars: { type: Number, MaxLength: 100000000000000000000000000 },
        blackHoles: { type: Number, MaxLength: 1000 },
        suns: { type: Number, MaxLength: 1000 },
        gasClouds: { type: Number, MaxLength: 1000000000 },
        growthSpeedInLightYears: { type: Number, MaxLength: 1000000000 },
        creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }

    },
    {
        timestamps: true,
        toJSON: { virtuals: true }
    },
)
GalaxySchema.virtual('creator', {
    localField: 'creatorId',
    ref: 'Account',
    foreignField: '_id',
    justOne: true
})

