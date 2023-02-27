export class Tweet {
  constructor ( { username, tweet, avatar }) {
    this.username = username;
    this.tweet = tweet;
    this.avatar = avatar;

    return this;
  }
}