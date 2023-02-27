import express from "express";
import { createTweet, getUserTweets, getTweets } from "../controllers/tweetController.js";

const tweetRouter = express.Router();

tweetRouter.post("/tweets", createTweet)
  .get('/tweets/:username', getUserTweets)
  .get('/tweets', getTweets);

export { tweetRouter }