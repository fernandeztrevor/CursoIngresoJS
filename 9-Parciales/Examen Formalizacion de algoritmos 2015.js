function Perimetro()
{
	var lado
	var	perimetro
	lado=document.getelementbyId('Lado').value;
	perimetro=lado*4;
	alert ("El perimetro del cuadrado es "+perimetro);
}

function importeFinal
{
	var importe;
	var importeFinal;
	importe=parseInt(prompt("Ingrese el importe "));
	importeFinal=importe*1.21;
	alert ("El importe final del producto es "+importeFinal);
}

function cantidadDeAlambre
{
	var largo
	var ancho
	var perimetro
	var cantidad
	largo=document.getelementbyId('Largo').value;
	ancho=document.getelementbyId('Ancho').value;
	perimetro=parseInt(largo*2)+parseInt(ancho*2);
	cantidad=perimetro*3;
	alert ("Usted necesita "+cantidad+"m de alambre");

}