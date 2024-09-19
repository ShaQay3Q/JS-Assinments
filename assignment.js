const task3Element = document.getElementById("task-3");

function showAlert() {
	alert("task 1: thwoing an alert message!");
}

showAlert();

// const isUseful = (name) =>  typeof name == "string" && name != "";
function isUseful(name) {
	return typeof name == "string" && name != "";
}

function showAlertWithName() {
	const name = prompt("What's your name?");
	if (isUseful(name)) {
		alert(`Hello and welcome ${name}!`);
	} else {
		alert("Jerk! I asked your name asshole!");
	}
}

showAlertWithName();

task3Element.addEventListener("click", showAlert);

function threeStrings() {
	let strArr = [];
	for (let i = 0; i < 3; i++) {
		const str = prompt(`word ${i + 1}:`);

		if (!isUseful(str)) {
			i--;
		} else {
			strArr.push(str);
		}
	}
	alert(`wrod one: ${strArr[0]}, 
        word two: ${strArr[1]},
        and word three: ${strArr[2]}`);
}

threeStrings();
