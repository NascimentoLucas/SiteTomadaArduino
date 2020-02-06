var powerPlug = true;
var buttonTurnPowerPlug;
var handler;
var myUrlConst = "mainDefine";
function start(){
	console.log("Start Main");
	buttonTurnPowerPlug = document.getElementById("buttonTurn");
	buttonTurnPowerPlug.addEventListener("click", ChangeState);
	handler = document.getElementById("handler");
	ChangeNameState(buttonTurnPowerPlug);	
	
	var auxUrl = GetPageUrl() + "";
	var newUrl = [];
	for(var i = auxUrl.length - 1; i > -1; i--){
		if(auxUrl[i].localeCompare(";") == 0){
			break;
		}
		newUrl.splice(0, 0, auxUrl[i]);
	}
	myUrlConst = "";
	for(var i = 0; i < newUrl.length; i++){
		myUrlConst += newUrl[i];
	}
	console.log("url: "  + myUrlConst);
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
	handler.src = "http://"+ url;
	console.log(url);
}


function ChangeState(){
	if(powerPlug){
		SendReq(myUrlConst + "/L");
		powerPlug = false;
	}
	else{
		SendReq(myUrlConst + "/H");
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
	return window.location.href;
}

window.onload = start;