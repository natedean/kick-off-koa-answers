var app = require('koa')();
var views = require('co-views');
var render = views(__dirname + '/views', { ext: 'ejs' });

var port = process.argv[2] || 3000;

var user = {
  name: {
    first: 'Tobi',
    last: 'Holowaychuk'
  },
  species: 'ferret',
  age: 3
};

app.use(function* (){
  console.log('user: ', user);
  this.body = yield render('user', {user: user});
});

console.log('App listening on port ' + port);

app.listen(port);

