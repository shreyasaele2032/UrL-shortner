const express = require('express');
const app = express();
const PORT = 8001;

const URL = require("./models/url");
const urlRoute = require('./route/url');
const { mongodbconnect } = require('./connect');

app.use(express.json());
app.use('/url', urlRoute);

mongodbconnect('mongodb://localhost:27017/short-URL')
.then(() => console.log("mongodb connected"))
.catch(console.error);

app.get('/:shortId', async (req, res) => {
    console.log("🔥 GET ROUTE HIT");
    try {
        const shortId = req.params.shortId;

        console.log("GET shortId:", shortId);

        const entry = await URL.findOne({ shortId });

        console.log("DB entry:", entry);

        if (!entry) {
            return res.status(404).send("Not found");
        }

        return res.redirect(entry.redirectUrl);

    } catch (err) {
        console.log(err);
        return res.status(500).send("Server error");
    }
});

app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
});