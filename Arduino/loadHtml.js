function start(){
	console.log("Start Load");
	var path = "http://devlucasnascimento.com.br/Arduino/";	//todo remove
	path = 'http://localhost:9000/Arduino/';
	var html = "<object type=\"text/html\" data=" + path +" ></object>";
	
	var obj = document.getElementById("content");
	obj.innerHTML = html
}

window.onload = start;