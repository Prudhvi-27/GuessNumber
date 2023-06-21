let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);

function checkGuess() {
    let guessedNumber = parseInt(userInput.value);
    if (guessedNumber > randomNumber) {
        gameResult.textContent = "Too High! Try Again.";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (guessedNumber < randomNumber) {
        gameResult.textContent = "Too Low! Try Again.";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (guessedNumber === randomNumber) {
        gameResult.textContent = "Congratulations! You got it right.";
        gameResult.style.backgroundColor = "green";
    } else {
        gameResult.textContent = "Please provide a valid input.";
        gameResult.style.backgroundColor = "#1e217c";
    }
}

function updateTime() {
    var date = new Date();

    var time1 = date.toLocaleTimeString("en-US", {
        timeZone: "America/New_York"
    });
    var time2 = date.toLocaleTimeString("en-US", {
        timeZone: "Europe/London"
    });
    var time3 = date.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata"
    });

    document.getElementById("time1").textContent = time1;
    document.getElementById("time2").textContent = time2;
    document.getElementById("time3").textContent = time3;

    setTimeout(updateTime, 1000);
}

updateTime();