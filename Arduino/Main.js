var powerPlug = true;
var buttonTurnPowerPlug;
var handler;
function start(){
	console.log("Start Main");
	buttonTurnPowerPlug = document.getElementById("buttonTurn");
	buttonTurnPowerPlug.addEventListener("click", ChangeState);
	handler = document.getElementById("handler");
	ChangeNameState(buttonTurnPowerPlug);	
	GetPageUrl();
}

function SendReq2(msg){	
	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", msg, true);

	xhttp.onreadystatechange = function(){//Função a ser chamada quando a requisição retornar do servidor
		if ( xhttp.readyState == 4 && xhttp.status == 200 ) {//Verifica se o retorno do servidor deu certo
			
		}
		console.log(xhttp.responseText);
	}

	xhttp.send();
}

function SendReq(url){	
	handler.src = url;
}


function ChangeState(){
	if(powerPlug){
		SendReq("http://192.168.1.110/L");
		powerPlug = false;
	}
	else{
		SendReq("http://192.168.1.110/H");
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


function GetPageUrl(){
	var loc = window.location.href;
	var dir = loc.substring(0, loc.lastIndexOf('/'));
	console.log(loc);
}

window.onload = start;