var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  mongoose = require('mongoose'),
  Bookmark = require('./api/models/bookmarksModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/bookmarkdb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/bookmarksRoutes');
routes(app);

app.listen(port);

console.log('bookmark RESTful API server started on: ' + port);
