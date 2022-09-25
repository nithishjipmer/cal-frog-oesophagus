// FROGS NUMBER
let count = 1;
function increment() {
    count += 1;
    document.getElementById("frognum-value").innerText = count;
    elements = document.getElementsByClassName('time-entry')
    for (i=0; i < elements.length; i++) {
        elements[i].value = "";
    }
}

// STOPWATCH
window.onload = function () {
    var seconds = 00;
    var tens = 00;
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var buttonStart = document.getElementById("button-start");
    // var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");
    var Interval;
    var on = 1;

    
    buttonStart.onclick = function () {
        if (on == 1) {
            buttonStart.innerText = "Stop";
            clearInterval(Interval);
            Interval = setInterval(startTimer, 10);
            on = 0;
        }
        else if (on == 0) {
            buttonStart.innerText = "Start";
            clearInterval(Interval);
            on = 1;
        }
        
    };

    // buttonStop.onclick = function () {
    //     clearInterval(Interval);
    // };

    buttonReset.onclick = function () {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        on = 1;
        buttonStart.innerText = "Start";
    };

    function startTimer() {
        tens++;

        if (tens <= 9) {
        appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
        appendTens.innerHTML = tens;
        }

        if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
        }

        if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
        }
    }
    };

// getting input from form
function getIndex() {
    obj = document.getElementById("myselect")
    var selected = obj.selectedIndex;
    var frogImg = document.getElementById("frog-pic");
    document.getElementById("drug-acting").innerHTML = obj.options[obj.selectedIndex].text;
    frogImg.addEventListener("click", function () {
        if (selected == 0) {
            var ball = document.getElementById("ball");
            ball.src = "images/yellow-ball.png";
            myMove(6);
        }
        if (selected == 1) {
            var ball = document.getElementById("ball");
            ball.src = "images/yellow-ball.png";
            myMove(7.6);
        }
        if (selected == 2) {
            var ball = document.getElementById("ball");
            ball.src = "images/yellow-ball.png";
            myMove(3.4);
        }
        if (selected == 3) {
            var ball = document.getElementById("ball");
            ball.src = "images/yellow-ball.png";
            myMove(12);
        }
    });
}

var id = null;
function myMove(m) {
    var elem = document.getElementById("ball");
    var pos = 25;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
        if (pos > 56) {
        clearInterval(id);
        ball.src =""
        } else {
        pos += m/1000;
        elem.style.top = pos + "%";
        }
    }
    }
// 160, 330, 0.5
function emptyBox() {
    document.getElementById(".time-entry").innerText = "";
}


// if next button is pressed!

