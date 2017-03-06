/*var formElement=null;
var numeroSecreto=null;
var respuestaSelect=null;

*/

//var respuestas = [];
//var respuestasCheckbox = [];


var datosXml;
var nota = 0;  //nota de la prueba sobre 3 puntos (hay 3 preguntas)

//**************************************************************************************************** 
//Despu�s de cargar la p�gina (onload) se definen los eventos sobre los elementos entre otras acciones.
window.onload = function(){ 

 //CORREGIR al apretar el bot�n
 formElement=document.getElementById('myform');
 
 
 
 /*
 formElement=document.getElementById('myform');
 formElement.onsubmit=function(){
   inicializar();
   if (comprobar()){
    corregirNumber();
    corregirSelect();
    corregirCheckbox();
    presentarNota();
   }
   return false;
 }
 */
 
 //LEER XML de xml/preguntas.xml
 var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
   gestionarXml(this);
  }
 };
 xhttp.open("GET", "xml/preguntas.xml", true);
 xhttp.send();
}

//****************************************************************************************************
// Recuperamos los datos del fichero XML xml/preguntas.xml
// xmlDOC es el documento leido XML. 
function gestionarXml(dadesXml){
 var xmlDoc = dadesXml.responseXML; //Parse XML to xmlDoc
 datosXml = xmlDoc;
 
 
 

 //Radio pregunta 1
 var titulo = xmlDoc.getElementsByTagName("title")[0].innerHTML;
 var opciones = [];
 var nopt = xmlDoc.getElementById("jdos_001").getElementsByTagName("options").length;
 for (i = 0; i < nopt; i++) { 
    opciones[i]=xmlDoc.getElementById("jdos_001").getElementsByTagName("options")[i].innerHTML;
 }  
 ponerPregunta1(titulo,opciones);
	
  
 
 
  //Radio pregunta 2
 var titulo = xmlDoc.getElementsByTagName("title")[1].innerHTML;
 var opciones = [];
 var nopt = xmlDoc.getElementById("jdos_002").getElementsByTagName("options").length;
 for (i = 0; i < nopt; i++) { 
    opciones[i]=xmlDoc.getElementById("jdos_002").getElementsByTagName("options")[i].innerHTML;
 }  
 ponerPregunta2(titulo,opciones);
 
 
 //checkbox pregunta 3
 var titulo = xmlDoc.getElementsByTagName("title")[2].innerHTML;
 var opciones = [];
 var nopt = xmlDoc.getElementById("jdos_003").getElementsByTagName("options").length;
 for (i = 0; i < nopt; i++) { 
    opciones[i]=xmlDoc.getElementById("jdos_003").getElementsByTagName("options")[i].innerHTML;
 }  
 ponerPregunta3(titulo,opciones);
 
 
  //checkbox pregunta 4
 var titulo = xmlDoc.getElementsByTagName("title")[3].innerHTML;
 var opciones = [];
 var nopt = xmlDoc.getElementById("jdos_004").getElementsByTagName("options").length;
 for (i = 0; i < nopt; i++) { 
    opciones[i]=xmlDoc.getElementById("jdos_004").getElementsByTagName("options")[i].innerHTML;
 }  
 ponerPregunta4(titulo,opciones);
 
 
 
 
 
 
 
 
 
//imput text 5 
 var titulo=xmlDoc.getElementsByTagName("title")[4].innerHTML;
 ponerPregunta5(titulo);

 
 
 
 
 
 //imput text 6 
 var titulo=xmlDoc.getElementsByTagName("title")[5].innerHTML;
 ponerPregunta6(titulo);
 
 
 
 
 
   //selected pregunta 7
 var titulo = xmlDoc.getElementsByTagName("title")[6].innerHTML;
 var opciones = [];
 var nopt = xmlDoc.getElementById("jdos_007").getElementsByTagName("options").length;
 for (i = 0; i < nopt; i++) { 
    opciones[i]=xmlDoc.getElementById("jdos_007").getElementsByTagName("options")[i].innerHTML;
 }  
 ponerPregunta7(titulo,opciones);
 
 
 
 
 
 
 
  
   //selected pregunta 8
 var titulo = xmlDoc.getElementsByTagName("title")[7].innerHTML;
 var opciones = [];
 var nopt = xmlDoc.getElementById("jdos_008").getElementsByTagName("options").length;
 for (i = 0; i < nopt; i++) { 
    opciones[i]=xmlDoc.getElementById("jdos_008").getElementsByTagName("options")[i].innerHTML;
 }  
 ponerPregunta8(titulo,opciones);
 
 
 
 
 
 
 
    //selected pregunta 9
 var titulo = xmlDoc.getElementsByTagName("title")[8].innerHTML;
 var opciones = [];
 var nopt = xmlDoc.getElementById("jdos_009").getElementsByTagName("options").length;
 for (i = 0; i < nopt; i++) { 
    opciones[i]=xmlDoc.getElementById("jdos_009").getElementsByTagName("options")[i].innerHTML;
 }  
 ponerPregunta9(titulo,opciones);
 
 
 
 
 
  
    //selected pregunta 10
 var titulo = xmlDoc.getElementsByTagName("title")[9].innerHTML;
 var opciones = [];
 var nopt = xmlDoc.getElementById("jdos_010").getElementsByTagName("options").length;
 for (i = 0; i < nopt; i++) { 
    opciones[i]=xmlDoc.getElementById("jdos_010").getElementsByTagName("options")[i].innerHTML;
 }  
 ponerPregunta10(titulo,opciones);
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}

//EMPIEZA PONER DATOS	

//Pregunta 1
function ponerPregunta1(t,opt){
 var container=document.getElementById("divPregunta1");
 document.getElementById("pregunta_1").innerHTML = "1. "+t;
 for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "color_"+i);
    input.type="radio";
    input.name="Pre1";
    input.id="P1R"+i;    
    container.appendChild(input);
    container.appendChild(label);
    container.appendChild(document.createElement("br"));
	
 }  
 	container.appendChild(document.createElement("br"));
}






//Pregunta 2
function ponerPregunta2(t,opt){
 var container=document.getElementById("divPregunta2");
 document.getElementById("pregunta_2").innerHTML = "2. "+t;
 for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "color_"+i);
    input.type="radio";
    input.name="Pre2";
    input.id="P2R"+i;    
    container.appendChild(input);
    container.appendChild(label);
    container.appendChild(document.createElement("br"));
	
 }  
 	container.appendChild(document.createElement("br"));
}




//Pregunta 3
function ponerPregunta3(t,opt){
 var container=document.getElementById("divPregunta3");
 document.getElementById("pregunta_3").innerHTML = "3. "+t;
 for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "color_"+i);
    input.type="checkbox";
    input.name="Pre3";
    input.id="P3R"+i;    
    container.appendChild(input);
    container.appendChild(label);
    container.appendChild(document.createElement("br"));
	
 }  
 	container.appendChild(document.createElement("br"));
}




//Pregunta 4
function ponerPregunta4(t,opt){
 var container=document.getElementById("divPregunta4");
 document.getElementById("pregunta_4").innerHTML = "4. "+t;
 for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "color_"+i);
    input.type="checkbox";
    input.name="Pre4";
    input.id="P4R"+i;    
    container.appendChild(input);
    container.appendChild(label);
    container.appendChild(document.createElement("br"));
	
 }  
 	container.appendChild(document.createElement("br"));
}




//Pregunta 5
function ponerPregunta5(t){
 var container=document.getElementById("divPregunta5");
 document.getElementById("pregunta_5").innerHTML = "5. "+t;
    var input = document.createElement("input");
    input.type="text";  
	input.id="P5R";  
	input.name="Pre5";
    container.appendChild(input);
    container.appendChild(document.createElement("br"));
	container.appendChild(document.createElement("br"));
	 
}



//Pregunta 6
function ponerPregunta6(t){
 var container=document.getElementById("divPregunta6");
 document.getElementById("pregunta_6").innerHTML = "6. "+t;
    var input = document.createElement("input");
    input.type="text"; 
	input.id="P6R";
	input.name="Pre6";
    container.appendChild(input);
    container.appendChild(document.createElement("br"));
	container.appendChild(document.createElement("br"));
	 
}





//Pregunta 7
function ponerPregunta7(t,opt){
	var container=document.getElementById("divPregunta7");
	document.getElementById("pregunta_7").innerHTML = "7. "+t;
	
	var selectPro = document.createElement("select");
	selectPro.id ="P7R";
	
	
	
	container.appendChild(selectPro);
	var selectd = document.getElementsByTagName("select")[0];
	var label = document.createElement("option");
	label.text="Elige respuesta";
	label.value=-1;
	label.id="P7R-1";
	selectd.options.add(label);
	for (i = 0; i < opt.length; i++) { 
		label = document.createElement("option");
		label.text=opt[i];
		label.value=i+1;
		label.id="P7R"+i;
		label.name="Pre7";
		selectd.options.add(label);
	}  
 	container.appendChild(document.createElement("br"));
	container.appendChild(document.createElement("br"));
}








//Pregunta 8
function ponerPregunta8(t,opt){
	var container=document.getElementById("divPregunta8");
	document.getElementById("pregunta_8").innerHTML = "8. "+t;
	
	
	var selectPro = document.createElement("select");
	selectPro.id ="P8R";
	
	
	
	container.appendChild(selectPro);
	var selectd = document.getElementsByTagName("select")[1];
	var label = document.createElement("option");
	label.text="Elige respuesta";
	label.value=-1;
	label.id="P8R-1";
	selectd.options.add(label);
	for (i = 0; i < opt.length; i++) { 
		label = document.createElement("option");
		label.text=opt[i];
		label.value=i+1;
		label.id="P8R"+i;
		selectd.options.add(label);
	}  
 	container.appendChild(document.createElement("br"));
	container.appendChild(document.createElement("br"));
}








//Pregunta 9
function ponerPregunta9(t,opt){
	var container=document.getElementById("divPregunta9");
	document.getElementById("pregunta_9").innerHTML = "9. "+t;
	var selectMultiple = document.createElement("select");
	selectMultiple.setAttribute("multiple", "");
	selectMultiple.id="P9R";
	
	
	
	container.appendChild(selectMultiple);
	var selectd = document.getElementsByTagName("select")[2];
	var label = document.createElement("option");
	label.text="Elige respuesta";
	label.value=-1;
	label.id="P9R-1";
	selectd.options.add(label);
	for (i = 0; i < opt.length; i++) { 
		label = document.createElement("option");
		label.text=opt[i];
		label.value=i+1;
		label.id="P9R"+i;
		selectd.options.add(label);
	}  
 	container.appendChild(document.createElement("br"));
	container.appendChild(document.createElement("br"));
}





//Pregunta 10
function ponerPregunta10(t,opt){
	var container=document.getElementById("divPregunta10");
	document.getElementById("pregunta_10").innerHTML = "10. "+t;
	var selectMultiple = document.createElement("select");
	selectMultiple.setAttribute("multiple", "");
	selectMultiple.id="P10R";
	
	
	
	container.appendChild(selectMultiple);
	var selectd = document.getElementsByTagName("select")[3];
	var label = document.createElement("option");
	label.text="Elige respuesta";
	label.value=-1;
	label.id="P10R-1";
	selectd.options.add(label);
	for (i = 0; i < opt.length; i++) { 
		label = document.createElement("option");
		label.text=opt[i];
		label.value=i+1;
		label.id="P10R"+i;
		selectd.options.add(label);
	}  
 	container.appendChild(document.createElement("br"));
	container.appendChild(document.createElement("br"));
}


























// TERMINA PONER DATOS








function corregir(){
	
	
	
	 //var sel = document.formElement.elements[0]; 
	 
	 
	// var sel =  document.getElementsByName("option");
	
	
	//document.getElementById('myform')
	
	//datosXml.getElementById("jdos_001").getElementsByTagName("answer")[0].innerHTML == 3
	
	
	
	
	
	/*
	
	if(datosXml.getElementById("jdos_001").getElementsByTagName("answer")[0].innerHTML == formElement.elements[0].selectedIndex-1){
	alert("OK");	
	}
	else{
	
	alert("No");	
	}
	
	*/

  
  
   

	
	
	
	
	
	
	alert(corrigePregunta1());
	alert(corrigePregunta2());
	
	
	alert(corrigePregunta3());
	alert(corrigePregunta4());
	
	
	alert(corrigePregunta5()); 
	alert(corrigePregunta6());
	
	
	alert(corrigePregunta7());
	alert(corrigePregunta8());
	
	
	
	alert(corrigePregunta9());
	alert(corrigePregunta10());
	
	
	
	
	alert("Tu nota es de "+nota );
	
	
}


function corrigePregunta1(){

	var f=formElement;
	var comprueba = "incorrecto";
	var nopt = datosXml.getElementById("jdos_001").getElementsByTagName("options").length;
	for (i = 0; i < nopt; i++) { 
		if((f.Pre1[i].checked)&&(i == datosXml.getElementById("jdos_001").getElementsByTagName("answer")[0].innerHTML)){
			comprueba = "correcto";
			nota++;	
			return "Pregunta 1 es "+ comprueba;
	 	}
	}
	return "Pregunta 1 es "+ comprueba;
  
 
}


function corrigePregunta2(){

	var f=formElement;
	var comprueba = "incorrecto";
	var nopt = datosXml.getElementById("jdos_002").getElementsByTagName("options").length;
	for (i = 0; i < nopt; i++) { 
		if((f.Pre2[i].checked)&&(i == datosXml.getElementById("jdos_002").getElementsByTagName("answer")[0].innerHTML)){
			comprueba = "correcto";
			nota++;	
			return "Pregunta 2 es "+ comprueba;
	 	}
	}
	return "Pregunta 2 es "+ comprueba;
  
 
}















function corrigePregunta3(){
	var respuestasXml = [];

	var nres = datosXml.getElementById("jdos_003").getElementsByTagName('answer').length;
	for (i = 0; i < nres; i++) { 
		respuestasXml[i]=datosXml.getElementById("jdos_003").getElementsByTagName("answer")[i].innerHTML;
	}
	

	
	var comprobador =0;
	
	var f=formElement;
	var escorrecta = [];
	for (i = 0; i < f.Pre3.length; i++) {  //"color" es el nombre asignado a todos los checkbox
		if (f.Pre3[i].checked) {
			escorrecta[i]=false;     
			for (j = 0; j < respuestasXml.length; j++) {
				if (i==respuestasXml[j]) escorrecta[i]=true;
			}
			//si es correcta sumamos y ponemos mensaje, si no es correcta restamos y ponemos mensaje.
			if (escorrecta[i]) {
				comprobador++;    
			} 
		} 
	}
	
	if(comprobador == respuestasXml.length){
		nota++;
		return "Pregunta 3 es correcto";
	}
	else{
		return "Pregunta 3 es incorrecto";
	}
	
	
	
	
}












function corrigePregunta4(){
	var respuestasXml = [];

	var nres = datosXml.getElementById("jdos_004").getElementsByTagName('answer').length;
	for (i = 0; i < nres; i++) { 
		respuestasXml[i]=datosXml.getElementById("jdos_004").getElementsByTagName("answer")[i].innerHTML;
	}
	

	
	var comprobador =0;
	
	var f=formElement;
	var escorrecta = [];
	for (i = 0; i < f.Pre4.length; i++) {  //"color" es el nombre asignado a todos los checkbox
		if (f.Pre4[i].checked) {
			escorrecta[i]=false;     
			for (j = 0; j < respuestasXml.length; j++) {
				if (i==respuestasXml[j]) escorrecta[i]=true;
			}
			//si es correcta sumamos y ponemos mensaje, si no es correcta restamos y ponemos mensaje.
			if (escorrecta[i]) {
				comprobador++;    
			} 
		} 
	}
	
	if(comprobador == respuestasXml.length){
		nota++;
		return "Pregunta 4 es correcto";
	}
	else{
		return "Pregunta 4 es incorrecto";
	}
	
	
	
	
}























function corrigePregunta5(){
	
	var comprueba = "incorrecto";
	if (document.getElementById("P5R").value == datosXml.getElementById("jdos_005").getElementsByTagName("answer")[0].innerHTML){
		comprueba = "correcto";
		nota++;	
	}
	
	return "Pregunta 5 es "+ comprueba;
	
}


function corrigePregunta6(){
	
	var comprueba = "incorrecto";
	if (document.getElementById("P6R").value == datosXml.getElementById("jdos_006").getElementsByTagName("answer")[0].innerHTML){
		comprueba = "correcto";
		nota++;	
	}
	
	return "Pregunta 6 es "+ comprueba;
	
}















function corrigePregunta7(){
	
	var respuestaSelect=datosXml.getElementById("jdos_007").getElementsByTagName("answer")[0].innerHTML;
	
	var sel = document.getElementById("P7R").selectedIndex -1;
	 
	if (sel==respuestaSelect) { //-1 porque hemos puesto una opcion por defecto en el select que ocupa la posicion 0
		nota ++;
		return "Pregunta 7 es correcto";
	}
	else {
		return "Pregunta 7 es incorrecto";	
	}
		
	
}









function corrigePregunta8(){
	
	var respuestaSelect=datosXml.getElementById("jdos_008").getElementsByTagName("answer")[0].innerHTML;
	
	var sel = document.getElementById("P8R").selectedIndex -1;
	 
	if (sel==respuestaSelect) { //-1 porque hemos puesto una opcion por defecto en el select que ocupa la posicion 0
		nota ++;
		return "Pregunta 8 es correcto";
	}
	else {
		return "Pregunta 8 es incorrecto";	
	}
		
	
}









function corrigePregunta9(){
	
	var respuestasXml = [];
	
	var nres = datosXml.getElementById("jdos_009").getElementsByTagName('answer').length;
	for (i = 0; i < nres; i++) { 
		respuestasXml[i]=datosXml.getElementById("jdos_009").getElementsByTagName("answer")[i].innerHTML;
	}
	
	var nopt = datosXml.getElementById("jdos_009").getElementsByTagName("options").length;
	
	var sel = document.getElementById("P9R").selectedIndex -1;
	
	var comprobador =0;
	
	var escorrecta = [];
	for (i = 0; i < nopt; i++) {  //"color" es el nombre asignado a todos los checkbox
		if (document.getElementById("P9R"+i).selected) {
			escorrecta[i]=false;     
			for (j = 0; j < respuestasXml.length; j++) {
				if (i==respuestasXml[j]) escorrecta[i]=true;
			}
			//si es correcta sumamos y ponemos mensaje, si no es correcta restamos y ponemos mensaje.
			if (escorrecta[i]) {
				comprobador++;    
			} 
		} 
	}
	
	if(comprobador == respuestasXml.length){
		nota++;
		return "Pregunta 9 es correcto";
	}
	else{
		return "Pregunta 9 es incorrecto";
	}	
	
	
}












function corrigePregunta10(){
	
	var respuestasXml = [];
	
	var nres = datosXml.getElementById("jdos_010").getElementsByTagName('answer').length;
	for (i = 0; i < nres; i++) { 
		respuestasXml[i]=datosXml.getElementById("jdos_010").getElementsByTagName("answer")[i].innerHTML;
	}
	
	var nopt = datosXml.getElementById("jdos_010").getElementsByTagName("options").length;
	
	var sel = document.getElementById("P10R").selectedIndex -1;
	
	var comprobador =0;
	
	var escorrecta = [];
	for (i = 0; i < nopt; i++) {  //"color" es el nombre asignado a todos los checkbox
		if (document.getElementById("P10R"+i).selected) {
			escorrecta[i]=false;     
			for (j = 0; j < respuestasXml.length; j++) {
				if (i==respuestasXml[j]) escorrecta[i]=true;
			}
			//si es correcta sumamos y ponemos mensaje, si no es correcta restamos y ponemos mensaje.
			if (escorrecta[i]) {
				comprobador++;    
			} 
		} 
	}
	
	if(comprobador == respuestasXml.length){
		nota++;
		return "Pregunta 10 es correcto";
	}
	else{
		return "Pregunta 10 es incorrecto";
	}	
	
	
}





















