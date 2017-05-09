// variables
var finished = 0;
var winner = null;
var reset = false;

// start game
function StartGame(){
	var pcSpeed = Math.floor((Math.random() * 10) + 2);
	var xboxSpeed = Math.floor((Math.random() * 10) + 2);
	var psSpeed = Math.floor((Math.random() * 10) + 2);
	
	Go("pc", pcSpeed);
	Go("xbox", xboxSpeed);
	Go("ps", psSpeed);
	
	
}

function StartAnimation(){
	document.getElementById("title").style.visibility = "hidden";
	window.setTimeout(function() {document.getElementById("rsgimage").src = "images/rsg_2.png";}, 1000);
	window.setTimeout(function() {document.getElementById("rsgimage").src = "images/rsg_3.png";}, 2000);
	window.setTimeout(StartGame, 2000);
}

function Go(elemId, rate){
	var element = document.getElementById(elemId);
	var position = 40;
	var id = setInterval(track, rate);
	
	function track(){
		if (position == 950){
			clearInterval(id);
			if (finished == 0){
				winner = elemId;
				finished++;
				console.log(finished);
			} else if (finished == 2){
				ShowWinner();
				
			} else {
				finished++;
				console.log(finished);
			}
		} else {
			position++;
			element.style.left = position + "px";
		}
	}
}

function ShowWinner(){
	if (winner == "pc"){
		document.getElementById("pcwinner").style.visibility = "visible";
		console.log("Winner: PC");
	} else if (winner == "xbox"){
		document.getElementById("xboxwinner").style.visibility = "visible";
		console.log("Winner: Xbox One");
	} else if (winner == "ps"){
		document.getElementById("ps4winner").style.visibility = "visible";
		console.log("Winner: Playstation 4");
	}
	
	reset=true;	
}



// reset
function Reset(){
	if (reset){
		var pc = document.getElementById("pcwinner");
		var xbox = document.getElementById("xboxwinner");
		var ps4 = document.getElementById("ps4winner");
		
		pc.style.visibility = "hidden";
		document.getElementById("pc").style.left = "40px";
		xbox.style.visibility = "hidden";
		document.getElementById("xbox").style.left = "40px";
		ps4.style.visibility = "hidden";
		document.getElementById("ps").style.left = "40px";
		
		document.getElementById("rsgimage").src = "images/rsg_1.png";
		
		winner = null;
		finished = 0;
		reset = false;
		document.getElementById("title").style.visibility = "visible";
	}
}

// animation logic during game