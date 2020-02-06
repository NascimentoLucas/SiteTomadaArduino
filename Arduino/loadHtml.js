var obj;
var url;
function start(){
	console.log("Start Load");
	var path = "http://devlucasnascimento.com.br/Arduino/";
	//path = 'http://localhost:9000/Arduino/';

	obj = document.getElementById('contentTest');
	obj.src = path;
	var ip = document.getElementById('ip');
	url = ip.innerText;
	ip.innerText = "";
	window.onload = GetMyUrl;
	//AdjustSize();
}

function GetPageUrl(){
	var loc = window.location.href;
	var dir = loc.substring(0, loc.lastIndexOf('/'));
	console.log(loc);
}

function GetMyUrl(){
	return url;
}

function AdjustSize(){
	obj.width = window.screen.width;
	obj.height = window.screen.height;
}

window.onresize = AdjustSize;
window.onload = start;