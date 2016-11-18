/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperatura;
	var aCentigrados;
	temperatura=document.getElementById('Temperatura').value;
	aCentigrados=parseInt(temperatura)-32
	alert (temperatura+"° Fahrenheit son "+aCentigrados+"° Centígrados");
}

function CentigradosFahrenheit () 
{
var temperatura;
var aFarenheit;
temperatura=document.getElementById('Temperatura').value;
aFahrenheit=parseInt(temperatura)+32
alert (temperatura+"° Centígrados son "+aFahrenheit+"° Fahrenheit");
}
