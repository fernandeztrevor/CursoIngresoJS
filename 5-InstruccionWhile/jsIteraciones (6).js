function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numeroIngresado;
	/*var numeroUno = prompt("Ingrese el primer numero");
	var numeroDos = prompt("Ingrese el segundo numero");
	var numeroTres = prompt("Ingrese el tercer numero");
	var numeroCuatro = prompt("Ingrese el cuarto numero");
	var numeroCinco = prompt("Ingrese el quinto numero");*/

while(contador!=5)
{
	numeroIngresado= prompt("Ingrese un numero")
	acumulador=acumulador+parseInt(numeroIngresado)
	contador++
console.log(contador)
console.log(acumulador)
}




document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN