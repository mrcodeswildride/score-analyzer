var scoreInput = document.getElementById("score");
var submitButton = document.getElementById("submit");
var averageScoreButton = document.getElementById("averageScore");
var highestScoreButton = document.getElementById("highestScore");
var lowestScoreButton = document.getElementById("lowestScore");
var scoresDisplay = document.getElementById("scores");
var resultDisplay = document.getElementById("result");

var scores = [];

submitButton.addEventListener("click", submit);
averageScoreButton.addEventListener("click", showAverageScore);
highestScoreButton.addEventListener("click", showHighestScore);
lowestScoreButton.addEventListener("click", showLowestScore);

function submit() {
    var scoreValue = parseFloat(parseFloat(scoreInput.value.trim()).toFixed(2));

    if (!isNaN(scoreValue)) {
        scores.push(scoreValue);

        if (scores.length > 1) {
            scoresDisplay.innerHTML = scoresDisplay.innerHTML + ", ";
        }

        scoresDisplay.innerHTML = scoresDisplay.innerHTML + scoreValue;
        scoreInput.value = "";
    }
}

function showAverageScore() {
    if (scores.length == 0) {
        resultDisplay.innerHTML = "No score was submitted.";
    }
    else {
        var total = 0;

        for (var i = 0; i < scores.length; i++) {
            total = total + scores[i];
        }

        resultDisplay.innerHTML = "Average score: " + parseFloat((total / scores.length).toFixed(2));
    }
}

function showHighestScore() {
    if (scores.length == 0) {
        resultDisplay.innerHTML = "No score was submitted.";
    }
    else {
        var highestScore = scores[0];

        for (var i = 0; i < scores.length; i++) {
            if (scores[i] > highestScore) {
                highestScore = scores[i];
            }
        }

        resultDisplay.innerHTML = "Highest score: " + highestScore;
    }
}

function showLowestScore() {
    if (scores.length == 0) {
        resultDisplay.innerHTML = "No score was submitted.";
    }
    else {
        var lowestScore = scores[0];

        for (var i = 0; i < scores.length; i++) {
            if (scores[i] < lowestScore) {
                lowestScore = scores[i];
            }
        }

        resultDisplay.innerHTML = "Lowest score: " + lowestScore;
    }
}
