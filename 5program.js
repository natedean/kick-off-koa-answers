var app = require('koa')();

var port = process.argv[2];

if (!port){ throw new Error('Enter a port man!') }

app.use(function *(){
  this.body = this.request.is('json') ? { message: 'hi!' } : 'ok';
});

app.listen(port);
