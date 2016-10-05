var CatApi = function(app) {

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
  });

}

module.exports = CatApi;