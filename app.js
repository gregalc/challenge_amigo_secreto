// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let arrLista = [];

function limpiarCampo() {
	valor = document.getElementById("amigo").value = "";
}

function actualizarLista(arrLista) {
	listaUl = document.getElementById("listaAmigos");

	listaUl.innerHTML = "";

	console.log("arrLista total", arrLista);

	console.log("listaUl", listaUl);

	for (i = 0; i < arrLista.length; i++) {
		// Creamos el elemento <li>
		let li = document.createElement("li");

		// Agregamos el texto al elemento <li>
		li.innerHTML = arrLista[i];

		// Agregamos el elemento <li> al elemento <ul>
		listaUl.appendChild(li);
	}

	console.log("listaUl end", listaUl);
}

function agregarAmigo() {
	let nomAmigo = document.getElementById("amigo").value;

	if (nomAmigo !== "") {
		console.log("entro en NOvacio");
		arrLista.push(nomAmigo);

		console.log("arrLista", arrLista);

		actualizarLista(arrLista);
		limpiarCampo();
	} else {
		console.log(nomAmigo.typeof);
		console.log("entro en vacio");
		alert("el campo esta vacio");
	}
}

function sortearAmigo() {
	tamArr = arrLista.length;

	if (tamArr) {
		numRan = Math.floor(Math.random() * tamArr);

		console.log("num random", arrLista[numRan]);
	} else {
		alert("no hay amigos");
	}
}
