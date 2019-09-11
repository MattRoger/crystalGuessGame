


var targetScore=[Math.floor(Math.random(120-50)*100)+50]
var score=0;



$("#number-to-guess").text(targetScore);
// $("#current-score").text(score);


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
    var valueCrystal=[Math.floor(Math.random(20-10)*10)+1];
    imageCrystal.attr("data-crystalvalue", valueCrystal);
    $("#crystals").append(imageCrystal);
}


$(".crystal-image").on("click", function(){
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    score += crystalValue;
    $("#current-score").append(score);
    
    alert("your new score is " + score);
    if (score===targetScore){
        alert("you win")
    }else if(score>targetScore){
        alert("you lose!")
    }
});
