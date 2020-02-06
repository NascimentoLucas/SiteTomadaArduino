var powerPlug = true;
var buttonTurnPowerPlug;
function start(){
	console.log("start");
	buttonTurnPowerPlug = document.getElementById("buttonTurn");
	buttonTurnPowerPlug.addEventListener("click", ChangeState);
	ChangeNameState(buttonTurnPowerPlug);
}

function SendReq(msg){	
	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", msg, true);

	xhttp.onreadystatechange = function(){//Função a ser chamada quando a requisição retornar do servidor
		if ( xhttp.readyState == 4 && xhttp.status == 200 ) {//Verifica se o retorno do servidor deu certo
			
		}
		console.log(xhttp.responseText);
	}

	xhttp.send();
}

function ChangeState(){
	if(powerPlug){
		SendReq("http://192.168.1.110/L");
		console.log("off");
		powerPlug = false;
	}
	else{
		SendReq("http://192.168.1.110/H");
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