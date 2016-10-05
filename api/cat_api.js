var CatQuery = require('../db/cat_query');

// var cats = [{
//   name: "Jolly",
//   breed: "Moggy"
// },
// {
//   name: "Garfield",
//   breed: "Orange"
// }];

var CatApi = function(app) {

  var query = new CatQuery();

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
  });

  app.get('/api/cats', function(req, res) {
    query.getAll(function(data) {
      res.json(data);
    });
  });

  app.post('/api/cats', function(req, res) {
    query.createCat(req.body.cat, function() {
      query.getAll(function(data) {
        res.json(data);
      });
    });
  });

}

module.exports = {
  CatApi: CatApi
  // cats: cats
}