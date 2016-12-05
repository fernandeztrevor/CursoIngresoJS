function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	
	
while(respuesta=="si")
{
	numeroIngresado=prompt("Ingrese un numero");
	acumulador=acumulador+parseInt(numeroIngresado);
	respuesta=prompt("desea continuar? Si o No");
	contador++;
	console.log(contador)
	console.log(acumulador)
}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN