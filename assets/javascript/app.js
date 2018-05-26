$(document).ready(function(){

    //Hides elements on page load
    $(".questions").hide();
    $("#time-left").hide();
    $("#done").hide();
    $("#submit").hide();

    // Global Variables
    var seconds = 45;
    var timer;
    var correctSoFar = 0;
    var incorrectSoFar = 0;

    // This is a timer function
    function gameTimer(){
        var seconds = 45;
        clearInterval(timer)
        timer = setInterval(function(){
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

    // This function updates the DOM with the remaining time
    function showTime(){
        $("#time-left").html(seconds + " seconds remaining!")
    };
    
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

    // This function ends the game
    function gameOver(){
        clearInterval(timer);
        clearInterval(seconds);
        $(".questions").hide();
        $("#time-left").hide();
        $("#submit").hide();
        $("#done").show();
        $("#start").show();
        $("#results").html("<p>Correct answers: " + correctSoFar + "<p>Incorrect answers: " + incorrectSoFar)
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