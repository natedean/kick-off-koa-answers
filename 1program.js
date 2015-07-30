var app = require('koa')();
var port = process.argv[2];

if (!port){
  var err = new Error('Port number must be given as first argument.');
  throw err;
}

app.use(function* (){
  this.body = 'hello koa';
});

app.listen(port);

