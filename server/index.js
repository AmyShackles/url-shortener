require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors')

const app = express();
const PORT = process.env.PORT;
const mongoURI = process.env.NODE_ENV === 'development' ? "mongodb://localhost/url-shortener" : process.env.MONGO_URI;
const mongoose = require("mongoose");
app.use(cors({origin: process.env.REACT_ENDPOINT, methods: ['GET','PUT', 'POST', 'DELETE'], allowedHeaders: ['Content-Type', 'Accept', 'x-access-token', 'X-Key']}))

const connectOptions = {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.Promise = global.Promise;
mongoose.connect(mongoURI, connectOptions, (err, db) => {
    if (err) console.log(`Error: ${err}`);
    console.log(`Connected to MongoDB`);
});
app.use(bodyParser.json());   
app.use(function(req, res, next) {
    if (req.method === "OPTIONS") {
        res.status(200).end();
    } else {
        next();
    }
});
   
require('./models/UrlShorten');
require('./routes/urlshorten')(app);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});
