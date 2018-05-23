$(document).ready(function(){

$(".questions").hide();

var timer = 10

function gameTimer(){
    $("#time-left").html(timer + " Seconds remaining!")
}
var clockRunning = false;
var correctAnswer = false;
var incorrectAnswer = false;
var correctSoFar = 0;
var incorrectSoFar = 0;

$("#start").click(function(){
    $(".questions").show();
    gameTimer();
    var trivia = setTimeout(function(){
        timer--;
        gameTimer();
        if(timer == 0){
            clearTimeout(timer)
            alert("Times up!")
        }
    }, 1000);
});
}) 
