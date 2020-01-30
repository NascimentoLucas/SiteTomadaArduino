function start(){
	console.log("start load html js");
	document.getElementById("content").innerHTML='<object type="text/html" data="index.html" ></object>';
}

window.onload = start;