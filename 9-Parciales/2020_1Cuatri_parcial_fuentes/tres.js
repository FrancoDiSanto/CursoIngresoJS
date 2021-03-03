function mostrar() {
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;
	let acumMayoresViudos = 0;
	let acumMSolteroOViudo = 0;
	let acumAbuelosConFiebre = 0;
	let contadorHombreSoltero = 0;
	let acumEdadHombreSoltero = 0;
	let promedioEdadHombreSoltero = 0;
	let personaConMasTemp;
	let FlagPersonaMasTemp = 1;
	let gradosMax;
  
	do {
	  nombre = prompt("ingrese su nombre");
	  edad = parseInt(prompt("ingrese su edad"));
	  while (isNaN(edad)) {
		edad = parseInt(prompt("Error. ingrese su edad en numeros"));
	  }
	  sexo = prompt("ingrese sexo (f o m )");
	  while (sexo != "f" && sexo != "m") {
		sexo = prompt("error, ingrese sexo (f o m) ");
	  }
	  estadoCivil = prompt("ingrese su estado civil");
	  while (
		estadoCivil != "soltero" &&
		estadoCivil != "viudo" &&
		estadoCivil != "casado"
	  ) {
		estadoCivil = prompt(
		  "Error, ingrese su estado civil (soltero, viudo o casado)"
		);
	  }
	  temperatura = parseInt(prompt("ingrese su temperatura en numeros"));
  
	  if (FlagPersonaMasTemp || temperatura > gradosMax) {
		//PUNTO A
		personaConMasTemp = nombre;
		gradosMax = temperatura;
		FlagPersonaMasTemp = 0;
	  }
  
	  if (edad > 18 && estadoCivil == "viudo") {
		//PUNTO B
		acumMayoresViudos++;
	  }
  
	  // parentesis asi da prioridad, o podria ser != casado
	  if (sexo == "m" && (estadoCivil == "soltero" || estadoCivil == "viudo")) {
		acumMSolteroOViudo++; // PUNTO C
	  }
  
	  if (edad > 60 && temperatura > 38) {
		//PUNTO D
		acumAbuelosConFiebre++;
	  }
	  if (sexo == "m" && estadoCivil == "soltero") {
		contadorHombreSoltero++;
		acumEdadHombreSoltero = acumEdadHombreSoltero + edad; // PUNTO E
	  }
  
	  seguir = prompt("desea ingresar mas pasajeros");
	} while (seguir == "si");
	promedioEdadHombreSoltero = acumEdadHombreSoltero / contadorHombreSoltero;
  
	document.write(
	  "A- La persona con mas temperatura es " +
		personaConMasTemp +
		" con " +
		gradosMax +
		" grados <br>"
	);
	document.write(
	  "B- Hay " + acumMayoresViudos + " mayores de edad viudos <br>"
	);
	document.write(
	  "C- Hay " + acumMSolteroOViudo + " hombres solteros o viudos <br>"
	);
	document.write(
	  "D- Hay " +
		acumAbuelosConFiebre +
		" personas de la tercera edad con mas de 38° <br>"
	);
	document.write(
	  "E- El promedio de edad de hombres solteros es de " +
		promedioEdadHombreSoltero +
		"<br>"
	);
	//PUNTO E
  }
  //1) Declarar variables(nombre, edad, sexo, estado civil, temperatura)
  //2) Genero bucle
  //*****************
  //3) pido ingreso nombre
  //4) ingreso edad
  //5)ingreso sexo
  //5.1)valido sexo (f o m)
  //6) ingreso estado civil
  //6.1) valido (soltero, viudo , casado)
  //7)ingreso  temperatura
  //
  // *******COSAS PARA RESPONDER PUNTO (A)*************
  //Persona con mas temperatura
  //
  // *******COSAS PARA RESPONDER PUNTO (B)*********
  //Mayores deedad viudos
  //acumulador mayoresViudos
  // adentro del bucle
  // if (edad > 18 y estadoCivil == "viudo")
  // *******COSAS PARA RESPONDER PUNTO (C)*********
  //Cantidad de hombres solteros o viudos
  //aum m , soltero o viudo
  // adentro del bucle
  // if (sexo == "m" y estadoCivil == soltero Y Estadocivil == "viudo")
  // si esto no funciona hago if dentro de if
  // *******COSAS PARA RESPONDER PUNTO (D)**********
  //personas de mas de 60, con mas 38 temp
  // if (edad > 60 y temp > 38)  ---------> adentro del bucle
  //acumulador de esto
  // ********  COSAS PARA RESPONDER PUNTO (E)*********
  // El promedio de edad entre los hombres solteros.
  // contador hombres solteros
  // acumulador edad hombres solteros
  //= promedio
  //
  //
  //