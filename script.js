let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    attempts++;
    let userGuess = document.getElementById("guessInput").value;
    if (userGuess < secretNumber) {
        document.getElementById("result").textContent = "Too low! Try again.";
    } else if (userGuess > secretNumber) {
        document.getElementById("result").textContent = "Too high! Try again.";
    } else {
        document.getElementById("result").textContent = "Congratulations! You guessed the number in " + attempts + " attempts.";
    }
}

// Dark Mode
let num=true;
function mode(){
    if(num==true){
        document.body.style.background = '#474747';
        document.body.style.color = 'white';
        document.getElementById("mode").innerHTML = "Light Mode";
        num=false;
    }
    else{
        document.body.style.background = 'white';
        document.body.style.color = 'black';
        document.getElementById("mode").innerHTML = "Dark Mode";
        num = true;
    }
}