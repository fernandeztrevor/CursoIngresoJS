function Mostrar()
{
//tomo la edad  
var laEdad;
laEdad=document.getElementById('edad').value;
/*if (laEdad>=18) 
{
	alert("Usted es mayor de edad");
}
if (laEdad<13) 
{
alert("Usted es un niño");
}
if(laEdad<18 && laEdad>13)
 {
 	alert("Usted es adolescente");
 }
*/
if(laEdad<13)
	{
		alert("Usted es un niño")
	}
	else
	{
		if(laEdad>17){
			alert("Usted es mayor")}
				else
	{alert ("Usted es adolescente");}}

}
//FIN DE LA FUNCIÓN