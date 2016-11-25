/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidad;
 	var precio;
 	var marca;
 	var precioLampara
 	cantidad=document.getElementById('Cantidad').value;
 	marca=document.getElementById('Marca').value;
 	precioLampara=35

 	if (cantidad>=6)
 	{
 		precio=parseInt(cantidad)*precioLampara*0.5;	
 	}

 	if (cantidad==5)
 	{
 		if (marca=="ArgentinaLuz") 
 		{
 		precio=parseInt(cantidad)*precioLampara*0.6;
 		}
 		else 
 			{
 				precio=parseInt(cantidad)*precioLampara*0.7;
 			}
 	}

 	if (cantidad==4) 
 	{
 		if (marca=="FelipeLamparas" | marca=="ArgentinaLuz") 
 		{
 		precio=parseInt(cantidad)*precioLampara*0.75;
 		}
 	 		else 
 			{
 				precio=parseInt(cantidad)*precioLampara*0.8;
 			}	
 	}

 	if (cantidad==3) 
 	{
 		if (marca=="ArgentinaLuz") 
 		{
 		precio=parseInt(cantidad)*precioLampara*0.85;
 		}
 		if (marca=="FelipeLamparas") 
 		{
 		precio=parseInt(cantidad)*precioLampara*0.9;
 		}
 			else
 			{
 				precio=parseInt(cantidad)*precioLampara*0.95;
 			}
 	}


document.getElementById('precioDescuento').value=precio;
var PrecioIIBB

if (precio>=120)
{
	PrecioIIBB=parseInt(precio)*1.10;
	alert("IIBB Usted pago " +PrecioIIBB)
}
}
