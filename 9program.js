var app = require('koa')();
var session = require('koa-session');
var port = process.argv[2] || 3000;

app.keys = ['secret', 'keys'];

app.use(session(app));

console.log('App listening on port ' + port);

app.use(function* (){
  var numSessions = ~~this.session.views + 1;
  this.session.views = numSessions;
  this.body = numSessions + ' views';
});

app.listen(port);
