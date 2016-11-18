/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

	var porcentaje
	var precio
	var aumento

	precio=document.getElementById('sueldo').value;
	aumento=precio*1.10;
	document.getElementById('resultado').value=aumento;
}
