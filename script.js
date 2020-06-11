let score = document.getElementById(`score`)
let submitButton = document.getElementById(`submitButton`)
let averageButton = document.getElementById(`averageButton`)
let highestButton = document.getElementById(`highestButton`)
let lowestButton = document.getElementById(`lowestButton`)
let scoresParagraph = document.getElementById(`scoresParagraph`)
let resultParagraph = document.getElementById(`resultParagraph`)

let scores = []

submitButton.addEventListener(`click`, submit)
averageButton.addEventListener(`click`, showAverageScore)
highestButton.addEventListener(`click`, showHighestScore)
lowestButton.addEventListener(`click`, showLowestScore)

function submit() {
  let scoreValue = score.value.trim()

  if (scoreValue != `` && !isNaN(scoreValue)) {
    scoresParagraph.innerHTML = `${scoresParagraph.innerHTML} ${scoreValue}`
    score.value = ``

    scores.push(Number(scoreValue))
  }
}

function showAverageScore() {
  if (scores.length == 0) {
    resultParagraph.innerHTML = `No score was submitted.`
  }
  else {
    let runningTotal = 0

    for (let score of scores) {
      runningTotal = runningTotal + score
    }

    let average = runningTotal / scores.length
    resultParagraph.innerHTML = `Average score: ${average}`
  }
}

function showHighestScore() {
  if (scores.length == 0) {
    resultParagraph.innerHTML = `No score was submitted.`
  }
  else {
    let highest = scores[0]

    for (let score of scores) {
      if (score > highest) {
        highest = score
      }
    }

    resultParagraph.innerHTML = `Highest score: ${highest}`
  }
}

function showLowestScore() {
  if (scores.length == 0) {
    resultParagraph.innerHTML = `No score was submitted.`
  }
  else {
    let lowest = scores[0]

    for (let score of scores) {
      if (score < lowest) {
        lowest = score
      }
    }

    resultParagraph.innerHTML = `Lowest score: ${lowest}`
  }
}