let btn = document.getElementById("buttonHTML");
let output = document.getElementById("outputHTML");

// Event Listener
btn.addEventListener("click", btnClicked);
function btnClicked () {

// Process
let randNum = Math.random();
console.log(randNum)



if (randNum < 0.167) {
    output.innerHTML = "2"
} else if (randNum < 0.250) {
    output.innerHTML = "3"
} else if (randNum < 0.333) {
    output.innerHTML = "4"
} else if (randNum < 0.416) {
    output.innerHTML = "5"
} else if (randNum < 0.499) {
    output.innerHTML = "6"
} else if (randNum < 0.582) {
    output.innerHTML = "7"
} else if (randNum < 0.665) {
    output.innerHTML = "8"
} else if (randNum < 0.748) {
    output.innerHTML = "9"
} else if (randNum < 0.831) {
    output.innerHTML = "10"
} else if (randNum < 0.914) {
    output.innerHTML = "11"
} else if (randNum < 1) {
    output.innerHTML = "12"
}


}



