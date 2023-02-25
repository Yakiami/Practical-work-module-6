const trafficLightRed = document.querySelector('#trafficLightRed');
const trafficLightYellow = document.querySelector('#trafficLightYellow');
const trafficLightGreen = document.querySelector('#trafficLightGreen');

// Red
trafficLightRed.addEventListener('click', makeRed);
function makeRed() {
    trafficLightRed.style.background = ('red');
    trafficLightYellow.style.background = ('black');
    trafficLightGreen.style.background = ('black');

    // Listener remove
    trafficLightRed.removeEventListener('click', makeRed);
    trafficLightYellow.removeEventListener('click', makeRed);
    trafficLightGreen.removeEventListener('click', makeRed);

    // Listener add
    trafficLightRed.addEventListener('click', makeYellow);
    trafficLightYellow.addEventListener('click', makeYellow);
    trafficLightGreen.addEventListener('click', makeYellow);
}

// Yellow
trafficLightYellow.addEventListener('click', makeYellow);
function makeYellow() {
    trafficLightRed.style.background = ('black');
    trafficLightYellow.style.background = ('yellow');
    trafficLightGreen.style.background = ('black');

    // Listener remove
    trafficLightRed.removeEventListener('click', makeYellow);
    trafficLightYellow.removeEventListener('click', makeYellow);
    trafficLightGreen.removeEventListener('click', makeYellow);

    // Listener add
    trafficLightRed.addEventListener('click', makeGreen);
    trafficLightYellow.addEventListener('click', makeGreen);
    trafficLightGreen.addEventListener('click', makeGreen);
}

// Green
trafficLightGreen.addEventListener('click', makeGreen);
function makeGreen() {
    trafficLightRed.style.background = ('black');
    trafficLightYellow.style.background = ('black');
    trafficLightGreen.style.background = ('green');

    // Listener remove
    trafficLightRed.removeEventListener('click', makeGreen);
    trafficLightYellow.removeEventListener('click', makeGreen);
    trafficLightGreen.removeEventListener('click', makeGreen);

    // Listener add
    trafficLightRed.addEventListener('click', makeRed);
    trafficLightYellow.addEventListener('click', makeRed);
    trafficLightGreen.addEventListener('click', makeRed);
}