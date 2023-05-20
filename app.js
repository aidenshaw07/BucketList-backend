const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require("./server/routes/bucketListRoutes.js");
app.use("/", routes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
