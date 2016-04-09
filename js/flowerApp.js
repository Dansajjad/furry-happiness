//Instantiation
var redRoses = new app.singleFlower({
  name: "Red Roses",
  price: 39.95,
  color: "Red",
  img: "images/redRoses.jpg",
  link: "redRose"
});

var rainbowRoses = new app.singleFlower({
  name: "Rainbow Roses",
  price: 29.95,
  color: "orange",
  link: "rainbowRose"
});

var heirloomRoses = new app.singleFlower({
  name: "Heirloom Roses",
  price: 19.95,
  img: "images/heirloomRoses.jpg",
  link: "heirloomRose"
});

/*Backbone models have access to a method called toJSON which looks
at our model and sends data as if it were a JSON like object.
It's not true JSON behind the scenes, but it's close enough
*/
/*to check how the instances look in the browser uncomment the lines below*/
// console.log(redRoses.toJSON());
// console.log(rainbowRoses.toJSON());
// console.log(heirloomRoses.toJSON());

//uncomment below to see the .on() log out a change message to the console
// rainbowRoses.set("price", 20); //change price


//instantiate a collection
var flowerGroup = new app.FlowersCollection([//adding flower model instances
  redRoses, rainbowRoses, heirloomRoses
]);
/*uncomment lines below to see .add() & .remove() methods
//flowerGroup.remove(heirloomRoses);
// flowerGroup.add(heirloomRoses)
console.log(flowerGroup.toJSON());






/* template */
// var redRoses = new app.singleFlower({
//   name: "",
//   price:,
//   color: "",
//   img: "images/.jpg",
//   link: ""
// });
