const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('*', function(req, res, next){
    console.log("all");
    next();
})


app.get('/read/*', function (req, res, next) {
    res.send("get req")
})

app.get('/', function (req, res) {
    res.send("get req")
})

app.post('/', function (req, res) {
    res.json(req.body)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))