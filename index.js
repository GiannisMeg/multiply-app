const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score");

// init value of score get by local storage instead of hardcode it
let score = JSON.parse(localStorage.getItem("score"));

//validation of score
if (!score) {
	score = 0;
}

scoreEl.innerText = `score: ${score}`;

questionEl.innerText = `What is ${num1} multiply by ${num2}?`;

const correctAnswer = num1 * num2;

formEl.addEventListener("submit", () => {
	const userAns = +inputEl.value;
	if (userAns === correctAnswer) {
		score++;
		updateLocalStorage();
	} else {
		score--;
		updateLocalStorage();
	}
});

//save score to local storage of browser

function updateLocalStorage() {
	localStorage.setItem("score", JSON.stringify(score));
}
