var app = require('koa')();
var fs = require('fs');
var router = require('koa-router')();

var port = process.argv[2];
var file = process.argv[3];

if (!port){ throw new Error('Please enter port number as second argument') }
if (!file){ throw new Error('Please enter a filename as third argument') }

router.get('/json', function *(next){
  this.body = { foo: 'bar' };
});

router.get('/stream', function *(){
  this.body = fs.createReadStream(file);
});

app.use(router.routes());

app.listen(port);


