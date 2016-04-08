//Namespace our app
var app = app || {}; //assigning a value of app or empty object

//Our Model Class
app.singleFlower = Backbone.Model.extend({ //namespacing because some other variable on page can have the name "singleFlower"

  defaults: { //default properties
    color: "pink",
    img: "images/placeholder.jpg"
  }

});
