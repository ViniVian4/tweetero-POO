import { User } from "../models/userModel.js";
import db from "../db/db.js";

export async function signUp(req, res) {
  const { username, avatar } = req.body;

  if (!username || !avatar) {
    res.status(400).send('Todos os campos são obrigatórios!');
    return;
  }

  const user = new User ({username, avatar});

  db.usuarios.push(user);

  console.log(db.usuarios);

  res.status(200).send('OK deu tudo certo');
}