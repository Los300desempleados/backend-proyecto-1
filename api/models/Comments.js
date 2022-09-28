import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    movieId: {
        type: String,
        required: true
    },
    clienteId: {
        type: String,
        required: true
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