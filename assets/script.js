$(document).ready(function(){
$("#opening-modal-id").css({display: "block"})


})

$("#play").on("click",function(){
    console.log("test")
$("#opening-modal-id").css({display: "none"})












var score=0;

var targetScore=[Math.floor(Math.random()*(120-50))+50];


$("#number-to-guess").text("Kalaxian Purity Target "+ targetScore);




for (var i = 0; i < 4; i++){
    var imageCrystal = $("<img>");
    var crystalArray=[
        "assets/images/cr1_bl.png",
        "assets/images/cr1_grn.png",
        "assets/images/cr1_purple.png",
        "assets/images/cr1_red.png",
        "assets/images/cr2_bl.png",
        "assets/images/cr2_grn.png",
        "assets/images/cr2_purple.png",
        "assets/images/cr2_red.png",
        
    ]

    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", crystalArray[Math.floor(Math.random()*crystalArray.length)] );
    var valueCrystal= [Math.floor(Math.random()*(12-1)+1)];
    imageCrystal.attr("data-crystalvalue", valueCrystal);
    $("#crystals").append(imageCrystal);
}


$(".crystal-image").on("click", function(){
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    score += crystalValue;
    $("#current-score").text("Kalaxian Purity " + score);
    
    if (score==targetScore){
        winner();
    }else if(score>targetScore){
        loser();
    }
});
})

function winner(){
    $("#winner-modal-id").css({display: "block"})
    $(".game-bar").css({display:"none"})
    $(".crystal-wrapper").css({display:"none"})
    
}
function loser(){
    $("#loser-modal-id").css({display: "block"})
    $(".game-bar").css({display:"none"})
    $(".crystal-wrapper").css({display:"none"})
}