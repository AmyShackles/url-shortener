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

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});