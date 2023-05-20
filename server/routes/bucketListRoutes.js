const express = require("express");
const router = express.Router();
const bucketListController = require("../controllers/bucketListController");


// App Routes

router.get("/bucketList", bucketListController.getAllBucketListItems);
router.get("/bucketList/:id", bucketListController.getBucketListItem);
router.post("/bucketList", bucketListController.createBucketListItem);
router.put("/bucketList/:id", bucketListController.updateBucketListItem);
router.delete("/bucketList/:id", bucketListController.deleteBucketListItem);

module.exports = router;