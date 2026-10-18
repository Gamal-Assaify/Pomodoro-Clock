let sessionLength = 25;

let minutes = sessionLength;
let seconds = 0;

let cycles = 0;

let timer = null;

const minutesDisplay =
document.getElementById("minutes");

const secondsDisplay =
document.getElementById("seconds");

const cyclesDisplay =
document.getElementById("cycles");

const sessionDisplay =
document.getElementById("sessionLength");

const startBtn =
document.getElementById("start");

const pauseBtn =
document.getElementById("pause");

const resetBtn =
document.getElementById("reset");

const increaseBtn =
document.getElementById("increase");

const decreaseBtn =
document.getElementById("decrease");

function updateDisplay() {

    minutesDisplay.textContent =
        String(minutes).padStart(2, "0");

    secondsDisplay.textContent =
        String(seconds).padStart(2, "0");
}

function startTimer() {

    if (timer) return;

    timer = setInterval(() => {

        if (seconds === 0) {

            if (minutes === 0) {

                clearInterval(timer);

                timer = null;

                cycles++;

                cyclesDisplay.textContent =
                    cycles;

                alert("Pomodoro Completed!");

                return;
            }

            minutes--;

            seconds = 59;

        } else {

            seconds--;

        }

        updateDisplay();

    }, 1000);

}

function pauseTimer() {

    clearInterval(timer);

    timer = null;

}

function resetTimer() {

    clearInterval(timer);

    timer = null;

    minutes = sessionLength;

    seconds = 0;

    updateDisplay();

}

function increaseSession() {

    if (sessionLength < 60) {

        sessionLength++;

        minutes = sessionLength;

        seconds = 0;

        sessionDisplay.textContent =
            `Session Length: ${sessionLength} min`;

        updateDisplay();

    }

}

function decreaseSession() {

    if (sessionLength > 1) {

        sessionLength--;

        minutes = sessionLength;

        seconds = 0;

        sessionDisplay.textContent =
            `Session Length: ${sessionLength} min`;

        updateDisplay();

    }

}

startBtn.addEventListener(
    "click",
    startTimer
);

pauseBtn.addEventListener(
    "click",
    pauseTimer
);

resetBtn.addEventListener(
    "click",
    resetTimer
);

increaseBtn.addEventListener(
    "click",
    increaseSession
);

decreaseBtn.addEventListener(
    "click",
    decreaseSession
);

updateDisplay();