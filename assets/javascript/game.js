$(document).ready(function() {

    var counter = 0;
    var b = setInterval(function () {

        $(".loader").css("height", + "-" + counter +"vh");

        counter++;

        if (counter === 101) {
            clearInterval(b);
            $(".loader").css("display", "none");
        }

    }, 15);




})




var losses = 0;
var wins = 0;
var userNumber = 0;

var resetGame = function () {

    //Generates a computer number between 19 and 120
    computerNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

    //Empties the div containing the crystal div images
    $('.crystal').empty(crystals);

    //Creates four empty divs to place images in with class of "crystals"
    for (var i = 0; i < 4; i++) {

        //Generates a random number between 1 and 12
        var crystalNumber = Math.floor(Math.random() * 12 + 1);
        console.log(crystalNumber)

        //Creates four divs with class of "crystal" and a random "data-crystal-value"
        var crystals = $('<img>');
        crystals.attr({
            'class': 'crystals',
            'data-crystal-value': crystalNumber,
            'src': "./assets/images/blue.png"
        });

        $('.crystal').append(crystals);

        var showComputerNumber = $('#computerNumber').html(computerNumber);
        showComputerNumber;

    }
}

resetGame();

$(document).on('click', ".crystals", function () {

    $('#coin') [0].play();

    var crystalValue = parseInt($(this).attr("data-crystal-value"));
    console.log(crystalValue);


    userNumber += crystalValue;
    $("#userNumber").html(userNumber);

    console.log("The number is now " + userNumber);

    if (userNumber === computerNumber) {
        wins++;
        console.log("You win" + wins);
        $('#wins').html(wins);
        $('#winning') [0].play();
        userNumber = 0;
        resetGame();

    }
    else if (userNumber > computerNumber) {
        losses++;
        console.log("You lose" + losses);
        $('#losses').html(losses);
        $('#losing') [0].play();
        userNumber = 0;
        resetGame()

    }

})