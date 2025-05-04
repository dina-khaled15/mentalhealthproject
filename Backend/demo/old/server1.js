require('dotenv').config();
const express = require('express');

const app = express();

//application level middleware
app.use(express.json());



//route level middleware
const loggingMiddleware = (req, res, next) => {
    console.log('logging middleware');
    next();
}


// app.use(loggingMiddleware);


app.get("/:id", loggingMiddleware, (req, res, next) => {
    console.log(req.params);
    console.log('hello');
    res.json({
        message: `hello ${req.params.id}`
    })
})


app.post("/", (req, res) => {
    console.log(req.body);
    res.json({
        message: req.body
    })
})






app.listen(3000, () => console.log('listening on port 3000 , http://localhost:3000   , http://127.0.0.1:3000'));