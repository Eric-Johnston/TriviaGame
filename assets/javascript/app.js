$(document).ready(function(){
    //Hides elements on page load
    $(".questions").hide();
    $("#time-left").hide();
    $("#done").hide();
    $("#submit").hide();

    // Global Variables
    var timer = 45;
    var seconds = 45;
    var timerID;
    var correctSoFar = 0;
    var incorrectSoFar = 0;

    // This function initiates the game
    function beginTrivia(){
        $("#results").empty();
        $("input[type='radio']").prop('checked', false);
        $("#start").hide();
        $("#done").hide();
        $(".questions").show();
        $("#time-left").show();
        $("#submit").show();
        showTime();
        gameTimer();
        correctSoFar = 0;
        incorrectSoFar = 0;
    };

    // Function that updates the DOM with the time remaining
    function showTime(){
        $("#time-left").html(timer + " seconds remaining!")
    }
    
    // This function ends the game
    function gameOver(){
        clearInterval(timerID);
        clearInterval(seconds);
        $(".questions").hide();
        $("#time-left").hide();
        $("#submit").hide();
        $("#done").show();
        $("#start").show();
        $("#results").html("<p>Correct answers: " + correctSoFar + "<p>Incorrect answers: " + incorrectSoFar)
    }

    // Game Timer Function
    function gameTimer(){
        var seconds = 45;
        clearInterval(timerID)
        timerID = setInterval(function(){
            seconds--;
            $("#time-left").text(seconds + " seconds remaining!")
            $("#results").empty();
            // If the timer reaches 0 seconds, the gameOver function initiates
            if(seconds == 0){
                gameOver();
            }
            // If the user clicks the submit button, the gameOver function initiates
            else if($("#submit").click(function(){
                gameOver();
            }));
        }, 1000);
    };

    // Begins trivia
    $("#start").click(function(event){
        event.preventDefault();
        beginTrivia();
        });

    // Records correct answers
    $("input[type='radio'][value='true']").click(function(){
        correctSoFar++;
    });

    // Records incorrect answers
    $("input[type='radio'][value='false']").click(function(){
        incorrectSoFar++;
    });
})