/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var largo
var ancho
var rectangular
 largo=document.getElementById('Largo').value;
 ancho=document.getElementById('Ancho').value;
rectangular=parseInt(largo*6)+parseInt(ancho*6);
 alert ("Usted necesita "+rectangular+"m de alambre");
}
function Circulo () 
{
var radio
var circular
 radio=document.getElementById('Radio').value;
circular=2*radio*3.14*3
 alert ("Usted necesita "+circular+"m de alambre");	
}
function Materiales () 
{
var largo
var ancho
var cemento
var cal
var superficie
largo=document.getElementById('Largo').value;
ancho=document.getElementById('Ancho').value;
cemento=2;
cal=3;
superficie=largo*ancho;
cantidadCemento=superficie*cemento;
cantidadCal=superficie*cal;
alert ("Usted necesita "+cantidadCemento+" bolsas de cemento y "+cantidadCal+"bolsas de cal.");
}