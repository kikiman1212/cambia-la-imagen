const img1 = src="img/1.jpg";
const img5 = src="img/5.jpg";
const img3 = src="img/gus.jpg";
const img6 = src="img/4.jpg";
const fecha = new Date();

const Nombre = document.getElementById('tuNombre');
const edad = document.getElementById('tuEdad');
const sexo = document.getElementById('tuSexo');



function cambiarTexto (){ 
document.getElementById('demostracion').innerHTML  = 'Hola ' + Nombre.value + '  🤟🎸 Hoy es ' + fecha.toDateString();
}

function cambiarImagen(){ 
	if(edad.value < 18 && sexo.value == "Masculino"){
	document.getElementById('imgCambia').src = img1;
	}
	if(edad.value >= 18 && sexo.value == "Masculino"){
	document.getElementById('imgCambia').src = img5;
	 }
	if(edad.value > 4 && sexo.value == "Femenino"){
	document.getElementById('imgCambia').src = img6;
	 }
        if(edad.value == 8 && sexo.value == "Masculino"){
	document.getElementById('imgCambia').src = img3;
         alert('Hola Gustavo tienes 8 Años');
	 }
	
}





