(function () {
	AOS.init();
})();
const header = document.getElementById("header");
const inicio = document.getElementById("inicio");
const acerca = document.getElementById("acerca");
const conocer = document.getElementById("conocer");
const proyecto = document.getElementById("proyectos");
const contacto = document.getElementById("contactos");
console.log(inicio, acerca, conocer, proyecto, contacto);
const CambioColor = (event) => {
	inicio.classList.remove("active");
	acerca.classList.remove("active");
	conocer.classList.remove("active");
	acerca.classList.remove("active");
	proyecto.classList.remove("active");
	contactos.classList.remove("active");

	const link = event.target;
	console.log(link);
	// link.classList.remove("active");
	link.classList.add("active");
};

header.addEventListener("click", CambioColor);
