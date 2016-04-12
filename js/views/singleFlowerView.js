//Namespace our flowerApp
var app = app || {};

//The view for a single model view, which is 1 flower
app.singleFlowerView = Backbone.View.extend({//single flower view
  //properties that are available to all Views
  tagName: "article", //Backbone default is a "div" tag if this isn't defined
  className: "flowerListItem",

  template = _.template( $("#flowerElement").html() ),//telling _ where to build the template
  //jQuery is targeting an element on the page, chaining with .html(), meaning that it will take the
  //model data and place it inside the template
  //at this point bb knows that it has to populate a template with some model data, but it doesn't know
  //where the model data is. render method will tell bb where the data is

  render: function()
  {
    var flowerTemplate = this.template(this.model.toJSON());//looking for model data but doesn't know which model to look at yet
    this.$el.html(flowerTemplate);//.html() is populating the el with model data in json format from ln18
    return this;//
  }
});
/*
  render looks at all the logic I've defined up to this point, the tag name,
  the class name, and the template property, and build out that element.
  I'm telling it to do this with a flower template variable on line 18.

  The this.template method is a reference to the template property unique to my view.
  And this is defined on line 10. I'm passing a parameter to the template and it's a
  reference to the model that will be available to the view at some point and it's
  converting the model data to a JSON like JavaScript object with the .toJSON() method.

  The code on line 19 is referencing this.$el. The point of my model view is to create a webpage element
  for my single model instance. Now, I did define that element as an article tag on line 7, and
  I did give this article tag a className of flowerListItem on line 8, but backbone needs an efficient way
  to look at all these properties.

  Much more efficient than how I've set it up so far. Backbone is doing this with el. el contains
  properties I defined above and passes them to backbone as one entire package, as an easy reference.
  el also has a dollar sign in front of it. Meaning, I'm referencing it with jQuery in this line of
  code. This means I can apply jquery methods to it, like I 'm doing with jQuerie's .html() method, right here.
  The HTML method is populating this el with whatever parameters I pass to it.

  The parameter being passed to it in this case is flower template, which is a reference
  to the variable directly above on line 18. Which again is a reference to the model data in
  JSON like format, we don't yet know which specific model.
*/
