function start(){
	console.log("start load html js");
	document.getElementById("content").innerHTML='<object type="text/html" data="http://devlucasnascimento.com.br/Arduino/" ></object>';
}

window.onload = start;