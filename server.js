const express = require('express');
const cors = require('cors');
require('dotenv').config(); 

const pool = require('./db');

const app = express();

app.use(cors({
  origin: "https://gestao-good-market.vercel.app"
}));
app.use(express.json());

app.use('/auth', require('./routes/auth'));
app.use('/funcionarios', require('./routes/funcionarios'));
app.use('/escalas', require('./routes/escalas'));
app.use('/tarefas', require('./routes/tarefas'));

module.exports = app