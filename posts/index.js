const express = require("express");
const {randomBytes} = require('crypto')
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json());
// api Route to Get
const posts = {};
app.get("/posts", (req, res) => {
  res.send(posts);
});
//api Route to post
app.post("/posts", (req, res) => {
    //Generate a random bytes and assign it Id
    const id = randomBytes(4).toString('hex')

    const {title}= req.body

    posts[id]= {
        id,title
    }

    res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log("we're listening on port 4000");
});
