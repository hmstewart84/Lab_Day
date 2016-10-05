var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('client/build'));

app.listen(3000, function() {
  console.log("App running on port", this.address().port);
});