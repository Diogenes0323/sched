// script.js

document.getElementById("convertButton").addEventListener("click", function () {
    const steps = parseInt(document.getElementById("stepsInput").value);
    if (isNaN(steps) || steps < 0) {
        alert("Please enter a valid number of steps.");
        return;
    }

    const miles = (steps * 0.0004734848).toFixed(2); // Convert to miles and round to 2 decimal places
    document.getElementById("result").innerText = `Miles: ${miles}`;
});
