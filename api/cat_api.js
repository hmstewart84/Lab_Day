var cats = [{
  name: "Jolly",
  breed: "Moggy"
},
{
  name: "Garfield",
  breed: "Orange"
}];

var CatApi = function(app) {

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
  });

  app.get('/api/cats', function(req, res) {
    res.json({data: cats});
  });

}

module.exports = {
  CatApi: CatApi,
  cats: cats
}