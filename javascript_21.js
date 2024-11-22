function lukkucalling() {
    const outputElement = document.getElementById('output');
    const currentDateTime = new Date();
    outputElement.textContent = `Current Date and Time: ${currentDateTime}`;
    console.log(currentDateTime); 
}
