var CatApi = function(app) {

  var cats = [{
    name: "Jolly",
    breed: "Moggy"
  },
  {
    name: "Garfield",
    breed: "Orange"
  }];

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
  });

  app.get('/api/cats', function(req, res) {
    res.json({data: cats});
  });

}

module.exports = CatApi;