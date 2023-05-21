require("../models/db");
const BucketList = require("../models/bucketListSchema.js");

// Get all bucket list items

exports.getAllBucketListItems = async (req, res) => {
  try {
    const bucketList = await BucketList.find({});
    res.status(200).json(bucketList);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a single bucket list item

exports.getBucketListItem = async (req, res) => {
  try {
    const bucketList = await BucketList.findById(req.params.id);
    res.status(200).json(bucketList);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Create a new bucket list item

exports.createBucketListItem = async (req, res) => {
  const newBucketList = new BucketList({
    title: req.body.title,
    description: req.body.description,
    userId: req.body.userId, // This is the user's ID
  });
  try {
    await newBucketList.save();
    res.json(newBucketList);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an existing bucket list item

exports.updateBucketListItem = async (req, res) => {
  try {
    const bucketList = await BucketList.findById(req.params.id);
    bucketList.title = req.body.title;
    bucketList.description = req.body.description;
    await bucketList.save();
    res.json(bucketList);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a bucket list item

exports.deleteBucketListItem = async (req, res) => {
  try {
    const bucketList = await BucketList.findById(req.params.id);
    await BucketList.deleteOne({ _id: req.params.id });
    res.json({ message: "Bucket list item deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};