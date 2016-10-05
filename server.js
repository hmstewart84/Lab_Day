var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var CatApi = require('./api/cat_api').CatApi;

app.use(express.static('client/build'));

app.listen(3000, function() {
  new CatApi(app);
  console.log("App running on port", this.address().port);
});