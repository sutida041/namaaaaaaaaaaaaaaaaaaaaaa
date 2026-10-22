/* Based on the teacher's mt-guide1-main/script.js.
 * Shape: Triangular Prism (ปริซึมฐานสามเหลี่ยม)
 * Volume formula: V = ½bhl
 * Unit choice: 1 = cm, 1000 = mm^3 converted to cm^3.
 * All input lengths must use the same selected unit.
 */
function calculateVolume() {
    // 1. Read the input values (edit this section when inputs change).
    const base = parseFloat(document.getElementById("inBase").value);
    const triangleHeight = parseFloat(document.getElementById("inTriangleHeight").value);
    const length = parseFloat(document.getElementById("inLength").value);
    const unit = parseFloat(document.getElementById("inUnit").value);

    // 2. Check that all measurements are positive finite numbers.
    const values = [base, triangleHeight, length];
    const result = document.getElementById("result");
    if (!values.every(value => Number.isFinite(value) && value > 0)) {
        result.classList.add("error");
        result.textContent = "Please enter positive values for all fields.";
        return;
    }

    // 3. CHANGE THIS LINE for a new geometric solid.
    const volume = (base * triangleHeight * length) / (2 * unit); // V = ½bhl

    // 4. Result always in cm³, rounded to 2 decimal places.
    result.classList.remove("error");
    result.innerHTML = "Volume = " + volume.toFixed(2) + " cm<sup>3</sup>";
}

// Main branch requirement: a submit button produces a 'submit' event.
// Prevent page reload, then run the calculator.
document.getElementById("volumeCalculator").addEventListener("submit", function(event) {
    event.preventDefault();
    calculateVolume();
});
