var obj;
var url;
function start(){
	console.log("Start Load");

	
	var ip = document.getElementById('ip');
	url = ip.innerText;
	ip.innerText = "";


	var path = "http://devlucasnascimento.com.br/Arduino/";
	path = 'http://localhost:9000/Arduino/';
	path += "?;" + url;
	obj = document.getElementById('contentTest');
	obj.src = path;


	AdjustSize();
}

function GetPageUrl(){
	var loc = window.location.href;
	var dir = loc.substring(0, loc.lastIndexOf('/'));
	console.log(loc);
}

function AdjustSize(){
	obj.width = window.screen.width;
	obj.height = window.screen.height;
}

window.onresize = AdjustSize;
window.onload = start;