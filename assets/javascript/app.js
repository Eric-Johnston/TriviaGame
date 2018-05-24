$(document).ready(function(){

    //Hides elements on page load
    $(".questions").hide();
    $("#time-left").hide();
    $("#done").hide();
    $("#submit").hide();
    
    // Global Variables
    var timer = 45;
    var correctSoFar = 0;
    var incorrectSoFar = 0;

    // Game Timer Function
    function gameTimer(){
        var seconds = 45;
        clearInterval(timer)
        timer = setInterval(function(){
            seconds--;
            $("#time-left").text(seconds + " seconds remaining!")
            $("#results").empty();
            if(seconds == 0){
                $(".questions").hide();
                $("#time-left").hide();
                $("#submit").hide();
                $("#done").show();
                $("#start").show();
                clearInterval(timer);
                clearInterval(seconds);
                $("#results").html("<p>Correct answers: " + correctSoFar + "<p>Incorrect answers: " + incorrectSoFar)
            }
            else if($("#submit").click(function(){
                clearInterval(timer);
                clearInterval(seconds);
                $(".questions").hide();
                $("#time-left").hide();
                $("#submit").hide();
                $("#done").show();
                $("#start").show();
                $("#results").html("<p>Correct answers: " + correctSoFar + "<p>Incorrect answers: " + incorrectSoFar)
            }));
        }, 1000);
    };

    // Function that updates the DOM with the time remaining
    function showTime(){
        $("#time-left").html(timer + " seconds remaining!")
    }

    // Begins trivia
    $("#start").click(function(){
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
