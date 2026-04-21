const { nanoid } = require('nanoid');
const URL = require('../models/url');

async function handleshortId(req, res) {
    const body = req.body;

    if (!body || !body.url) {
        return res.status(400).json({ error: "url is required" });
    }

    const shortid = nanoid(8);

    await URL.create({
        shortId: shortid,
        redirectUrl: body.url,
    });

    return res.status(201).json({ shortId: shortid });
}

module.exports = { handleshortId };

// The client sends data using a POST request,
// Express middleware parses the incoming JSON into a JavaScript object,
// and store it in req.body
