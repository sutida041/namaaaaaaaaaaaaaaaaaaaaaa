/* Based on the teacher's mt-guide1-main/script.js.
 * Shape: Rectangular Pyramid (พีระมิดฐานสี่เหลี่ยมผืนผ้า)
 * Volume formula: V = ⅓lwh
 * Unit choice: 1 = cm, 1000 = mm^3 converted to cm^3.
 * All input lengths must use the same selected unit.
 */
function calculateVolume() {
    // 1. Read the input values (edit this section when inputs change).
    const length = parseFloat(document.getElementById("inLength").value);
    const width = parseFloat(document.getElementById("inWidth").value);
    const height = parseFloat(document.getElementById("inHeight").value);
    const unit = parseFloat(document.getElementById("inUnit").value);

    // 2. Check that all measurements are positive finite numbers.
    const values = [length, width, height];
    const result = document.getElementById("result");
    if (!values.every(value => Number.isFinite(value) && value > 0)) {
        result.classList.add("error");
        result.textContent = "Please enter positive values for all fields.";
        return;
    }

    // 3. CHANGE THIS LINE for a new geometric solid.
    const volume = length * width * height / (3 * unit); // V = ⅓lwh

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
