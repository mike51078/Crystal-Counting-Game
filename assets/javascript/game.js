$( document ).ready(function(){

var targetNumber = 0;
var currentScore = 0;
var valCrystal1 = 0;
var valCrystal2 = 0;
var valCrystal3 = 0;
var valCrystal4 = 0;




var targetNumber = (Math.floor(Math.random() * 101)+19);
console.log(targetNumber);
var valCrystal1 = (Math.floor(Math.random() * 12) + 1);
var valCrystal2 = (Math.floor(Math.random() * 12) + 1);
var valCrystal3 = (Math.floor(Math.random() * 12) + 1);
var valCrystal4 = (Math.floor(Math.random() * 12) + 1);







document.getElementById("gems").onclick = function() {
    i
};


function myFunction() {
  document.getElementById("gems").innerHTML = "YOU CLICKED ME!";
}









  $("#number-to-guess").text(targetNumber);

  
  // Next we create a for loop to create crystals for every numberOption.
  for (var i = 0; i < numberOptions.length; i++) 

    // For each iteration, we will create an imageCrystal
    var imageCrystal1 = $("<img>");
    var imageCrystal2 = $("<img>");
    var imageCrystal3 = $("<img>");
    var imageCrystal4 = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");

    // Links for each crystal image
    imageCrystal1.attr("sr
    imageCrystal2.attr("sr
    imageCrystal3.attr("sr
    imageCrystal4.attr("


    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal-1; imageCrystal-2; imageCrystal-3; imageCrystal-4);
    // $("#crystals").append(imageCrystal-2);
    // $("#crystals").append(imageCrystal-3);
    // $("#crystals").append(imageCrystal-4);

  }

  // This time, our click event applies to every single crystal on the page. Not just one.
  $(".crystal-image").on("click", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    alert("New score: " + counter);

    if (counter === targetNumber) {
      alert("You win!");
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
    }

  });
