function Mostrar()
{
	var contador;
	contador=0;
	document.write("<h1>Hola</h1>");

	//alert('iteración while');
	while (contador<10)
	{
		contador++;
		console.log(contador);
		document.write( "<br>Contador: "+contador);
	}
	console.log("<p> Fin </p>");

}//FIN DE LA FUNCIÓN