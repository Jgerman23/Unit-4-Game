$(document).ready(function(){

var ranNum = Math.floor(Math.random()*102+19);
console.log(ranNum);

$("#randomNumber").text(ranNum);

var button1 = Math.floor(Math.random()*12+1);
var button2 = Math.floor(Math.random()*12+1);
var button3 = Math.floor(Math.random()*12+1);
var button4 = Math.floor(Math.random()*12+1);

var userTotal = 0;
var wins = 0;
var losses = 0;

$("#numOfWins").text("Wins: " + wins);
$("#numOfLosses").text("Losses: " + losses);


function reset() {
    ranNum = Math.floor(Math.random()*102+19);
console.log(ranNum);

$("#randomNumber").text(ranNum);

    button1 = Math.floor(Math.random()*12+1);
    button2 = Math.floor(Math.random()*12+1);
    button3 = Math.floor(Math.random()*12+1);
    button4 = Math.floor(Math.random()*12+1);
    userTotal = 0;
    $("#userScore").text(userTotal);

}

function startGame() {
    if(userTotal === ranNum){
        wins++;
        $("#numOfWins").text("Wins: " + wins);
        reset();
        console.log(wins);

    }
    else if(ranNum < userTotal){
        losses++;
        $("#numOfLosses").text("Losses: " + losses);
        reset();
        console.log(losses)
    }
    
}


$("#gem1").on("click", function() {
    userTotal = userTotal + button1;
    $("#userScore").text(userTotal);
    startGame();
})

$("#gem2").on("click", function() {
    userTotal = userTotal + button2;
    $("#userScore").text(userTotal);
    startGame();   

})

$("#gem3").on("click", function() {
    userTotal = userTotal + button3;
    $("#userScore").text(userTotal);
    startGame();
})

$("#gem4").on("click", function() {
    userTotal = userTotal + button4;
    $("#userScore").text(userTotal);
    startGame();
})



})