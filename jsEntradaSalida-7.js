/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var uno = parseInt (document.getElementById('numeroUno').value);
	var dos = parseInt (document.getElementById('numeroDos').value);
	var resultadoSuma = uno + dos;
	alert ("la suma es " +resultadoSuma)
}

function restar()
{
	var uno = parseInt (document.getElementById('numeroUno').value);
	var dos = parseInt (document.getElementById('numeroDos').value);
	var resultadoResta = uno - dos;
	alert ("la resta es " +resultadoResta);
}	

function multiplicar()
{ 
	var uno = parseInt (document.getElementById('numeroUno').value);
	var dos = parseInt (document.getElementById('numeroDos').value);
	var resultadoMultiplica = uno * dos;
	alert ("la multiplicación es " +resultadoMultiplica);	
}

function dividir()
{
	var uno = parseInt (document.getElementById('numeroUno').value);
	var dos = parseInt (document.getElementById('numeroDos').value);
	var resultadoDivide = uno / dos;
	alert ("la división es " +resultadoDivide);	
}

