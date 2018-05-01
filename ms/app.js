const express = require('express')
const app = express()
const request = require('superagent')

app.get('/', function (req, res) {
	request.get('192.168.0.7:3000')
	.then((e)=>{
		console.log(e);
	})
	.catch((e)=>{
		console.log(e.message);
	})
})

app.post('/', function (req, res) {
    console.log(req.headers)
    res.send('post request!')
})

app.listen(2500, () => console.log('Example app listening on port 2500!'))