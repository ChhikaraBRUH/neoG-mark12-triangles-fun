var angle1 = document.getElementById("angle1");
var angle2 = document.getElementById("angle2");
var angle3 = document.getElementById("angle3");
var triangleCheckBtn = document.getElementById("triangleCheckBtn");
var triangleCheckOutput = document.getElementById("triangleCheckOutput");

function triangleCheck() {
    var angle1Val = parseFloat(angle1.value);
    var angle2Val = parseFloat(angle2.value);
    var angle3Val = parseFloat(angle3.value);
    var totalAngle = angle1Val + angle2Val + angle3Val;

    if (angle1.value === "" || angle2.value === "" || angle3.value === "") {
        triangleCheckOutput.innerText = "🤚 Fill in all the values correctly first.";
    } else if (angle1.value < 0 || angle2.value < 0 || angle3.value < 0) {
        triangleCheckOutput.innerText = "🤚 Please fill positive values only!";
    } else if (totalAngle === 180) {
        triangleCheckOutput.innerText = "✔️ Yes!! These angles form a triangle!";
    } else if (totalAngle !== 180) {
        triangleCheckOutput.innerText = "❌Oops!! These angles do not form a triangle!"
    }
}

triangleCheckBtn.addEventListener("click", triangleCheck);