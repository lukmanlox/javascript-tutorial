
const turnOnButton = document.getElementById('oning');
const turnOffButton = document.getElementById('offing');
const lightImages = document.querySelectorAll('img');
let isLightOn = false;
lightImages[0].style.display = isLightOn ? 'block' : 'none'; 

const toggleLight = () => {
    isLightOn = !isLightOn;
    lightImages[0].style.display = isLightOn ? 'block' : 'none'; 
    lightImages[1].style.display = isLightOn ? 'none' : 'block'; 
};

turnOnButton.onclick = () => {
    if (!isLightOn) toggleLight();
};

turnOffButton.onclick = () => {
    if (isLightOn) toggleLight();
};
