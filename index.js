const express = require('express');
const app = express();
const PORT = 8004;
const path = require('path');
const cookieParser=require('cookie-parser');
const {restrictToLoggedInUserOnly}=require('./middlewares/auth');
const static = require('./route/staticRouter');
const URL = require('./models/url');
const urlRoute = require('./route/url');
const userRouter=require('./route/user');

const { mongodbconnect } = require('./connect');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use('/', static);
app.use('/url', restrictToLoggedInUserOnly , urlRoute);
app.use('/user',userRouter);


app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;

    const entry = await URL.findOne({ shortId });

    if (!entry) {
        return res.status(404).send("Not found");
    }

    return res.redirect(entry.redirectUrl);
});

mongodbconnect('mongodb://localhost:27017/short-URL')
.then(() => {
    console.log("mongodb connected");

    app.listen(PORT, () => {
        console.log(`server started at ${PORT}`);
    });
})
.catch(console.error);


