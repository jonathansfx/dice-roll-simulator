function rollOnce (){
    // Dice 1
    let randNum1 = Math.random();
    console.log(randNum1)
    if (randNum1 < 0.167) {
        firstDice.innerHTML = "1"
    } else if (randNum1 < 0.333) {
        firstDice.innerHTML = "2"
    } else if (randNum1 < 0.499) {
        firstDice.innerHTML = "3"
    } else if (randNum1 < 0.665) {
        firstDice.innerHTML = "4"
    } else if (randNum1 < 0.831) {
        firstDice.innerHTML = "5"
    } else if (randNum1 < 1.0) {
        firstDice.innerHTML = "6"
    }
    // Dice 2
    let randNum2 = Math.random();
    console.log(randNum2)
    if (randNum2 < 0.167) {
        secondDice.innerHTML = "1"
    } else if (randNum2 < 0.333) {
        secondDice.innerHTML = "2"
    } else if (randNum2 < 0.499) {
        secondDice.innerHTML = "3"
    } else if (randNum2 < 0.665) {
        secondDice.innerHTML = "4"
    } else if (randNum2 < 0.831) {
        secondDice.innerHTML = "5"
    } else if (randNum2 < 1.0) {
        secondDice.innerHTML = "6"
    }
    sum.innerHTML = +firstDice.innerHTML + + secondDice.innerHTML;
}

function rollFiveTimes () {
    for (n = 0; n <= 5; n++) {
        rollOnce();
    }
}