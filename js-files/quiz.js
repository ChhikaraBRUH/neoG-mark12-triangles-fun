const quizform = document.getElementById("quizForm");
const submitBtn = document.getElementById("quizSubmitBtn");
var output = document.getElementById("scoreTxt");

const correctAns = ["45", "right angled", "one right angle", "12, 16, 20", "Equilateral triangle", "100", "30", "a + b + c", "no", "45"];

function calculate() {
    const formResults = new FormData(quizform);
    let score = 0,
        index = 0;
    for (let value of formResults.values()) {
        console.log(value)
        if (value === correctAns[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
    output.innerText = "The score is " + score;
}
submitBtn.addEventListener("click", calculate);