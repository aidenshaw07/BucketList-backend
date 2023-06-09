require("../models/db");
const BucketList = require("../models/bucketListSchema.js");

// Get all bucket list items

exports.getAllBucketListItems = async (req, res) => {
  try {
    const bucketList = await BucketList.find().sort({ createdAt: +1 });
    res.status(200).json(bucketList);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a single bucket list item

exports.getBucketListItem = async (req, res) => {
  try {
    const bucketList = await BucketList.find({ userId: req.params.id }).sort({
      createdAt: -1,
    });
    res.status(200).json(bucketList);
    console.log(bucketList);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all the bucket list items for a specific user

exports.getAllBucketListItemsForUser = async (req, res) => {
  try {
    const bucketList = await BucketList.find({ userId: req.params.id }).sort({
      createdAt: -1,
    });
    res.status(200).json(bucketList);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Create a new bucket list item

exports.createBucketListItem = async (req, res) => {
  const { title, description, userId, userName } = req.body;

  if (!userId) {
    return res.status(400).json({ message: "userId is required" });
  }

  const newBucketList = new BucketList({
    title,
    description,
    userId,
    userName,
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
    if (!bucketList) {
      return res.status(404).json({ message: "Bucket list item not found" });
    }
    await BucketList.deleteOne({ _id: req.params.id });
    res.json({ message: "Bucket list item deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
