//Namespace our flowerApp
var app = app || {};

//The view for all the flowers
app.allFlowersView = Backbone.View.extend({

  tagName: "section", //define a tagName

  render: function()
  {
    this.collection.each(this.addFlower, this); //each will perform a task defined by the parameter
    return this;
  },

  //the render method is applying the addFlower method to every model instance
  //in my collection. It does this by accepting a parameter called addFlower.
  //Then it's creating a new instance of my model view with a variable name called flowerview.

  addFlower: function(flower)
  {
    var flowerView = new app.singleFlowerView({ model: flower });
    this.$el.append(flowerView.render().el);
  }
});


/*
On ln 17 I am telling render to look for this.collection which is a reference to
whatever collection I attach to it.
this.collection is chained to a method called, each,
which is available to all backbone collections. What each is doing is looking
at the items inside my collection and performing a task. That task is defined
inside these parentheses here. The task in question is addFlower. This is a
custom function that I'll create shortly. Now I need to tell the each method
that addFlower is part of this view, and I've done this by putting the
JavaScript this keyword before addFlower, on ln 17. And as a second parameter,
I've added the, this keyword, to give context for all this code, which I have
to do sometimes with javascript, and this is one of those times. If I don't do
this, the addFlower method I'm about to create won't work.
I've added a return this statement on line 18 to make sure
that I can safely chain this render method with other methods. Now, I have to
create my custom addFlower method in allflowersview.js.
*/
