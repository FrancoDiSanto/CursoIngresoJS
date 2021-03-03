function mostrar()
{
	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let acumB = 0;
	let acumJ =0;
	let acumA =0 ;
	let contB =0;
	let contJ=0;
	let contA=0;
	let precioMin;      // tienen que ver con el alcohol
	let fabricanteMin;// tienen que ver con el alcohol
	let cantidadMin;// tienen que ver con el alcohol
	let FlagAlcohol=1;
	let promedio;// uno aolo porque pide el de mayor cont
	let maxTipo;


	for(let i =0; i<5; i++){
		tipo = prompt("ingrese tipo: barbijo/ alcohol / jabon : ");
		while(tipo!= "barbijo" && tipo != "jabon" && tipo != "alcohol"){

			tipo = prompt("Tipo inválido. ingrese tipo, barbijo, alcohol, jabón");
			
		}
	
	precio= parseInt(prompt("ingrese precio entre 100 y 300 "));
	while(precio < 100 || precio> 300 || isNaN(precio)) {
		precio= parseInt(prompt("Error. ingrese un precio entre 100 y 300"));
	}

	cantidad = parseInt(prompt("Ingrese una cantidad positiva hasta 1000"))
	while (cantidad <= 0 || cantidad > 1000 || isNaN(cantidad)){
		cantidad= parseInt(prompt("Error. Ingrese una cantidad positiva hasta 1000"));
	}
	marca = prompt("ingrese marca");
	fabricante = prompt("ingrese fabricante");
	//Aca termine de ingresar los datos del producto

	if(tipo == "alcohol"){
		//lo que hay que hacer con los alcoholes
		if (FlagAlcohol || precio < precioMin){
			precioMin = precio;
			fabricanteMin = fabricante;
			cantidadMin = cantidad;
			FlagAlcohol = 0;
		}
		acumA = acumA + cantidad //unidades
		contA++; //cantidad de veces

	}
	//aca todo lo ue se relaciona con barbijo
	else if(tipo == "barbijo"){
		acumB = acumB + cantidad;
		contB++;

}
//aca todo lo que se relaciona con jabon
else{
	acumJ = acumJ + cantidad;
	contJ++;

	 }
	}
	
	
	
	
if (acumA > acumB && acumA > acumJ){
	promedio = acumA / contA ;
	maxTipo = "Alcohol";
}else if(acumB >= acumA && acumB > acumJ){
	promedio = acumB / contB ;
	maxTipo = "Barbijo";
}else {
	promedio = acumJ / contJ;
	maxTipo = "Jabon";

}
if (FlagAlcohol){
	document.write("a- No se compraron alcoholes. <br>");
}else{
	document.write(" a- El alcohol mas barato vale, $" + precioMin + " fab " + fabricanteMin + " cant " + cantidadMin + "<br>");

}
document.write("b- El tipo con mas unidades es "+ (maxTipo) + " y el promedio de compra es de " + (promedio) + "<br>" );
document.write("c- Se compraron " + (acumJ) + " jabones <br>");
}





//	 1) Declarar variables( tipo, precio, cantidad, marca , fabricante
//	acum barbijos, acum alcohol, acum jabones, acum cant de compras de cada 
//	tipo [para sacar promedio] , *flag y contadores**  )
//	2) Generar un bucle que itere 5 veces (cont iteraciones???)
//	--------------- aca van las tareas que tengo que hacer en cada iteración--------
//		3) pido el tipo de producto 
//		3.1) valido el tipo (alc, barb, jabon)
//		4 ) pido el precio
//		4.1) valido el precio
//		5) pido cantidad
//		5.1) valido cantidad
//		6) pido marca 
//		7) pido fabricante
//
//	*******COSAS PARA RESPONDER PUNTO (A)********
//	me fijo si el producto es de tipo alcohol
//	si lo es, si es el primer alcohol o no
//	si lo es, guardo el precio, guardo el fabricante y cantidad
//	si no es el primero, COMPARO precio con el del minimo que ya tengo
//	si el precio es menor que el que ya tenia, actualizo precios (sobreescrbo p,m,c,f)
//	****************
//
//	** COSAS QUE TENGO QUE HACER PARA EL PUNTO (B)********
//	actualizo el acumulador (cantidad productos) que corresónda al tipo
//	incremento el contador (cantidad de compras) que corresponda al tipo
//**************************
//
//******** COSAS PARA EL PUNTO (C)*************
//Ya lo tengo en el punto anterior con el acumulador ed jabones
//**************************
//
//una vez que termine el bucle hago lo siguiente
//(A) Muestro lo que hay en las variables precio minimo / fabricante minimo y 
//cantidad minimo
//(B) me fijo cualm es el mayo acumuladr y de ese tipo muestro el promedio (/) cantidad
//(C) muestro el acumulador de jabones
