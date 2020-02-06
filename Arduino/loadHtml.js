var obj;

function start(){
	console.log("Start Load");
	var path = "http://devlucasnascimento.com.br/Arduino/";
	//path = 'http://localhost:9000/Arduino/';

	obj = document.getElementById('contentTest');
	obj.src = path;
	
	AdjustSize();
	GetPageUrl();
}

function GetPageUrl(){
	var loc = window.location.href;
	var dir = loc.substring(0, loc.lastIndexOf('/'));
	console.log(loc);
}

function test(){
	var elmnt = obj.contentWindow.document.getElementsByTagName("H1")[0];
	if(!elmnt)
	{
		window.setTimeout(test, 10);
		console.log("Wait 1s");
	}
	else{
		console.log("Loaded");
		var head = obj.contentWindow.document.head.innerHTML;
		var body = obj.contentWindow.document.body;
		console.log();
		
		var html = "<html>"
		html+= head;
		html+= body;
		html+="</html>"
		document.body = body;
	}
}

function AdjustSize(){
	obj.width = window.screen.width;
	obj.height = window.screen.height;
}

window.onresize = AdjustSize;
window.onload = start;