var ApiRequest = require('./api_request');

var Cats = function() {

}

Cats.prototype.all = function(onCompleted) {
  var url = "http://localhost:3000/api/cats";
  var apiRequest = new ApiRequest();
  apiRequest.makeRequest(url, function(cats) {
    onCompleted(cats.data);
  })
}

module.exports = Cats;