let button = $("button");
function updateClock() {
	let currentTime = new Date();
	let currentHours = currentTime.getHours();
	let currentMin = currentTime.getMinutes();
	let currentSec = currentTime.getSeconds();
	currentMinutes = (currentMin < 10 ? "0" : "") + currentMin;
	currentSeconds = (currentSec < 10 ? "0" : "") + currentSec;

	// Choose either "AM" or "PM" as appropriate
	var timeOfDay = currentHours < 12 ? "AM" : "PM";
	var hour24 = currentHours;
	// Convert the hours component to 12-hour format if needed
	currentHours = currentHours > 12 ? currentHours - 12 : currentHours;

	// Convert an hours component of "0" to "12"
	currentHours = currentHours == 0 ? 12 : currentHours;

	// Compose the string for display
	var currentTimeString =
		currentHours +
		":" +
		currentMinutes +
		":" +
		currentSeconds +
		" " +
		timeOfDay;

	// Update the time display
	document.getElementById("clock").innerText = currentTimeString;
	console.log(currentHours);
	for (let i = 0; i < button.length; i++) {
		if (button[i].value < hour24) {
			$(button[i].parentNode.parentNode)
				.find("input")
				.css("background-color", "grey");
		} else if (button[i].value == hour24) {
			$(button[i].parentNode.parentNode)
				.find("input")
				.css("background-color", "red");
		} else {
			$(button[i].parentNode.parentNode)
				.find("input")
				.css("background-color", "green");
		}
	}
}
$("button").on("click", function() {
	console.log(this);
	var key = this.value;
	var task = $(this.parentNode.parentNode)
		.find("input")
		.val();
	console.log(task);
	localStorage.setItem(key, task);
});
for (let i = 0; i < button.length; i++) {
	let task = localStorage.getItem(button[i].value);
	$(button[i].parentNode.parentNode)
		.find("input")
		.val(task);
	console.log($(button[i].parentNode.parentNode));
	// console.log(task);
	// console.log(button[i]);
}
