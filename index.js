// FROGS NUMBER
let count = 1;
var n = 0;
var instilled = false;
var rdm = -1;
var frogImg = document.getElementById("frog-pic")


function increment() {
    event.stopPropagation();
    // ans button
    if (rdm > -1){
        document.getElementById("box").style.display = "block";
        frogImg.addEventListener("click", function(){
            frogImg.removeEventListener("click", rollover())
        })
    }

    // new button
    else {
        rdm = -1;
        instilled = false;
        n = 0;
        count += 1;
        document.getElementById("frognum-value").innerText = count;
        document.getElementById("history").value = "";
    }
    
}
// document.getElementById("box").onclick = event.stopPropagation();

// when next button is clicked!
function final() {
    var newButton = document.getElementById("new");
    var nextButton = document.getElementById("next");
    rdm = Math.floor(Math.random() * 3);
    newButton.innerHTML = "Ans";
    // getIndex()
    nextButton.disabled = true;
    newButton.disabled = true;
    document.getElementById("myselect").options[0].text = "Unknown";
    document.getElementById("myselect").disabled = true;
}


// checking pop up data
function checkPop(){
    var rightDrug
    var objt
    var selectedt
    event.stopPropagation();
    objt = document.getElementById("inlineFormCustomSelect");
    selectedt = objt.selectedIndex;
    rightDrug = objt.options[objt.selectedIndex].text;
    if (selectedt == rdm){
        alert("You've got it right!\nThe right answer is " + rightDrug)
    }
    else {
        alert("Sorry, you've got it wrong.\nThe right answer is " + rightDrug);
    }
    document.getElementById("box").style.display = "none";
    document.getElementById("new").innerHTML = "New";
    document.getElementById("next").disabled = "false";
    location.reload()
}




// STOPWATCH
window.onload = function () {

    document.getElementById("history").disabled = true;

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
// Instill
function getIndex() {
    instilled = true;
    if (rdm > -1){
        obj = document.getElementById("inlineFormCustomSelect");
        var selected = rdm + 1;
        document.getElementById("new").disabled = false;
        // drug history
        n += 1;
        // document.getElementById("history").value += n + ") " + obj.options[rdm].text + "\n";
        document.getElementById("history").value += n + ") " + "Unknown\n";
        // drug acting
        // document.getElementById("drug-acting").innerHTML = obj.options[rdm].text;
        document.getElementById("drug-acting").innerHTML = "Unknown";
    }
    else {
        obj = document.getElementById("myselect");
        var selected = obj.selectedIndex;
        // disabling unused drugs
        // drug history
        n += 1;
        document.getElementById("history").value += n + ") " + obj.options[selected].text + "\n";
        // drug acting
        document.getElementById("drug-acting").innerHTML = obj.options[selected].text;
    }
    
    var frogImg = document.getElementById("frog-pic");

    
    // ball rolling
    frogImg.addEventListener("click", function rollover(){
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

