const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const indicador = require('./routes/indicador.route')

const app = express();
app.use(express.json())

// Connecting db
let url = 'mongodb+srv://TecnoCRUD:<PASSWORD>@cluster0.m3ulr.mongodb.net/Bidea'
let mongoDB = process.env.MONGODB_URI || url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro na Ligação ao MongoDB'));

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Routes
app.use('/bideafactory', indicador)

app.listen(3333, console.log(`Server On ! Port: ${3333}`))