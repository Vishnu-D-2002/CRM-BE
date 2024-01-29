const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const { MONGODB, PORT } = require('./config');
const UserRouter = require('./Routes/user');

const app = express();

mongoose.set('strictQuery', false);

console.log('Connecting to MongoDB...');

mongoose.connect(MONGODB)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen((PORT, () => {
            console.log(`Server live in http://localhost:${PORT}`)
        }));
    });

app.use(express.json());
app.use(cors());

app.use('/', UserRouter);