const express = require('express');
const bodyParser = require("body-parser");
const app = express();

const PORT = process.env.PORT;
const mongoURI = process.env.NODE_ENV === 'development' ? "mongodb://localhost/url-shortener" : `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds151066.mlab.com:51066/url-shortener`;
const mongoose = require("mongoose");

const connectOptions = {
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE,
    useNewUrlParser: true,
};

mongoose.Promise = global.Promise;
mongoose.connect(mongoURI, connectOptions, (err, db) => {
    if (err) console.log(`Error: ${err}`);
    console.log(`Connected to MongoDB`);
});
app.use(bodyParser.json());   
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", process.env.REACT_ENDPOINT);
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-type, Accept, x-access-token, X-Key");
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