var powerPlug = true;
var buttonTurnPowerPlug;
function start(){
	console.log("start");
	buttonTurnPowerPlug = document.getElementById("buttonTurn");
	buttonTurnPowerPlug.addEventListener("click", ChangeState);
	ChangeNameState(buttonTurnPowerPlug);
	document.getElementById("content").innerHTML='<object type="text/html" data="test.html" ></object>';
}

function ChangeState(){
	if(powerPlug){
		//todo turn of
		console.log("off");
		powerPlug = false;
	}
	else{
		//todo turn on
		console.log("on");
		powerPlug = true;
	}
	ChangeNameState(buttonTurnPowerPlug);
}

function ChangeNameState(button){
	if(powerPlug){
		button.innerText = "Turn Off";
	}
	else{
		button.innerText = "Turn On";
	}
}

window.onload = start;