//This is a comment.
//Detecting Button Press
var x = 7
for (var i = 0; i < x; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var clk = this.innerHTML;
        play(clk);
        anim(clk);
    });
}


//Detecting Key Press
document.addEventListener("keypress", function (event) {

    play(event.key);
    anim(event.key);


});


//Function to Play Sound
function play(num) {
    switch (num) {
        case "w":
            var tom0 = new Audio('./sounds/tom-1.mp3');
            tom0.play();
            break;
        case "a":
            var tom0 = new Audio('./sounds/tom-2.mp3');
            tom0.play();
            break;
        case "s":
            var tom0 = new Audio('./sounds/tom-3.mp3');
            tom0.play();
            break;
        case "d":
            var tom0 = new Audio('./sounds/tom-4.mp3');
            tom0.play();
            break;
        case "j":
            var tom0 = new Audio('./sounds/snare.mp3');
            tom0.play();
            break;
        case "k":
            var tom0 = new Audio('./sounds/crash.mp3');
            tom0.play();
            break;
        case "l":
            var tom0 = new Audio('./sounds/kick-bass.mp3');
            tom0.play();
            break;

        default: console.log(num);
    }
}

function anim(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        
        activeButton.classList.remove("pressed");
    },100);
}
