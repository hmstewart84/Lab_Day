var express = require('express');
var path = require('path');
var CatApi = require('./api/cat_api').CatApi;

var app = express();

app.use(express.static('client/build'));

app.listen(3000, function() {
  new CatApi(app);
  console.log("App running on port", this.address().port);
});