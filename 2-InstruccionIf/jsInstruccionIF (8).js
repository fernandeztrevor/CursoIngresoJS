function Mostrar()
{
//tomo la edad  
var laEdad;
var elEstadoCivil;
laEdad=document.getElementById('edad').value;
elEstadoCivil=document.getElementById('estadoCivil').value;
if (laEdad>18 && elEstadoCivil=='Soltero') 
{
	alert ("Es soltero y no es menor");
}
console.log ("No estoy haciendo nada");
}//FIN DE LA FUNCIÓN