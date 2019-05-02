const mongoose = require("mongoose");
const validUrl = require("valid-url");
const UrlShorten = mongoose.model("UrlShorten");
const shortid = require("shortid");
const errorUrl = process.env.NODE_ENV === 'development' ? "http://localhost/error" : "https://hackless.herokuapp.com/error";


module.exports = app => {
    app.get("/:code", async (req, res) => {
        const urlCode = req.params.code;
        const item = await UrlShorten.findOne({ urlCode: urlCode });
        if (item) {
            return res.redirect(item.originalUrl);
        } else {
            return res.redirect(errorUrl);
        }
    });
    app.post("/", async (req, res) => {
        const { originalUrl, shortBaseUrl } = req.body;
        if (validUrl.isUri(shortBaseUrl)) {
        } else {
            return res
                .status(401)
                .json("Invalid base url");
        }
        const urlCode = shortid.generate();
        const updateAt = new Date();
        if (validUrl.isUri(originalUrl)) {
            try {
                const item = await UrlShorten.findOne({ originalUrl: originalUrl });
                if (item) {
                    res.status(200).json(item);
                } else {
                    shortUrl = shortBaseUrl + "/" + urlCode;
                    const item = new UrlShorten({
                        originalUrl,
                        shortUrl,
                        urlCode,
                        updateAt,
                    });
                    await item.save();
                    res.status(200).json(item);
                }
            } catch (err) {
                res.status(401).json("Invalid user id");
            }
        } else {
            return res
            .status(401)
            .json("Invalid original url");
        }
    });
};