$( document ).ready(function(){

    var wins = 0
    var losses = 0
    var displayUserScore = 0
    var targetNumber = Math.floor(Math.random() * 101 +19)
    var valCrystal1 = (Math.floor(Math.random() * 12 + 1)
    var valCrystal2 = (Math.floor(Math.random() * 12 + 1)
    var valCrystal3 = (Math.floor(Math.random() * 12 + 1)
    var valCrystal4 = (Math.floor(Math.random() * 12 + 1)
  
    $('#numberToGuess').text(targetNumber);
    $('#wins').text(wins);
    $('#losses').text(losses);


//function to reset game after win or loss
    function reset(){
        Random=Math.floor(Math.random() * 101 + 19);
        console.log(Random)
        $('#scoreToMatch').text(Random);
        varCrystal1 = Math.floor(Math.random() * 12 + 1);
        varCrystal2 = Math.floor(Math.random() * 12 + 1);
        varCrystal3 = Math.floor(Math.random() * 12 + 1);
        varCrystal4 = Math.floor(Math.random() * 12 + 1);
        displayUserScore = 0;
        $('#totalScore').text(playerTotal);
        } 

    $('.blue').on ('click', function(){
        playerTotal = playerTotal + varCrystal1;
        console.log("New playerTotal= " + playerTotal);
        $('#totalScore').text(playerTotal); 
                //Win & lose conditions
            if (playerTotal == Random){
                woohoo();
            }
            else if ( playerTotal > Random){
                loser();
            }   
        })  
        $('.purple').on ('click', function(){
        playerTotal = playerTotal + varCrystal2;
        console.log("New playerTotal= " + playerTotal);
        $('#totalScore').text(playerTotal); 
            if (playerTotal == Random){
                woohoo();
            }
            else if ( playerTotal > Random){
                loser();
            } 
        })  
        $('.red').on ('click', function(){
        displayUserScore = displayUserScore + varCrystal3;
        console.log("New playerTotal= " + playerTotal);
        $('#totalScore').text(playerTotal);

                if (playerTotal == Random){
                woohoo();
            }
            else if ( displayUserTotalScore > Random){
                loser();
            } 
        })
        $('.orange').on ('click', function(){
        displayUserScore = displayUserScore + varCrystal4;
        console.log("New playerTotal= " + playerTotal);
        $('#totalScore').text(playerTotal); 
            
                if (playerTotal == Random){
                woohoo();
            }
            else if ( playerTotal > Random){
                loser();
            }


    var counter = 0;
    
    imageCrystal.attr("data-crystalvalue", (Math.floor(Math.random() * 12) + 1));

    // This time, our click event applies to every single crystal on the page. Not just one.
    $(".gems").on("click", function() {
  
      // Determining the crystal's value requires us to extract the value from the data attribute.
      // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
      // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
      // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
  
      var crystalValue = ($(this).attr("data-crystalvalue"));
      crystalValue = parseInt(crystalValue);
      console.log(crystalValue);
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
  





// var currentScore = 0;
// var wins = 0;
// var losses = 0;
// var targetNumber = (Math.floor(Math.random() * 101)+19);
// console.log(targetNumber);
// var valCrystal1 = (Math.floor(Math.random() * 12) + 1);
// var valCrystal2 = (Math.floor(Math.random() * 12) + 1);
// var valCrystal3 = (Math.floor(Math.random() * 12) + 1);
// var valCrystal4 = (Math.floor(Math.random() * 12) + 1);


// document.getElementById("crystal1").onclick = function() {
//     document.getElementById("displayUserScore").innerHTML = "Current Score: " + currentScore + valCrystal1;
//     if (currentScore == targetNumber) {
//         alert("Winner! Winner!");
//     }
//     else if (currentScore > targetNumber) {
//         alert("Please Try Again");
//     }
// };


// function myFunction() {
//   document.getElementById("gems").innerHTML = "YOU CLICKED ME!";
// }


// function reset(){
//     var targetNumber = (Math.floor(Math.random() * 101)+19);
//     console.log(targetNumber);
//     var valCrystal1 = (Math.floor(Math.random() * 12) + 1);
//     var valCrystal2 = (Math.floor(Math.random() * 12) + 1);
//     var valCrystal3 = (Math.floor(Math.random() * 12) + 1);
//     var valCrystal4 = (Math.floor(Math.random() * 12) + 1);
//     var currentScore = 0;
//     } 

// //////////////////

//   $("#number-to-guess").text(targetNumber);

  
//   // Next we create a for loop to create crystals for every numberOption.
//   for (var i = 0; i < numberOptions.length; i++) 

//     // For each iteration, we will create an imageCrystal
//     var imageCrystal1 = $("<img>");
//     var imageCrystal2 = $("<img>");
//     var imageCrystal3 = $("<img>");
//     var imageCrystal4 = $("<img>");

//     // First each crystal will be given the class ".crystal-image".
//     // This will allow the CSS to take effect.
//     imageCrystal.addClass("crystal-image");

//     // Links for each crystal image
//     imageCrystal1.attr("sr
//     imageCrystal2.attr("sr
//     imageCrystal3.attr("sr
//     imageCrystal4.attr("


//     // Each imageCrystal will be given a data attribute called data-crystalValue.
//     // This data attribute will be set equal to the array value.
//     imageCrystal.attr("data-crystalvalue", numberOptions[i]);

//     // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
//     $("#crystals").append(imageCrystal-1; imageCrystal-2; imageCrystal-3; imageCrystal-4);
//     // $("#crystals").append(imageCrystal-2);
//     // $("#crystals").append(imageCrystal-3);
//     // $("#crystals").append(imageCrystal-4);

//   }

//   // This time, our click event applies to every single crystal on the page. Not just one.
//   $(".crystal-image").on("click", function() {

//     // Determining the crystal's value requires us to extract the value from the data attribute.
//     // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
//     // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
//     // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

//     var crystalValue = ($(this).attr("data-crystalvalue"));
//     crystalValue = parseInt(crystalValue);
//     // We then add the crystalValue to the user's "counter" which is a global variable.
//     // Every click, from every crystal adds to the global counter.
//     counter += crystalValue;

//     // All of the same game win-lose logic applies. So the rest remains unchanged.
//     alert("New score: " + counter);

//     if (counter === targetNumber) {
//       alert("You win!");
//     }

//     else if (counter >= targetNumber) {
//       alert("You lose!!");
//     }

//   });