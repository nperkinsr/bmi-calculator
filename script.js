function calculateBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    if (weight === "" || height === "") {
        alert("Please enter both weight and height.");
        return;
    }

    var bmi = weight / Math.pow(height, 2);
    bmi = Math.round(bmi * 10) / 10;

    var category, message;

    if (bmi < 18.5) {
        category = "Underweight";
        message = "You're basically floating! A few more tasty treats might help with gravity!";
    } 
    else if (bmi >= 18.6 && bmi <= 24.9) {
        category = "Normal";
        message = "Goldilocks level: not too much, not too little, just right!";
    } 
    else if (bmi >= 25 && bmi <= 29.9) {
        category = "Overweight";
        message = "If cozy was a body type, you'd be its poster child!";
    } 
    else if (bmi >= 30 && bmi <= 34.9) {
        category = "Obese";
        message = "You didn't choose the comfy life — the comfy life chose you!";
    } 
    else {
        category = "Extremely Obese";
        message = "You've officially unlocked the 'True American' body type — comes with unlimited refills and XXL everything.";
    }

    document.getElementById("bmi-category").innerText = category;
    document.getElementById("bmi-value").innerText = bmi;
    document.getElementById("bmi-message").innerText = message;

    document.getElementById("result-popup").style.display = "flex";     // I am showing the Result
}

function closePopup() {
    document.getElementById("result-popup").style.display = "none";   //This to hide it
}
