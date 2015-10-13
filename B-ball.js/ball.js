
var points = 0;

function myFunction(score) {
    points += score;
    (points);
    document.getElementById("demo").innerHTML = points + " ";
}

var points2 = 0;

function myFunction1(score) {
    points2 += score;
    (points2);
    document.getElementById("demo2").innerHTML = points2 + " ";
}


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 12,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};