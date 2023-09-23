const img1 = src="img/1.jpg";
const img5 = src="img/5.jpg";
const img3 = src="img/gus.jpg";
const img6 = src="img/4.jpg";
const fecha = new Date();

const Nombre = document.getElementById('tuNombre');
const edad = document.getElementById('tuEdad');
const sexo = document.getElementById('tuSexo');



function cambiarTexto (){ 
document.getElementById('demostracion').innerHTML  = 'Hola ' + Nombre.value + '  🤟😎👨‍💻 ' + ' Tienes ' + edad.value + ' años ' + ' Hoy es ' + fecha.toDateString();
}

function cambiarImagen(){ 
	if(edad.value >= 18 && sexo.value == "Masculino"){
	document.getElementById('imgCambia').src = img5;
        Nombre.value = ""; edad.value = "";
        esconderImagen()
	 }
	else if(edad.value > 4 && sexo.value == "Femenino"){
	document.getElementById('imgCambia').src = img6;
        Nombre.value = ""; edad.value = "";
         esconderImagen()
	 }
        else if(Nombre.value == "ANGEL" && edad.value == 8 && sexo.value == "Masculino"){
	document.getElementById('imgCambia').src = img3;
         alert('Hola Angel Gustavo tienes 8 Años, y eres cinta verde avanzada 🥋🏆, y te gusta ver Raimo Friends');
	  Nombre.value = ""; edad.value = "";	
          esconderImagen()
         }
	else if(edad.value < 18 && sexo.value == "Masculino"){
	document.getElementById('imgCambia').src = img1;
        Nombre.value = ""; edad.value = "";
         esconderImagen()
	}else{
	alert('Introduce tu Nombre, Edad y Sexo 😎👨‍💻❌');
}	
}

function regresarCaja(){
        document.getElementById("esconder").style.display = "flex";
      
}

function esconderImagen(){
        document.getElementById("esconder").style.display = "none";
        

}



