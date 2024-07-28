// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

// function multiply(num, num2) {
// 	return num * num2;
// }

// process.stdout.write(multiply(4, 7));

// document.querySelector("html"),addEventListener("click", () => {
// 	this.alert(multiply(4, 7));
// })

const myImage = document.querySelector("img");

myImage.onclick = () => {
	const mySrc = myImage.getAttribute("src");
	if(mySrc === "images/mountains-7ddde89.webp") {
		myImage.setAttribute("src", "images/Engadin-Autumn-Larch-Tree-Forest-Waterfall.jpg");
	} else {
		myImage.setAttribute("src", "images/mountains-7ddde89.webp");
	}
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
	let input = prompt("Please enter your name.");
	const myName = input === null || input === "" ? "fun !": input;
	localStorage.setItem("name", myName);
	myHeading.textContent = `Mozilla is cool, ${myName}`;
}

if(!localStorage.getItem("name")) {
	setUserName();
} else {
	const storedName = localStorage.getItem("name");
	myHeading.textContent = `Mozila is cool, ${storedName}`;
}

myButton.onclick = () => {
	setUserName();
};
