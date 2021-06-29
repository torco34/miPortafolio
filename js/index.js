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
	inicio.classList.add("active");
	conocer.classList.add("active");
	acerca.classList.add("active");
	proyecto.classList.add("active");

	const link = event.target;
	console.log(link);
};

header.addEventListener("click", CambioColor);
