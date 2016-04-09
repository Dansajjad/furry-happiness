//a collection is a group of model instances

//Namespace our flowerApp
var app = app || {};

//creating a collection class
  //it is a must to let it know which model it is based on
  app.FlowersCollection = Backbone.Collection.extend({
    model: app.singleFlower
  });

//instantiate collection in flowerApp.js


//adding model instances to a collection
  //i) add instances as parameters using a js array
  //ii) add using the collection's internal .add() method


//removing model instances
  //.remove()
