var app = require('koa')();

port = process.argv[2] || 3000;

app.use(errorHandler());

console.log('App running on port ' + port);

app.use(function* (){
  console.log('I am using this thing from path: ' + this.path);
  if (this.path === '/error') throw new Error ('ooops');
  this.body = 'OK';
});

function errorHandler(){
  return function* (next){
    try{
      yield next;
    }
    catch(err){
      this.body = 'internal server error';
      this.status = 500;
    }
  }
}

app.listen(port);