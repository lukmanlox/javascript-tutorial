const redButton = document.getElementById('button1');
const blueButton = document.getElementById('button2');
const greenButton = document.getElementById('button3');
const yellowButton = document.getElementById('button4');
const violetButton = document.getElementById('button5');
const orangeButton = document.getElementById('button6');

const redCircle = document.getElementById('red');
const blueCircle = document.getElementById('blue');
const greenCircle = document.getElementById('green');
const yellowCircle = document.getElementById('yellow');
const violetCircle = document.getElementById('violet');
const orangeCircle = document.getElementById('orange');
function toggleColor(circle, lightColor, darkColor) {
    if (circle.style.backgroundColor === lightColor) {
        circle.style.backgroundColor = darkColor;
    } else {
        circle.style.backgroundColor = lightColor;
    }
}
redButton.addEventListener('click', function() {
    toggleColor(redCircle, 'rgba(255, 0, 0, 0.192)', '#ff0000'); 
});
blueButton.addEventListener('click', function() {
    toggleColor(blueCircle, 'rgba(4, 0, 255, 0.192)', '#0000ff'); 
});
greenButton.addEventListener('click', function() {
    toggleColor(greenCircle, 'rgba(132, 255, 9, 0.25)', '#00ff00'); 
});
yellowButton.addEventListener('click', function() {
    toggleColor(yellowCircle, 'rgba(255, 208, 0, 0.93)', '#ffff00'); 
});
violetButton.addEventListener('click', function() {
    toggleColor(violetCircle, 'rgb(245, 9, 245)', '#8a2be2'); 
});
orangeButton.addEventListener('click', function() {
    toggleColor(orangeCircle, 'rgba(255, 166, 0, 0.98)', '#ffa500'); 
});
greenButton.addEventListener('click', function() {
    toggleColor(greenButton, 'rgb(0, 255, 34)', '#ff0000'); 
});
blueButton.addEventListener('click', function() {
    toggleColor(blueButton, 'rgb(25, 0, 255)', '#ff0000'); 
});
yellowButton.addEventListener('click', function() {
    toggleColor(yellowButton, 'rgb(238, 255, 0)', '#ff0000'); 
});
violetButton.addEventListener('click', function() {
    toggleColor(violetButton, 'rgb(162, 0, 255)', '#ff0000'); 
});
orangeButton.addEventListener('click', function() {
    toggleColor(orangeButton, 'rgba(255, 153, 0, 0.98)', '#ff0000'); 
});

