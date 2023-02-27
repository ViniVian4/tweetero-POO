import { Tweet } from "../models/tweetModel.js";
import db from "../db/db.js";

export async function createTweet( req, res ) {
  const { tweet, username } = req.body;

  if (!username || !tweet) {
    return res.status(400).send('Todos os campos são obrigatórios!');
  }

  const { avatar } = db.usuarios.find(user => user.username === username);

  const newTweet = new Tweet ({username, tweet, avatar});

  db.tweets.push(newTweet);

  res.status(201).send('OK, seu tweet foi criado');

}

export async function getUserTweets( req, res ) {
  const { username } = req.params;

  const tweetsDoUsuario = db.tweets.filter(t => t.username === username);

  res.status(200).send(tweetsDoUsuario);
}

export async function getTweets( req, res ) {
  const { page } = req.query;

  if (page && page < 1) {
    res.status(400).send('Informe uma página válida!');
    return;
  }

  const limite = 10;
  const start = (page - 1) * limite;
  const end = page * limite;

  if (db.tweets.length <= 10) {
    return res.send(reverseTweets());
  }

  res.status(200).send([...db.tweets].reverse().slice(start, end));
}

function reverseTweets() {
  return [...db.tweets].reverse();
}