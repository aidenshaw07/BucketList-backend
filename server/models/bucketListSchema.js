const mongoose = require("mongoose");

const bucketListSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  userName: { type: mongoose.Schema.Types.String, ref: "User" },
});

module.exports = mongoose.model("BucketList", bucketListSchema);
