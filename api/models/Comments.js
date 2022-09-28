import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie",
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    comment: [{
        type: "String",
        required: true
    }],
    date: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('Comment', commentSchema)