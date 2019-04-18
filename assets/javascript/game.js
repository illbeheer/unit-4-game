var scoretarget = 0;
var scoresofar = 0;

var numberofgems = 4;
var mygemvalue = [];
var gems = ["assets/images/gem-0.png", "assets/images/gem-1.png", "assets/images/gem-2.png", "assets/images/gem-3.png"];

var wins = 0;
var losses = 0;

var main = $("body");

$(document).ready(function () {

    resetGame();

    $(".points").click(function () {
        var mycurrentgemvalue = ($(this).attr("score"));
        console.log("clicked " + mycurrentgemvalue);

        mycurrentgemvalue = parseInt(mycurrentgemvalue);
        scoresofar += mycurrentgemvalue;
        console.log("current score: " + scoresofar);
        $("#progressToTarget").text("Your total score is: " + scoresofar);
        if (scoresofar === scoretarget) {
            wins++;
            $("#gameWins").text("Wins: " + wins);
            resetGame();
        } else if (scoresofar >= scoretarget) {
            losses++;
            $("#gameLosses").text("Losses: " + losses);
            resetGame();
        }
    });

});

function resetGame() {
    scoretarget = Math.floor((Math.random() * 120) + 19)
    $("#target").text("Target: " + scoretarget);
    console.log("scoretarget: " + scoretarget);
    
    scoresofar = 0;
    $("#progressToTarget").text("Your total score is: " + scoresofar);
    console.log("scoresofar: " + scoresofar);
    
    $("#gem-images").empty();
    var img = main.find("#gem-images");

    for (i = 0; i < gems.length; i++) {
        
        mygemvalue[i] = Math.floor((Math.random() * 12) + 1);

        var gemImg = $("<img>");
        gemImg.addClass("col-3 points");
        gemImg.attr("src", gems[i]);
        gemImg.attr("score",mygemvalue[i]);
        img.append(gemImg);
    }
    console.log("mygemvalue: " + mygemvalue)
}
