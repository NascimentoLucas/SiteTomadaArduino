var powerPlug = true;
var buttonTurnPowerPlug;
var handler;
var myUrlConst = "mainDefine";
var handlerIsFree = true;
function start(){
	console.log("Start Main");
	buttonTurnPowerPlug = document.getElementById("buttonTurn");
	buttonTurnPowerPlug.addEventListener("click", ChangeState);
	handler = document.getElementById("handler");
	handler.addEventListener("load", HandlerLoaded);

	ChangeNameState(buttonTurnPowerPlug);	
	
	myUrlConst = GetMachineIP();
	console.log("url: "  + myUrlConst);
}

function HandlerLoaded(){
	console.log(handler.src + " has been load");
	setTimeout(function(){ 
		handlerIsFree = true;
		ChangeNameState(buttonTurnPowerPlug);
	}, 1000);	
}

function GetMachineIP(){
	var url = "";
	var auxUrl = GetPageUrl() + "";
	var newUrl = [];
	for(var i = auxUrl.length - 1; i > -1; i--){
		if(auxUrl[i].localeCompare(";") == 0){
			break;
		}
		newUrl.splice(0, 0, auxUrl[i]);
	}
	url = "";
	for(var i = 0; i < newUrl.length; i++){
		url += newUrl[i];
	}

	return url;
}

function SendReq(url){	
	if(handlerIsFree){
		buttonTurnPowerPlug.innerText = "Please Wait";
		handlerIsFree = false;
		url = "http://" + url;
		handler.src = url;
		console.log("Loading: " + handler.src);
	}
	else{
		alert("Please Wait");
	}
}

function ChangeState(){
	if(!powerPlug){
		SendReq(myUrlConst + "/L");
		powerPlug = false;
	}
	else{
		SendReq(myUrlConst + "/H");
		powerPlug = true;
	}
}

function ChangeNameState(button){
	if(powerPlug){
		button.innerText = "Turn On";
	}
	else{
		button.innerText = "Turn Off";
	}
}

function GetPageUrl(){
	return window.location.href;
}

window.onload = start;