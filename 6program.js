var app = require('koa')();
var parse = require('co-body');
var port = process.argv[2] || 3000;

app.use(responseTime());
app.use(upperCase());

app.use(function* (){
  this.body = 'hello koa';
});

function responseTime(){
  return function* (next){
    // record start time
    var startTime = new Date; 
    yield next;
    // set X-Response-Time head
    var ms = new Date - startTime;
    this.set('X-Response-Time', ms + 'ms');
  };
}

function upperCase(){
  return function* (next){
    // do nothing
    yield next;
    // convert this.body to upper case
    this.body = this.body.toUpperCase();
  }
}

console.log('App listening on port ' + port);

app.listen(port);


