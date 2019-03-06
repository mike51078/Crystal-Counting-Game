$(document).ready(function() {
 


  
// creates random number of the score to match
    var scoreToMatch = Math.floor(Math.random()*102+19)

// pushes score to match to the html for the user to see
    $("#scoreToMatch").text(scoreToMatch);

// creates random variable for each gem at the start of the game
  var valCrystal1;
  var valCrystal2;
  var valCrystal3;
  var valCrystal4;
    // var valCrystal1 = Math.floor(Math.random() * 12 + 1)
    // var valCrystal2 = Math.floor(Math.random() * 12 + 1)
    // var valCrystal3 = Math.floor(Math.random() * 12 + 1)
    // var valCrystal4 = Math.floor(Math.random() * 12 + 1)
    
// establishes initial value for the variables below
    var totalScore = 0; 
    var wins = 0;
    var losses = 0;

//reset function called to initialize value for crystals
  reset();

  // upon completion of game with win or loss, code resetting game -- keeping wins and losses tallied
  function reset(){
    scoreToMatch = Math.floor(Math.random() * 101 + 19);
      console.log(scoreToMatch)
      $('#scoreToMatch').text(scoreToMatch);
      valCrystal1 = Math.floor(Math.random() * 12 + 1)
      valCrystal2 = Math.floor(Math.random() * 12 + 1)
      valCrystal3 = Math.floor(Math.random() * 12 + 1)
      valCrystal4 = Math.floor(Math.random() * 12 + 1)
      totalScore= 0;
      $('#totalScore').text(totalScore); 
      } 
    
// script for when red gem is clicked
    $('#red').on('click', function(){
      totalScore = totalScore + valCrystal1;
      console.log("New Score= " + totalScore);
      $('#totalScore').text(totalScore); 
          if (totalScore == scoreToMatch){
            winner();
          }
          else if ( totalScore > scoreToMatch){
            loser();
          }   
    })  

    // script for when blue gem is clicked
    $('#blue').on('click', function(){
      totalScore = totalScore + valCrystal2;
      console.log("New totalScore= " + totalScore);
      $('#totalScore').text(totalScore);  
          if (totalScore == scoreToMatch){
            winner();
          }
          else if ( totalScore > scoreToMatch){
            loser();
          } 
   })  

//    script for when orange gem is clicked
    $('#orange').on('click', function(){
      totalScore = totalScore + valCrystal3;
      console.log("New totalScore= " + totalScore);
      $('#totalScore').text(totalScore); 
  
            if (totalScore == scoreToMatch){
            winner();
          }
          else if ( totalScore > scoreToMatch){
            loser();
          } 
    })  

    // script for when green gem is clicked
    $('#green').on('click', function(){
      totalScore = totalScore + valCrystal4;
      console.log("New totalScore= " + totalScore);
      $('#totalScore').text(totalScore); 
        
        if (totalScore == scoreToMatch){
        winner();
          }
        else if (totalScore > scoreToMatch){
        loser();
        }
    });
    $('#wins').text(wins);
    $('#losses').text(losses);
  
// provides alert when user wins and adjusts displayed win count      
        function winner(){
            alert("Winner! Winner!");
              wins++; 
              $('#wins').text(wins);
              reset();
            }
  
// provides alert when user wins and adjusts displayed loss count      
        function loser(){
            alert ("Try Again!");
            losses++;
            $('#losses').text(losses);
            reset()
        }



});