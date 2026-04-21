//we have to store shortid and redirecturl in database bcz If you don’t store it anywhere:
// Server has no memory
// When someone clicks /abc123(short url), it doesn’t know where to send
// ❌ Redirect will fail

const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true,
    },
    redirectUrl: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('url', UrlSchema);



// visithistory:[{timestamp:{type:Number}}], => how many times we click the short url or stores all the clicks