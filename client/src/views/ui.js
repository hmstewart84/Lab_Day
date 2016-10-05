var Cats = require('../models/cats');

var UI = function() {
  var cats = new Cats();
  cats.all(function(results) {
    this.render(results);
  }.bind(this));
}

UI.prototype.createText = function(text, label) {
  var p = document.createElement(p);
  p.innerText = label + " " + text;
  return p;
}

UI.prototype.appendText = function(element, text, label) {
  var pTag = this.createText(text, label);
  element.appendChild(pTag);
}

UI.prototype.render = function(cats) {
  var container = document.getElementById('cats');

  for (var cat of cats) {
    var li = document.createElement("li");
    this.appendText(li, cat.name, "Name:");
    this.appendText(li, cat.breed, ", Breed:");
    container.appendChild(li);
  }
}

module.exports = UI;