function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function onFeMouseOver() {
    let button = document.getElementById('fe-button');
    button.style.top = randomInteger(0, window.innerHeight - button.offsetHeight) + 'px';
    button.style.left = randomInteger(0, window.innerWidth - button.offsetWidth) + 'px';
}
function onFeClick() {
    let button = document.getElementById('fe-button');
    button.innerText = 'Ti';
}
// Check if the device supports touch events
var isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints;

// Function to handle mouse input
function handleMouseInput() {
    console.log('Mouse input detected');
}

// Function to handle touch input
function handleTouchInput() {
    console.log('Touch input detected');
}

// Add event listeners for mouse and touch input
if (isTouchDevice) {
    // Touch input detected
    document.addEventListener('touchstart', handleTouchInput);
} else {
    // Mouse input detected
    document.addEventListener('mousedown', handleMouseInput);
}
