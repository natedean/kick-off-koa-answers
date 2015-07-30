var app = require('koa')();

app.keys = ['secret','keys'];

var port = process.argv[2] || 3000;

app.use(function* (){
  var currViews = ~~this.cookies.get('view', ['signed']) + 1;
  this.cookies.set('view', currViews, ['signed']);
  this.body = currViews + ' views';
});

app.listen(port);
