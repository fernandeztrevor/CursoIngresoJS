function Mostrar()
{

	var contador=0;
	var numeroMax=0;
	var numeroMin=0;
	var numeroIngresado;
	var respuesta='si';

	while(respuesta!='no')
	{
		numeroIngresado=parseInt(prompt("Ingrese un numero"))
		if(contador==1)
		{
			numeroMax=numeroIngresado
			numeroMin=numeroIngresado
		}
		else
			{
			if(numeroIngresado>numeroMax)
			{
				numeroMax=numeroIngresado;
			}
			if(numeroIngresado<numeroMin)
			{
				numeroMin=numeroIngresado
			}
		}
	respuesta=prompt("Desea ingresar otro numero?")
	contador++
	console.log(contador);
	console.log(numeroMax);
	console.log(numeroMin);
	}
document.getElementById('maximo').value=numeroMax
document.getElementById('minimo').value=numeroMin





}//FIN DE LA FUNCIÓN