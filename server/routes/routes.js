const express = require("express");
const router = express.Router();
const bucketListController = require("../controllers/bucketListController");
const userController = require("../controllers/userController");


// App Routes

// BucketList Routes
router.get("/bucketlist", bucketListController.getAllBucketListItems);
router.get("/bucketlist/:id", bucketListController.getBucketListItem);
router.post("/bucketlist", bucketListController.createBucketListItem);
router.put("/bucketlist/:id", bucketListController.updateBucketListItem);
router.delete("/bucketlist/:id", bucketListController.deleteBucketListItem);

// User Routes
router.get("/user", userController.getAllUsers);
router.post("/user", userController.createUser);

// Login Routes
router.post("/login", userController.loginUser);

module.exports = router;