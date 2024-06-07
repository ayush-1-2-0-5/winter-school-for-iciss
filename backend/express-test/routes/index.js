
const express = require('express');
const userRouter = require("./user");
const cardRouter=require("./cards");
const contentRouter=require("./content")

const router = express.Router();

router.use("/user", userRouter)
router.use("/cards",cardRouter)
router.use("/content",contentRouter)

module.exports = router;