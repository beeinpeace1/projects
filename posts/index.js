var express = require('express')
var app = express()
var MongoClient = require('mongodb').MongoClient
var bodyparser = require('body-parser')
var url = "mongodb://localhost:27017/";


app.use(bodyparser.json());
app.use(bodyparser.urlencoded());
app.set('view engine', 'ejs');


// setup express static file server

app.use(express.static('public'));

app.get('/', (request, response, next) => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("posts");
        dbo.collection("post").find({}).toArray(function (err, result) {
            if (err) throw err;
            response.render('allposts', { result: result });
        });
    });
})

app.get('/add', (req, res, next)=>{
    res.render('addpost');
})

app.post('/add', (reqExpress, resExpress, next) => {
    MongoClient.connect(url, function (err, db) {
        if (err) { console.log(err.message) };

        var dbo = db.db("posts");
        // var myobj = { author: `${reqExpress.body.author}`, post: `${reqExpress.body.post}`};
        dbo.collection("post").insertOne( {author: `${reqExpress.body.author}`, post:`${reqExpress.body.post}` }, function (err, res) {
            if (err) { console.log(err.message) }
            console.log("1 document inserted");
            db.close();
            resExpress.redirect('/');

        });
    });
})
// read the errors.


app.listen(3000, () => {
    console.log("listeing at port 3000");
})