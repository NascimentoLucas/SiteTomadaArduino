var obj;

function start(){
	console.log("Start Load");
	var path = "http://devlucasnascimento.com.br/Arduino/";
	//path = 'http://localhost:9000/Arduino/';

	obj = document.getElementById('contentTest');
	obj.src = path;
	
	AdjustSize();
	test();
}

function GetPageUrl(){
	var loc = window.location.href;
	var dir = loc.substring(0, loc.lastIndexOf('/'));
	console.log(loc);
}

function test(){
	try {
		if(!myUrlConst)
		{

		}
		else{
			console.log(myUrlConst);		
		}
	}
	catch(err) {
		window.setTimeout(test, 1000);
		console.log("Wait 1s");
	}
}

function AdjustSize(){
	obj.width = window.screen.width;
	obj.height = window.screen.height;
}

window.onresize = AdjustSize;
window.onload = start;