//check if score is less than 5 with 5 minutes to go

let score1 = ''; 
let score2 = '';
let remainingTime = ''

score1 = 101
score2 = 109
remainingTime = 4

//Get difference of scores
let scoreDifference = Math.abs(score1 - score2) 

if (scoreDifference < 10 && remainingTime < 5) {
    console.log(scoreDifference);
}

//if (score1 - score2 < 10 || )