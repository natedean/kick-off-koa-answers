var app = require('koa')();
var router = require('koa-router')();

var port = process.argv[2];

if (!port) { throw new Error('A port number must be given as first argument.');}

router.get('/', function *(next){
  this.body = 'hello koa';
});

router.get('/404', function *(next){
  this.status = 404;
  this.body = 'page not found';
});

router.get('/500', function *(next){
  this.status = 500;
  this.body = 'internal server error';
});

app.use(router.routes());

app.listen(port);
