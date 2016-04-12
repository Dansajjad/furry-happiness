# furry-happiness
Experiments in Backbone.js

###Steps
####Section 1
* set up folder structure
* set up html skeleton with script tags in the right order
* create a model class in the singleFlowerModel.js
* create model instances in flowerApp.js
* [experimenting watching for instance changes by adding the following methods to our model in singleFlowerModel.js:
    initialize() - watches for changes,
    get() - find a specific model property,
    set() - change or add new properties to models,
    on() - triggers the changes
  ]
* create collection class in allFlowers.js
* instantiate collection in flowerApp.js
####Section 2: Views
Key Points:
Views: contain rules for displaying data into HTML
use render() to build the html structure
create view for i)model and ii) collection
store model instance data in an article tag
store collection instance data in a section tag (a wrapper for group of article tags)
* create view instance in singleFlowerView.js; inside it add:
* tagName, className, the template hook, and the render function
* create a template in index.html
