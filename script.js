const express = require("express");
const app = express();
const multer = require("multer");
const upload = multer();
const Post = require("./api/post");
const postdata = new Post();

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    next();
});

app.use(express.json());

app.get("/greeting",(req,res) => {
    res.status(200).send("good morning");
});

app.get("/",(req,res) => {
    res.status(200).send("Hello world");
});

app.get("/api/posts",(req,res) => {
    res.status(200).send(postdata.get());
});

app.post("/api/posts",upload.none(),(req,res) => {
    const newpost = {
        "name": req.body.name,
        "gender": req.body.gender,
        "place": req.body.place
    }
    postdata.add(newpost);
    res.status(200).send("ok");
})

app.listen(process.env.PORT || 7000,() => {
    console.log("App listening  on port:7000");
});
