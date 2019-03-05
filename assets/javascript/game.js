$(document).ready(function() {
 

    var scoreToMatch = Math.floor(Math.random()*102+19)
    
    $("#scoreToMatch").text(scoreToMatch);
    
    var valCrystal1 = Math.floor(Math.random() * 12 + 1)
    var valCrystal2 = Math.floor(Math.random() * 12 + 1)
    var valCrystal3 = Math.floor(Math.random() * 12 + 1)
    var valCrystal4 = Math.floor(Math.random() * 12 + 1)
    
    var totalScore = 0; 
    var wins = 0;
    var losses = 0;
    

    $('#red').on('click', function(){
      totalScore = totalScore + valCrystal1;
      console.log("New Score= " + totalScore);
      $('#totalScore').text("Total Score: " + totalScore); 
          if (totalScore == scoreToMatch){
            winner();
          }
          else if ( totalScore > scoreToMatch){
            loser();
          }   
    })  
    $('#blue').on('click', function(){
      totalScore = totalScore + valCrystal2;
      console.log("New totalScore= " + totalScore);
      $('#totalScore').text("Total Score: " + totalScore);  
          if (totalScore == scoreToMatch){
            winner();
          }
          else if ( totalScore > scoreToMatch){
            loser();
          } 
   })  
    $('#orange').on('click', function(){
      totalScore = totalScore + valCrystal3;
      console.log("New totalScore= " + totalScore);
      $('#totalScore').text("Total Score: " + totalScore); 
  
            if (totalScore == scoreToMatch){
            winner();
          }
          else if ( totalScore > scoreToMatch){
            loser();
          } 
    })  
    $('#green').on('click', function(){
      totalScore = totalScore + valCrystal4;
      console.log("New totalScore= " + totalScore);
      $('#totalScore').text("Total Score: " + totalScore); 
        
        if (totalScore == scoreToMatch){
        winner();
          }
        else if (totalScore > scoreToMatch){
        loser();
        }
    });
    $('#wins').text(wins);
    $('#losses').text(losses);
  
      
        function winner(){
            alert("Winner! Winner!");
              wins++; 
              $('#wins').text(wins);
              reset();
            }
            
        function loser(){
            alert ("Try Again!");
            losses++;
            $('#losses').text(losses);
            reset()
        }

    function reset(){
        scoreToMatch = Math.floor(Math.random() * 101 + 19);
          console.log(scoreToMatch)
          $('#scoreToMatch').text("Score to Match: " + scoreToMatch);
          var valCrystal1 = Math.floor(Math.random() * 12 + 1)
          var valCrystal2 = Math.floor(Math.random() * 12 + 1)
          var valCrystal3 = Math.floor(Math.random() * 12 + 1)
          var valCrystal4 = Math.floor(Math.random() * 12 + 1)
          totalScore= 0;
          $('#totalScore').text("Total Score: " + totalScore); 
          } 

});