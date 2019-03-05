// $(document).ready(function(){
 

    var scoreToMatch = Math.floor(Math.random()*102+19)
    
    $('#scoreToMatch').text(scoreToMatch);
    
    var valCrystal1 = Math.floor(Math.random() * 12 + 1)
    var valCrystal2 = Math.floor(Math.random() * 12 + 1)
    var valCrystal3 = Math.floor(Math.random() * 12 + 1)
    var valCrystal4 = Math.floor(Math.random() * 12 + 1)
    
    var totalScore = 0; 
    var wins = 0;
    var losses = 0;
    

    $('.red').on ('click', function(){
      totalScore = totalScore + valCrystal1;
      console.log("New Score= " + totalScore);
      $('#totalScore').text(totalScore); 
            //Win & lose conditions
          if (totalScore == scoreToMatch){
            woohoo();
          }
          else if ( totalScore > scoreToMatch){
            loser();
          }   
    })  
    $('.blue').on ('click', function(){
      totalScore = totalScore + valCrystal2;
      console.log("New totalScore= " + totalScore);
      $('#totalScore').text(totalScore); 
          if (totalScore == scoreToMatch){
            woohoo();
          }
          else if ( totalScore > scoreToMatch){
            loser();
          } 
    })  
    $('.orange').on ('click', function(){
      totalScore = totalScore + valCrystal3;
      console.log("New totalScore= " + totalScore);
      $('#totalScore').text(totalScore);
  
            if (totalScore == scoreToMatch){
            woohoo();
          }
          else if ( totalScore > scoreToMatch){
            loser();
          } 
    })  
    $('.green').on ('click', function(){
      totalScore = totalScore + valCrystal4;
      console.log("New totalScore= " + totalScore);
      $('#totalScore').text(totalScore); 
        
            if (totalScore == scoreToMatch){
            woohoo();
          }
          else if ( totalScore > scoreToMatch){
            loser();
          }
    });
    $('#wins').text(wins);
    $('#losses').text(losses);
    
        // Display wins
        function woohoo(){
            alert("Congrats! You won!");
              wins++; 
              $('#wins').text(wins);
              reset();
            }
            // Display losses
            function loser(){
            alert ("Sorry! You lose!");
              losses++;
              $('#losses').text(losses);
              reset()
            }

    // Reset game
    function reset(){
        scoreToMatch = Math.floor(Math.random()*102+19);
          console.log(scoreToMatch)
          $('#scoreToMatch').text(scoreToMatch);
          var valCrystal1 = Math.floor(Math.random() * 12 + 1)
          var valCrystal2 = Math.floor(Math.random() * 12 + 1)
          var valCrystal3 = Math.floor(Math.random() * 12 + 1)
          var valCrystal4 = Math.floor(Math.random() * 12 + 1)
          totalScore= 0;
          $('#totalScore').text(totalScore);
          } 
  }); 