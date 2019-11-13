const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

//const server = express();
//const io = require('socket.io')(server);

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb+srv://admin:admin@kanban-rhzzl.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use((req, res, next) => {
    req.io = io;
    next();
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);