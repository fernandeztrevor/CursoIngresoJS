/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;
	precioUno=document.getElementById('PrecioUno').value;
	precioDos=document.getElementById('PrecioDos').value;
	precioTres=document.getElementById('PrecioTres').value;
	resultado= parseInt(precioUno)+ parseInt(precioDos)+ parseInt(precioTres);
	alert ("El precio final es "+resultado);
}
function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultadoSuma;
	var promedio;
	precioUno=document.getElementById('PrecioUno').value;
	precioDos=document.getElementById('PrecioDos').value;
	precioTres=document.getElementById('PrecioTres').value;
	resultadoSuma= parseInt(precioUno)+ parseInt(precioDos)+ parseInt(precioTres);
	promedio= resultadoSuma/3;
	alert ("El precio final es "+promedio);	
}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultadoSuma;
	var precioFinal;
	precioUno=document.getElementById('PrecioUno').value;
	precioDos=document.getElementById('PrecioDos').value;
	precioTres=document.getElementById('PrecioTres').value;
	resultadoSuma= parseInt(precioUno)+ parseInt(precioDos)+ parseInt(precioTres);
	precioFinal=resultadoSuma*1.21
	alert ("El precio final es "+precioFinal);
}