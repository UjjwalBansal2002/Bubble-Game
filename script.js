var hitrn;
var score = 0;
var timer = 60;

const makeBubble = () => {
    let clutter = '';
    var rn;
    for (var i = 1; i < 155; i++) {
        rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`
    }

    document.querySelector('#pbottom').innerHTML = clutter;
}


function runTimer() {
    var timerInt = setInterval(() => {
        if (timer > 0) {
            timer--; 
            document.querySelector("#timerVal").innerText = timer
        } else {
            clearInterval(timerInt);
            document.querySelector("#pbottom").innerHTML =`<h1>Game Over</h1>`
        }
    }, 1000);
}

const getNewHit = () => {
    hitrn = Math.floor(Math.random() * 10)
    document.querySelector("#hitVal").textContent = hitrn
}


const changeScore = () => {
    score += 10;
    document.querySelector("#scoreVal").textContent = score
}

document.querySelector("#pbottom").addEventListener("click", (elem) => {
    var clickedNum = Number(elem.target.textContent)
    if(clickedNum === hitrn){
        changeScore()
        makeBubble()
        getNewHit()
    }
})

runTimer()
getNewHit()
makeBubble()