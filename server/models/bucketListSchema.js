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
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  userName: { type: mongoose.Schema.Types.String, ref: "User" },
});

bucketListSchema.set("timestamps", true);

module.exports = mongoose.model("BucketList", bucketListSchema);
