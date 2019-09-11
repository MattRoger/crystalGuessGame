var targetScore=30;

$("#number-to-guess").text(targetScore);

var score=0;

var numberOptions = [10, 5, 3, 7];

for (var i = 0; i < numberOptions.length; i++){
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "assets/images/cr1_bl.png");
    
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
