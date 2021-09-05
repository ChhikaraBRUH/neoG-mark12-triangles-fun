var side1 = document.getElementById("side1");
var side2 = document.getElementById("side2");
var side3 = document.getElementById("side3");
var areaCalcBtn = document.getElementById("areaCalcBtn");
var areaOutput = document.getElementById("areaOutput");

function calculateArea() {
    var side1Val = parseFloat(side1.value);
    var side2Val = parseFloat(side2.value);
    var side3Val = parseFloat(side3.value);
    var s = (side1Val + side2Val + side3Val) * 0.5;
    var area = Math.sqrt(s * (s - side1Val) * (s - side2Val) * (s - side3Val));

    if (side1.value === "" || side2.value === "" || side3.value === "") {
        areaOutput.innerText = "🤚 Fill in all the values correctly first.";
    } else if (side1.value < 0 || side2.value < 0 || side3.value < 0) {
        areaOutput.innerText = "🤚 Please fill positive values only!";
    } else if (((side1Val + side2Val) > side3Val) && ((side1Val + side3Val) > side2Val) && ((side3Val + side2Val) > side1Val)) {
        areaOutput.innerText = "✔️ The area of the triangle using Heron's Formula is: " + area.toFixed(4) + " sq. units.";
    } else {
        areaOutput.innerText = "❌ Enter valid sides such that they form a triangle.";
    }
}


areaCalcBtn.addEventListener("click", calculateArea);