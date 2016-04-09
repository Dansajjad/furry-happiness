//Namespace our app
var app = app || {}; //assigning a value of app or empty object

//Our Model Class
app.singleFlower = Backbone.Model.extend({ //namespacing because some other variable on page can have the name "singleFlower"

  defaults: { //default properties
    color: "pink",
    img: "images/placeholder.jpg"
  },

  //code below is not necessary but we will look at how to watch for instance changes
  //it is a good idea to watch for and inform of the changes
  initialize: function() {//will run everytime a new instance is created
    console.log("A model instance named " + this.get("name") +
    " has been created and it costs " + this.get("price"));

    //now to add the "on" method which watches for changes;
    this.on("change", function() {//looks for all changes
      console.log("Something in our model has changed.");
      //to check how this works got to flowerApp.js and
      //using .set() change an instance
    });

    this.on("change:price", function() {//looks for changes in price
      console.log("The price for the " + this.get("name") +
      " model just changed to $" + this.get("price") + " dollars.")
    });
  }//initialize

});
