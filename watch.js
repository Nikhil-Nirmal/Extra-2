var minutes = 0;
var seconds = 0;
var tens = 0;
var appendtens = document.getElementById("tens")
var appendseconds = document.getElementById("seconds");
var appendminutes = document.getElementById("minutes")
var buttonstart = document.getElementById('button-start');
var buttonstop = document.getElementById('button-stop');
var buttonreset = document.getElementById('button-reset');
var interval;

	buttonstart.onclick = function() {
		clearInterval(interval);
		interval = setInterval(startTimer, 10);
	}

	buttonstop.onclick = function() {
		clearInterval(interval);
	}

	buttonreset.onclick = function() {
		clearInterval(interval);
		minutes = "00";
		tens = "00";
		seconds = "00";
		appendtens.innerHTML = tens;
		appendseconds.innerHTML = seconds;
		appendminutes.innerHTML = minutes;
	}

	function startTimer () {
		tens++;
		if (tens <= 9) {
			appendtens.innerHTML = "0" + tens;
		}

		if (tens > 9) {
			appendtens.innerHTML = tens;
		}

		if (tens > 99) {
			console.log("seconds");
			seconds++;
			appendseconds.innerHTML = "0" + seconds;
			tens = 0;
			appendtens.innerHTML = "0" + 0;
		}

		if (seconds > 9) {
			appendseconds.innerHTML = seconds;
		}

		if (seconds > 59)
		{
			minutes++;
			appendminutes.innerHTML = "0"+ minutes;
			seconds = 0;
			appendseconds.innerHTML = "0" + seconds;
		}
	}