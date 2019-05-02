const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const PORT = 7000;
const mongoURI = "mongodb://localhost/url-shortener";
const mongoose = require("mongoose");
require('./models/UrlShorten');
require('./routes/urlshorten')(app);

const connectOptions = {
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE,
    useNewUrlParser: true,
};

mongoose.Promise = global.Promise;
mongoose.connect(mongoURI, connectOptions, (err, db) => {
    if (err) console.log(`Error: ${er}`);
    console.log(`Connected to MongoDB`);
});
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-type, Accept, x-access-token, X-Key");
    if (req.method === "OPTIONS") {
        res.status(200).end();
    } else {
        next();
    }
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});