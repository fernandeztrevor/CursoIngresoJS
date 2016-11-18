/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
	var unaVariable="datos";
	//var miNombre;
	var otraVariable="bla bla";
	//miNombre=document.getElementById('el id').value;
	console.log("primer mensaje");
	console.info("mensaje: ",unaVariable);
	var miNombre = document.getElementById('elNombre').value;
	var	miEdad = document.getElementById('laEdad').value;
	alert("usted se llama " +miNombre+ "y tiene " +miEdad+ " años.");
 console.info("linea final: ",otraVariable);
}

