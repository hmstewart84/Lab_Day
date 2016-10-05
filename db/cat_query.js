var MongoClient = require('mongodb').MongoClient;

var CatQuery = function() {
  this.url = 'mongodb://localhost:27017/cats_site';
}

CatQuery.prototype.getAll = function(onQueryFinished) {
  MongoClient.connect(this.url, function(err, db) {
    if(db) {
      var collection = db.collection('cats');
      collection.find().toArray(function(err, docs) {
        onQueryFinished(docs);
      })
    }
  });
}


module.exports = CatQuery;