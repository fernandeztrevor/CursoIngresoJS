function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';

	while(respuesta=="si")
{	numeroIngresado=prompt("Ingrese un numero");
	if(numeroIngresado<0)
	{
	negativo=negativo*numeroIngresado;
	}
	else
		{
		positivo=positivo+parseInt(numeroIngresado);
		}
		respuesta=prompt("desea continuar? Si o No");
	contador++;
	console.log(contador)
	console.log(positivo)
	console.log(negativo)
}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN