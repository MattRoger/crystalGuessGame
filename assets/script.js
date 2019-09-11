var targetScore=30;

$("#number-to-guess").text(targetScore);

var score=0;

var numberOptions = [10, 5, 3, 7];

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
    // var randomCrystal = crystalArray[Math.floor(Math.random()*crystalArray/length)];

    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", crystalArray[Math.floor(Math.random()*crystalArray.length)] );
    
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $("#crystals").append(imageCrystal);
}

// var increment = numOptions[Math.round(Math.random())];

$(".crystal-image").on("click", function(){
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    score += increment;
    alert("your new score is " + score);
    if (score===targetScore){
        alert("you win")
    }else if(score>targetScore){
        alert("you lose!")
    }
});
