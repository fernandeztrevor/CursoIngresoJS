/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var uno = parseInt(document.getElementById('importe').value);
	var result = uno*0.75;	
	document.getElementById('resultado').value = result;
}
