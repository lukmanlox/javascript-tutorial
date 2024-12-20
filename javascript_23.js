const turnOnButton = document.getElementById('oning');
const turnOffButton = document.getElementById('offing');
const lightImages = document.querySelectorAll('img');
let isLightOn = false;
lightImages[0].style.display = isLightOn ? 'block' : 'none'; 

const toggleLight = () => {
    isLightOn = !isLightOn;
    lightImages[0].style.display = isLightOn ? 'block' : 'none'; 
    lightImages[1].style.display = isLightOn ? 'none' : 'block'; 

    // Change background color and button text color
    if (isLightOn) {
        document.body.style.backgroundColor = ''; // Set to original background color
        turnOnButton.style.color = ''; // Reset button text color
        turnOffButton.style.color = ''; // Reset button text color
    } else {
        document.body.style.backgroundColor = 'black'; // Set background to black when off
        turnOnButton.style.color = 'white'; // Change button text to white when off
        turnOffButton.style.color = 'white'; // Change button text to white when off
    }
};

turnOnButton.onclick = () => {
    if (!isLightOn) toggleLight();
};

turnOffButton.onclick = () => {
    if (isLightOn) toggleLight();
};
