function Mostrar()
{

/*var ingreso;

for (ingreso=prompt("Ingrese un numero");ingreso<1;ingreso-2)
{
	console.log(ingreso)
}*/

//ejercicio 6 parcial
/*
	var contadorDias=0;
	var precio;
	var precioMinimo;
	var precioMaximo;


while(contadorDias<24)
{
	precio=prompt('Ingrese el importe');
	precio=parseInt(precio);
	while(precio<0)
	{
		precio=prompt('Re ingrese el importe');
	}
	if(contadorDias==0)
	{
		precioMaximo=precio;
		precioMinimo=precio;
	}
	else
	{
		if(precio>precioMaximo)
		{
			precioMaximo=precio;
		}
		if(precio<precioMinimo)
		{
			precioMinimo=precio;
		}
	}

	contadorDias++;
}
document.write('Su importe maximo es '+precioMaximo);
document.write('Su importe minimo es '+precioMinimo);
*/

//Ejercicio 7 parcial
/*
var contador=0
var sexo
var nota
var notaAcumulada
var notaPromedio
var notaMinima
var cuentaDeVarones=0

while(contador<100)
{
	nota=parseInt(prompt('Ingrese la nota'));
	while(nota<0 || nota>10)
	{
		nota=parseInt(prompt('Re-ingrese la nota'));
	}
	sexo=prompt('Ingrese el sexo, F(femenino) o M(masculino)');
	while(sexo!='f' && sexo!='m')
	{
		sexo=prompt('Re-ingrese el sexo, F(femenino) o M(masculino)');
	}
	notaAcumulada=parseInt(notaAcumulada)+parseInt(nota);
	if(contador==0)
	{
		notaMinima=nota;
	}
		else
		{
			if(nota<notaMinima)
			{
				notaMinima=nota;
			}
		}
	if(nota>=6&&sexo=="m")
	{
		cuentaDeVarones++
	}

	contador++;
}
notaPromedio=notaAcumulada/100;
alert("La nota promedio es: "+notaPromedio);
alert("La nota mas baja es: "+notaMinima);
alert("La cantidad de varones con nota mayor o igual a 6 es: "+cuentaDeVarones);
*/

//Ejercicio 8 Parcial
var numero;
var contadorDeIngresos=1;
var numerosAcumulados;
var promedio;



numero=parseInt(prompt("Ingrese un numero positivo"));
while(numero<0)
{ 
	numero=parseInt(prompt("El numero debe ser positivo, re ingrese el numero:"));
}

respuesta=prompt("¿Desea ingresar un nuevo numero?")
if(respuesta=="si")
{
contadorDeIngresos++
numero=parseInt(prompt("Ingrese un numero positivo"));
while(numero<0)
{
	numero=parseInt(prompt("El numero debe ser positivo, re ingrese el numero:"));
}
}

numerosAcumulados=parseInt(numerosAcumulados)+parseInt(numero);



}//FIN DE LA FUNCIÓN