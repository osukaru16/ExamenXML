/*var formElement=null;
var numeroSecreto=null;
var respuestaSelect=null;

*/

//var respuestas = [];
//var respuestasCheckbox = [];
var xslDoc;
var xmlDoc;

var datosXsl;
var datosXml;
var nota = 0;  //nota de la prueba sobre 3 puntos (hay 3 preguntas)

var nombre = "";
var apelli2 = "";


var colorPre="#8FC0A9";
var colorErr="#F5605A";



//**************************************************************************************************** 
//Después de cargar la página (onload) se definen los eventos sobre los elementos entre otras acciones.
window.onload = function(){ 

 //CORREGIR al apretar el botón
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
 
 
 
 
 //LEER XSL de xml/preguntas.xml
 var xhttp2 = new XMLHttpRequest();
 xhttp2.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
   xslDoc=this.responseXML;
  }
 };
 xhttp2.open("GET", "xml/preguntas.xsl", true);
 xhttp2.send();
 

 
 
 
 
 
 
 
 
 
 
 
 
 
 
  window.onmousedown = function (e) {
	  var el = e.target;
	  if (el.tagName.toLowerCase() == 'option' && el.parentNode.hasAttribute('multiple')) {
        e.preventDefault();

        // toggle selection
        if (el.hasAttribute('selected')) el.removeAttribute('selected');
        else el.setAttribute('selected', '');

        // hack to correct buggy behavior
        var select = el.parentNode.cloneNode(true);
        el.parentNode.parentNode.replaceChild(select, el.parentNode);
	}
}
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}

//****************************************************************************************************
// Recuperamos los datos del fichero XML xml/preguntas.xml
// xmlDOC es el documento leido XML. 
function gestionarXml(dadesXml){
	xmlDoc = dadesXml.responseXML; //Parse XML to xmlDoc
	datosXml = xmlDoc;
	
 
 
 

 //Radio pregunta 1
 /*
 var titulo = xmlDoc.getElementsByTagName("title")[0].innerHTML;
 var opciones = [];
 var nopt = xmlDoc.getElementById("jdos_001").getElementsByTagName("options").length;
 for (i = 0; i < nopt; i++) { 
    opciones[i]=xmlDoc.getElementById("jdos_001").getElementsByTagName("options")[i].innerHTML;
 }  
 ponerPregunta1(titulo,opciones);
*/
 
 var titulo = xmlDoc.getElementsByTagName("title")[0].innerHTML;
 var xpath="/questions/question[@id='jdos_001']/options";
 var nodesCheckbox = xmlDoc.evaluate(xpath, xmlDoc, null, XPathResult.ANY_TYPE, null); 
 
 ponerPregunta1(titulo,nodesCheckbox);




  
 
 
  //Radio pregunta 2
  /*
 var titulo = xmlDoc.getElementsByTagName("title")[1].innerHTML;
 var opciones = [];
 var nopt = xmlDoc.getElementById("jdos_002").getElementsByTagName("options").length;
 for (i = 0; i < nopt; i++) { 
    opciones[i]=xmlDoc.getElementById("jdos_002").getElementsByTagName("options")[i].innerHTML;
 }  
 ponerPregunta2(titulo,opciones);
 */
 
 var titulo = xmlDoc.getElementsByTagName("title")[1].innerHTML;
 var xpath="/questions/question[@id='jdos_002']/options";
 var nodesCheckbox = xmlDoc.evaluate(xpath, xmlDoc, null, XPathResult.ANY_TYPE, null); 
 
 ponerPregunta2(titulo,nodesCheckbox);
 
 
 
 
 
 
 
 
 
 
 
 //checkbox pregunta 3
 /*
 var titulo = xmlDoc.getElementsByTagName("title")[2].innerHTML;
 var opciones = [];
 var nopt = xmlDoc.getElementById("jdos_003").getElementsByTagName("options").length;
 for (i = 0; i < nopt; i++) { 
    opciones[i]=xmlDoc.getElementById("jdos_003").getElementsByTagName("options")[i].innerHTML;
 }  
 ponerPregunta3(titulo,opciones);
 */
 
 
 var titulo = xmlDoc.getElementsByTagName("title")[2].innerHTML;
 var xpath="/questions/question[@id='jdos_003']/options";
 var nodesCheckbox = xmlDoc.evaluate(xpath, xmlDoc, null, XPathResult.ANY_TYPE, null); 
 
 ponerPregunta3(titulo,nodesCheckbox);
 

 
 
 
 
 
 
 
 
 
  //checkbox pregunta 4
 /*
 var titulo = xmlDoc.getElementsByTagName("title")[3].innerHTML;
 var opciones = [];
 var nopt = xmlDoc.getElementById("jdos_004").getElementsByTagName("options").length;
 for (i = 0; i < nopt; i++) { 
    opciones[i]=xmlDoc.getElementById("jdos_004").getElementsByTagName("options")[i].innerHTML;
 }  
 ponerPregunta4(titulo,opciones);
 
 */
 
 var titulo = xmlDoc.getElementsByTagName("title")[3].innerHTML;
 var xpath="/questions/question[@id='jdos_004']/options";
 var nodesCheckbox = xmlDoc.evaluate(xpath, xmlDoc, null, XPathResult.ANY_TYPE, null); 
 
 ponerPregunta4(titulo,nodesCheckbox);
 
 
 
 
 
 
 
//imput text 5 
 var titulo=xmlDoc.getElementsByTagName("title")[4].innerHTML;
 ponerPregunta5(titulo);

 
 
 
 
 
 //imput text 6 
 var titulo=xmlDoc.getElementsByTagName("title")[5].innerHTML;
 ponerPregunta6(titulo);
 
 
 
 
 
   //selected pregunta 7
 /*  //Version antigua
 var titulo = xmlDoc.getElementsByTagName("title")[6].innerHTML;
 var opciones = [];
 var nopt = xmlDoc.getElementById("jdos_007").getElementsByTagName("options").length;
 for (i = 0; i < nopt; i++) { 
    opciones[i]=xmlDoc.getElementById("jdos_007").getElementsByTagName("options")[i].innerHTML;
 }  
 ponerPregunta7(titulo,opciones);
 */
 var titulo = xmlDoc.getElementsByTagName("title")[6].innerHTML;

 var xpath="/questions/question[@id='jdos_007']/options";
 var nodesSelect = xmlDoc.evaluate(xpath, xmlDoc, null, XPathResult.ANY_TYPE, null);
 ponerPregunta7(titulo,nodesSelect);
 
 
 
 
 
 
  
   //selected pregunta 8
   /*
 var titulo = xmlDoc.getElementsByTagName("title")[7].innerHTML;
 var opciones = [];
 var nopt = xmlDoc.getElementById("jdos_008").getElementsByTagName("options").length;
 for (i = 0; i < nopt; i++) { 
    opciones[i]=xmlDoc.getElementById("jdos_008").getElementsByTagName("options")[i].innerHTML;
 }  
 ponerPregunta8(titulo,opciones);
 */
 
 var titulo = xmlDoc.getElementsByTagName("title")[7].innerHTML;

 var xpath="/questions/question[@id='jdos_008']/options";
 var nodesSelect = xmlDoc.evaluate(xpath, xmlDoc, null, XPathResult.ANY_TYPE, null);
 ponerPregunta8(titulo,nodesSelect);
 
 
 
 
 
 
 
    //selected pregunta 9
	/*
 var titulo = xmlDoc.getElementsByTagName("title")[8].innerHTML;
 var opciones = [];
 var nopt = xmlDoc.getElementById("jdos_009").getElementsByTagName("options").length;
 for (i = 0; i < nopt; i++) { 
    opciones[i]=xmlDoc.getElementById("jdos_009").getElementsByTagName("options")[i].innerHTML;
 }  
 ponerPregunta9(titulo,opciones);
 */
 
  var titulo = xmlDoc.getElementsByTagName("title")[8].innerHTML;

 var xpath="/questions/question[@id='jdos_009']/options";
 var nodesSelect = xmlDoc.evaluate(xpath, xmlDoc, null, XPathResult.ANY_TYPE, null);
 ponerPregunta9(titulo,nodesSelect);
 
 
 
 
  
    //selected pregunta 10
	/*
 var titulo = xmlDoc.getElementsByTagName("title")[9].innerHTML;
 var opciones = [];
 var nopt = xmlDoc.getElementById("jdos_010").getElementsByTagName("options").length;
 for (i = 0; i < nopt; i++) { 
    opciones[i]=xmlDoc.getElementById("jdos_010").getElementsByTagName("options")[i].innerHTML;
 }  
 ponerPregunta10(titulo,opciones);
 
 */
 
 
  var titulo = xmlDoc.getElementsByTagName("title")[9].innerHTML;

 var xpath="/questions/question[@id='jdos_010']/options";
 var nodesSelect = xmlDoc.evaluate(xpath, xmlDoc, null, XPathResult.ANY_TYPE, null);
 ponerPregunta10(titulo,nodesSelect);
 
 
 
 
 
 
 
 
 
 
 
 
 
}

//EMPIEZA PONER DATOS	

//Pregunta 1
function ponerPregunta1(t,opt){
	/*
 var container=document.getElementById("divPregunta1");
 document.getElementById("pregunta_1").innerHTML = "1. "+t;
 
 
 for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "P1R"+i);
    input.type="radio";
    input.name="Pre1";
    input.id="P1R"+i;    
    container.appendChild(input);
    container.appendChild(label);
    container.appendChild(document.createElement("br"));
	
 }  
 
 
 
 
 	container.appendChild(document.createElement("br"));
	*/
	
	
		
	var container=document.getElementById("divPregunta1");
 	document.getElementById("pregunta_1").innerHTML = "1. "+t;
	
 
 	 var result = opt.iterateNext();
	 
	 i=0;
	// alert(result);
	 while (result) {
		 
		 var input = document.createElement("input");
		 var label = document.createElement("label");
		 
		 
		 label.innerHTML = result.innerHTML;
		 
		 label.setAttribute("for", "P1R"+i);
		 input.type="radio";
		 input.name="Pre1";
		 input.id="P1R"+i;
		 i++;
		 
		 
		 container.appendChild(input);
		 container.appendChild(label);
		 container.appendChild(document.createElement("br"));
		 
		 
		 result = opt.iterateNext();
		 
	}    
	
	container.appendChild(document.createElement("br"));
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}






//Pregunta 2
function ponerPregunta2(t,opt){
	/*
 var container=document.getElementById("divPregunta2");
 document.getElementById("pregunta_2").innerHTML = "2. "+t;
 for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "P2R"+i);
    input.type="radio";
    input.name="Pre2";
    input.id="P2R"+i;    
    container.appendChild(input);
    container.appendChild(label);
    container.appendChild(document.createElement("br"));
	
 }  
 	container.appendChild(document.createElement("br"));
	*/
	
	
	
	
	
	var container=document.getElementById("divPregunta2");
 	document.getElementById("pregunta_2").innerHTML = "2. "+t;
	
 
 	 var result = opt.iterateNext();
	 
	 i=0;
	// alert(result);
	 while (result) {
		 
		 var input = document.createElement("input");
		 var label = document.createElement("label");
		 
		 
		 label.innerHTML = result.innerHTML;
		 
		 label.setAttribute("for", "P2R"+i);
		 input.type="radio";
		 input.name="Pre2";
		 input.id="P2R"+i;
		 i++;
		 
		 
		 container.appendChild(input);
		 container.appendChild(label);
		 container.appendChild(document.createElement("br"));
		 
		 
		 result = opt.iterateNext();
		 
	}    
	
	container.appendChild(document.createElement("br"));
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}




//Pregunta 3
function ponerPregunta3(t,opt){
	/*
 var container=document.getElementById("divPregunta3");
 document.getElementById("pregunta_3").innerHTML = "3. "+t;
 for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "P3R"+i);
    input.type="checkbox";
    input.name="Pre3";
    input.id="P3R"+i;    
    container.appendChild(input);
    container.appendChild(label);
    container.appendChild(document.createElement("br"));
	
 }  
 	container.appendChild(document.createElement("br"));
	*/
	
	
	
	
	
	
	
	var container=document.getElementById("divPregunta3");
 	document.getElementById("pregunta_3").innerHTML = "3. "+t;
	
 
 	 var result = opt.iterateNext();
	 
	 i=0;
	// alert(result);
	 while (result) {
		 
		 var input = document.createElement("input");
		 var label = document.createElement("label");
		 
		 
		 label.innerHTML = result.innerHTML;
		 
		 label.setAttribute("for", "P3R"+i);
		 input.type="checkbox";
		 input.name="Pre3";
		 input.id="P3R"+i;
		 i++;
		 
		 
		 container.appendChild(input);
		 container.appendChild(label);
		 container.appendChild(document.createElement("br"));
		 
		 
		 result = opt.iterateNext();
		 
	}    
	
	container.appendChild(document.createElement("br"));
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}




//Pregunta 4
function ponerPregunta4(t,opt){
	/*
 var container=document.getElementById("divPregunta4");
 document.getElementById("pregunta_4").innerHTML = "4. "+t;
 for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "P4R"+i);
    input.type="checkbox";
    input.name="Pre4";
    input.id="P4R"+i;    
    container.appendChild(input);
    container.appendChild(label);
    container.appendChild(document.createElement("br"));
	
 }  
 	container.appendChild(document.createElement("br"));
	*/
	
	
	
	var container=document.getElementById("divPregunta4");
 	document.getElementById("pregunta_4").innerHTML = "4. "+t;
	
 
 	 var result = opt.iterateNext();
	 
	 i=0;
	// alert(result);
	 while (result) {
		 
		 var input = document.createElement("input");
		 var label = document.createElement("label");
		 
		 
		 label.innerHTML = result.innerHTML;
		 
		 label.setAttribute("for", "P4R"+i);
		 input.type="checkbox";
		 input.name="Pre4";
		 input.id="P4R"+i;
		 i++;
		 
		 
		 container.appendChild(input);
		 container.appendChild(label);
		 container.appendChild(document.createElement("br"));
		 
		 
		 result = opt.iterateNext();
		 
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
	
	//document.getElementById("p5").setAttribute("for","P5R");
	
	
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
	 //antiguo
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
	
	/*

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
	
	*/
	

	var result = opt.iterateNext();
	//alert(result);
	i=0;
	//alert(result+" El 7");
	
	while (result) {
		var option = document.createElement("option");
		option.text = result.innerHTML;
		option.value=i+1;
		option.id="P7R"+i;
		option.name="Pre7";
		i++;
		selectd.options.add(option);
		
		result = opt.iterateNext();
		//alert(result);
		
		
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
	/*
	for (i = 0; i < opt.length; i++) { 
		label = document.createElement("option");
		label.text=opt[i];
		label.value=i+1;
		label.id="P8R"+i;
		selectd.options.add(label);
	}  */
	
	var result = opt.iterateNext();
	
	i=0;
	
	
	while (result) {
		var option = document.createElement("option");
		option.text = result.innerHTML;
		option.value=i+1;
		option.id="P8R"+i;
		option.name="Pre8";
		i++;
		selectd.options.add(option);
		
		result = opt.iterateNext();
		//alert(result);
		
		
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
	
	/*
	for (i = 0; i < opt.length; i++) { 
		label = document.createElement("option");
		label.text=opt[i];
		label.value=i+1;
		label.id="P9R"+i;
		selectd.options.add(label);
	}  */
	
	
	

	
	var result = opt.iterateNext();
	
	i=0;
	
	
	while (result) {
		var option = document.createElement("option");
		option.text = result.innerHTML;
		option.value=i+1;
		option.id = "P9R"+i;
		
		selectd.options.add(option);
		
		
		
		 i++;
		
		result = opt.iterateNext();
		//alert(result);
		
		
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
	/*
	for (i = 0; i < opt.length; i++) { 
		label = document.createElement("option");
		label.text=opt[i];
		label.value=i+1;
		label.id="P10R"+i;
		selectd.options.add(label);
	}  */
	
	
	
	
	
	
	var result = opt.iterateNext();
	//alert(result);
	i=0;
	//alert(result+" El 7");
	
	while (result) {
		var option = document.createElement("option");
		option.text = result.innerHTML;
		option.value=i+1;
		option.id = "P10R"+i;
		
		selectd.options.add(option);
		
		
		
		 i++;
		
		result = opt.iterateNext();
		//alert(result);
		
		
	}
	
	
	
	
	
	
	
 	container.appendChild(document.createElement("br"));
	container.appendChild(document.createElement("br"));
}


























// TERMINA PONER DATOS







// Funciones de correccion


function corrigePregunta1(){

	var f=formElement;
	var nopt = datosXml.getElementById("jdos_001").getElementsByTagName("options").length;
	for (i = 0; i < nopt; i++) { 
		if((f.Pre1[i].checked)&&(i == datosXml.getElementById("jdos_001").getElementsByTagName("answer")[0].innerHTML)){
			nota++;
			document.getElementById("p1").style.backgroundColor=colorPre;
			return "Pregunta 1 es correcto";
	 	}
	}
	document.getElementById("p1").style.backgroundColor=colorErr;
	return "Pregunta 1 es incorrecto";
  
 
}


function corrigePregunta2(){

	var f=formElement;
	var nopt = datosXml.getElementById("jdos_002").getElementsByTagName("options").length;
	for (i = 0; i < nopt; i++) { 
		if((f.Pre2[i].checked)&&(i == datosXml.getElementById("jdos_002").getElementsByTagName("answer")[0].innerHTML)){
			nota++;	
			document.getElementById("p2").style.backgroundColor=colorPre;
			return "Pregunta 2 es correcto";
	 	}
	}
	document.getElementById("p2").style.backgroundColor=colorErr;
	return "Pregunta 2 es incorrecto";
  
 
}















function corrigePregunta3(){
	var respuestasXml = [];

	var nres = datosXml.getElementById("jdos_003").getElementsByTagName('answer').length;
	for (i = 0; i < nres; i++) { 
		respuestasXml[i]=datosXml.getElementById("jdos_003").getElementsByTagName("answer")[i].innerHTML;
	}
	

	
	var comprobador =0;
	var seleciona2 = 0;
	
	var f=formElement;
	var escorrecta = [];
	for (i = 0; i < f.Pre3.length; i++) {  //"color" es el nombre asignado a todos los checkbox
		if (f.Pre3[i].checked) {
			escorrecta[i]=false;
			seleciona2++;     
			for (j = 0; j < respuestasXml.length; j++) {
				if (i==respuestasXml[j]) escorrecta[i]=true;
			}
			//si es correcta sumamos y ponemos mensaje, si no es correcta restamos y ponemos mensaje.
			if (escorrecta[i]) {
				comprobador++;    
			} 
		} 
	}
	
	if((comprobador == respuestasXml.length)&&(comprobador == seleciona2)){
		nota++;
		document.getElementById("p3").style.backgroundColor=colorPre;
		return "Pregunta 3 es correcto";
	}
	else{
		document.getElementById("p3").style.backgroundColor=colorErr;
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
	var seleciona2 = 0;
	
	
	var f=formElement;
	var escorrecta = [];
	for (i = 0; i < f.Pre4.length; i++) {  //"color" es el nombre asignado a todos los checkbox
		if (f.Pre4[i].checked) {
			escorrecta[i]=false; 
			seleciona2++;     
			for (j = 0; j < respuestasXml.length; j++) {
				if (i==respuestasXml[j]) escorrecta[i]=true;
			}
			//si es correcta sumamos y ponemos mensaje, si no es correcta restamos y ponemos mensaje.
			if (escorrecta[i]) {
				comprobador++;    
			} 
		} 
	}
	
	if((comprobador == respuestasXml.length)&&(comprobador == seleciona2)){
		nota++;
		document.getElementById("p4").style.backgroundColor=colorPre;
		return "Pregunta 4 es correcto";
	}
	else{
		document.getElementById("p4").style.backgroundColor=colorErr;
		return "Pregunta 4 es incorrecto";
	}
	
	
	
	
}























function corrigePregunta5(){
	
	var comprueba = false;
	
	
	
		
	
	
	var useranswer = xmlDoc.createElement("useranswer");   
  	useranswer.innerHTML = document.getElementById("P5R").text;
  	xmlDoc.getElementById("jdos_005").appendChild(useranswer);
	
	
	
	
	
	
	
	
	if (document.getElementById("P5R").value == datosXml.getElementById("jdos_005").getElementsByTagName("answer")[0].innerHTML){
		comprueba = true;
		nota++;	
	}
	

	
	
	if(comprueba){
		document.getElementById("p5").style.backgroundColor=colorPre;
		return "Pregunta 5 es correcto";	
	}
	else{
		document.getElementById("p5").style.backgroundColor=colorErr;
		return "Pregunta 5 es incorrecto";		
	}
	
	
	
	
	
	
	
	
	
	
	
		
}


function corrigePregunta6(){
	
	var comprueba = false;
	if (document.getElementById("P6R").value == datosXml.getElementById("jdos_006").getElementsByTagName("answer")[0].innerHTML){
		comprueba = true;
		nota++;	
	}
	
	if(comprueba){
		document.getElementById("p6").style.backgroundColor=colorPre;
		return "Pregunta 6 es correcto";	
	}
	else{
		document.getElementById("p6").style.backgroundColor=colorErr;
		return "Pregunta 6 es incorrecto";		
	}
	
	
	
	
}















function corrigePregunta7(){
	
	var respuestaSelect=datosXml.getElementById("jdos_007").getElementsByTagName("answer")[0].innerHTML;
	
	var sel = document.getElementById("P7R").selectedIndex -1;
	 
	if (sel==respuestaSelect) { //-1 porque hemos puesto una opcion por defecto en el select que ocupa la posicion 0
		nota ++;
		document.getElementById("p7").style.backgroundColor=colorPre;
		return "Pregunta 7 es correcto";
	}
	else {
		document.getElementById("p7").style.backgroundColor=colorErr;
		return "Pregunta 7 es incorrecto";	
	}
		
	
}









function corrigePregunta8(){
	
	var respuestaSelect=datosXml.getElementById("jdos_008").getElementsByTagName("answer")[0].innerHTML;
	
	var sel = document.getElementById("P8R").selectedIndex -1;
	 
	if (sel==respuestaSelect) { //-1 porque hemos puesto una opcion por defecto en el select que ocupa la posicion 0
		nota ++;
		document.getElementById("p8").style.backgroundColor=colorPre;
		return "Pregunta 8 es correcto";
	}
	else {
		document.getElementById("p8").style.backgroundColor=colorErr;
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
	var seleciona2 = 0;
	
	var escorrecta = [];
	for (i = 0; i < nopt; i++) {  //"color" es el nombre asignado a todos los checkbox
		if (document.getElementById("P9R"+i).selected) {
			escorrecta[i]=false; 
			seleciona2++;
			for (j = 0; j < respuestasXml.length; j++) {
				if (i==respuestasXml[j]) escorrecta[i]=true;
			}
			//si es correcta sumamos y ponemos mensaje, si no es correcta restamos y ponemos mensaje.
			if (escorrecta[i]) {
				comprobador++;    
			} 
		} 
	}
	
	if((comprobador == respuestasXml.length)&&(comprobador == seleciona2)){
		nota++;
		document.getElementById("p9").style.backgroundColor=colorPre;
		return "Pregunta 9 es correcto";
	}
	else{
		document.getElementById("p9").style.backgroundColor=colorErr;
		return "Pregunta 9 es incorrecto";
	}	
	
	
}












function corrigePregunta10(){
	
	var respuestasXml = [];
	
	var nres = datosXml.getElementById("jdos_010").getElementsByTagName("answer").length;
	for (i = 0; i < nres; i++) { 
		respuestasXml[i]=datosXml.getElementById("jdos_010").getElementsByTagName("answer")[i].innerHTML;
	}
	
	var nopt = datosXml.getElementById("jdos_010").getElementsByTagName("options").length;
	
	var sel = document.getElementById("P10R").selectedIndex -1;
	
		
	var comprobador =0;
	var seleciona2 = 0;
	
	var escorrecta = [];
	for (i = 0; i < nopt; i++) {  //"color" es el nombre asignado a todos los checkbox
		if (document.getElementById("P10R"+i).selected) {
			escorrecta[i]=false;
			seleciona2++;
			for (j = 0; j < respuestasXml.length; j++) {
				if (i==respuestasXml[j]) escorrecta[i]=true;
			}
			//si es correcta sumamos y ponemos mensaje, si no es correcta restamos y ponemos mensaje.
			if (escorrecta[i]) {
				comprobador++;    
			} 
		} 
	}
	
	if((comprobador == respuestasXml.length)&&(comprobador == seleciona2)){
		nota++;
		document.getElementById("p10").style.backgroundColor=colorPre;
		return "Pregunta 10 es correcto";
	}
	else{
		document.getElementById("p10").style.backgroundColor=colorErr;
		return "Pregunta 10 es incorrecto";
	}	
	
	
}














function user(){
	
	nombre = document.getElementById("nombre").value;
	apelli2 = document.getElementById("apellidos").value;
	
	
	//document.getElementById("corregir").disabled = false;
	
	document.getElementById("divUsuario").style.display="none";
	document.getElementById("contenedor").style.display="block";
	




}










function corregi2(){
	  
	  
	  
	  
  var br = "<br/>";
  
  
  
  var texto ="Nombre: "+nombre+br+"Apellidos: "+apelli2+br+br+"Preguntas: "+br+corrigePregunta1()+br+corrigePregunta2()+br+corrigePregunta3()+br+corrigePregunta4()+br+corrigePregunta5()+br+corrigePregunta6()+br+corrigePregunta7()+br+corrigePregunta8()+br+corrigePregunta9()+br+corrigePregunta10()+br+"Tu nota es de: <h1>"+nota+"</h1>";
  
  
  
  
  //nota = 0;
  document.getElementById("resultado").style.display="block";
  document.getElementById("resultado").innerHTML=texto;	
  
  
  
  
  
  
  presentarNota();
	
}


/*
function resultado(){
	corregir();
	}
*/





















function escondeResultados(){
	document.getElementById("resultado").style.display="none";
	
}






// Parte nueva del xsl


function presentarNota(){
	
	/*
   document.getElementById('resultadosDiv').style.display = "block";
   //Codigo transformacion xslt con xmlDoc y xslDoc
   if (document.implementation && document.implementation.createDocument) {
        xsltProcessor = new XSLTProcessor();
        xsltProcessor.importStylesheet(xslDoc);
        resultDocument = xsltProcessor.transformToFragment(xmlDoc, document);
        document.getElementById('resultadosDiv').appendChild(resultDocument);
   }
   darRespuestaHtml("Nota: "+nota+" puntos sobre 3");
   //bloquear formulario (recargar para volver a empezar)
   var f=formElement;
   var e = f.elements;
   for (var i = 0, len = e.length; i < len; ++i) {
    e[i].disabled = true;
   }
   
   */
   
   
  
   
   
   document.getElementById('resultadosDiv').style.display = "block";
   //Codigo transformacion xslt con xmlDoc y xslDoc
   if (document.implementation && document.implementation.createDocument) {
        xsltProcessor = new XSLTProcessor();
        xsltProcessor.importStylesheet(xslDoc);
        resultDocument = xsltProcessor.transformToFragment(datosXml, document);
        document.getElementById('resultadosDiv').appendChild(resultDocument);
   }
   darRespuestaHtml("Nota: "+nota);
   //bloquear formulario (recargar para volver a empezar)
   /*
   var f=formElement;
   var e = f.elements;
   for (var i = 0, len = e.length; i < len; ++i) {
    e[i].disabled = true;
   }
   
   
   */
   
   
   
   
   
   
   
   
   
   
   
   //alert(datosXsl);
   /* 
   alert(xslDoc);
   
   
   alert(datosXml); 
   alert(xmlDoc);
   */
   
   
   	document.getElementById("resultado").style.display="none";
	document.getElementById("contenedor").style.display="none";
	//document.getElementById("resultado").style.display="none";

   
   
   
   
}












function darRespuestaHtml(r){
	var p = document.createElement("p");
	var node = document.createTextNode(r);
	p.appendChild(node);
	document.getElementById('resultadosDiv').appendChild(p);
 
}





 function refresh(){
	 
        location.reload(true);
    }



function camposRellenados(){
	
	var contestado = [];
	var nopt = 0;
	var f=formElement;
	
	
	for (i = 0; i < 10; i++) {
		contestado[i] = false;
	}
	
	
	
	
	nopt = datosXml.getElementById("jdos_001").getElementsByTagName("options").length;
	for (i = 0; i < nopt; i++) { 
		if(f.Pre1[i].checked){
			contestado[0] = true;
		}
	}
	
	nopt = datosXml.getElementById("jdos_002").getElementsByTagName("options").length;
	for (i = 0; i < nopt; i++) { 
		if(f.Pre2[i].checked){
			contestado[1] = true;
		}

	}
	
	for (i = 0; i < f.Pre3.length; i++) {  //"color" es el nombre asignado a todos los checkbox
		if (f.Pre3[i].checked) {
			contestado[2] = true;
		}

	}
	
	for (i = 0; i < f.Pre4.length; i++) {  //"color" es el nombre asignado a todos los checkbox
		if (f.Pre4[i].checked) {
			contestado[3] = true;
		}

	}
	
	if (document.getElementById("P5R").value != ""){
		contestado[4] = true;
	}

	
	if (document.getElementById("P6R").value != ""){
		contestado[5] = true;
	}

	
	if( document.getElementById("P7R").selectedIndex > 0){
		contestado[6] = true;
	}
	
	if( document.getElementById("P8R").selectedIndex > 0){
		contestado[7] = true;
	}

	
	
	
	nopt = datosXml.getElementById("jdos_009").getElementsByTagName("options").length;
	
	
	for (i = 0; i < nopt; i++) {  //"color" es el nombre asignado a todos los checkbox
		if (document.getElementById("P9R"+i).selected) {
			contestado[8] = true;
		}

	}




	
	
	nopt = datosXml.getElementById("jdos_010").getElementsByTagName("options").length;
	
	
	for (i = 0; i < nopt; i++) {  //"color" es el nombre asignado a todos los checkbox
		if (document.getElementById("P10R"+i).selected) {
			contestado[9] = true;
		}

	}
	
	
	
	
	
	var posicion;
	var contador=0;
	for (i = 0; i < contestado.length; i++) {
		posicion = 0;
		if(!contestado[i]){
			posicion = i+1;
			alert("En este tes los errores no restan. Contesta la pregunta: "+posicion);
		
		}else{contador++;}
		
		
		
	
	
	}
	
	if(contador==10){corregi2();}
	
	
	
	
	
	
	
	
	
	
}



 



