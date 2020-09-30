const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const tweetSchema = new mongoose.Schema(
    {
        user_id: { type: ObjectId, ref: "User" },
        message: {
            type: String,
            trim: true,
            required: true,
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Tweet", tweetSchema);