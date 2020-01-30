function start(){
	console.log("start load html js");
	document.getElementById("content").innerHTML='<object type="text/html" data="https://nascimentolucas.github.io" ></object>';
}

window.onload = start;