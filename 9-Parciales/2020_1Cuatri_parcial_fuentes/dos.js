function mostrar() {
  let tipo;
  let cantidad;
  let precio;
  let acumA = 0;
  let acumCal = 0;
  let acumCemento = 0;
  let precioMaxA =0;
  let precioMaxCal=0;
  let precioMaxCemento=0;
  let FlagA = 1; //Para saber si es la primera vez y asignar el Max
  let FlagCal = 1; //Para saber si es la primera vez y asignar el Max
  let FlagCemento = 1; //Para saber si es la primera vez y asignar el Max
  let masCaro; //comparo todos los precio max con el if y asigno aca
  let seguir;
  let maxTipo;
  let precioTotal = 0;
  let cantidadTotal = 0;
  let precioDescuento;

  do {
    tipo = prompt("ingrese un tipo de bolsa (arena, cal o cemento)");
    while (tipo != "arena" && tipo != "cal" && tipo != "cemento") {
      tipo = prompt(
        "Tipo invalido. ingrese un tipo de bolsa (arena, cal o cemento)"
      );
    }
    cantidad = parseInt(prompt("Ingrese cantidad"));

    precio = parseInt(prompt("ingrese un precio mayor a 0"));
    while (precio <= 0) {
      precio = parseInt(prompt("Error. el precio tiene que ser mayor a 0"));
    }
    seguir = prompt("desea seguir");

    if (tipo == "arena") {
      if (FlagA || precio > precioMaxA) {
        precioMaxA = precio;
        FlagA = 0;
      }
      acumA = acumA + cantidad;
    } else if (tipo == "cal") {
      if (FlagCal || precio > precioMaxCal) {
        precioMaxCal = precio;
        FlagCal = 0;
      }
      acumCal = acumCal + cantidad;
    } else {
      if (FlagCemento || precio > precioMaxCemento) {
        precioMaxCemento = precio;
        FlagCemento = 0;
      }
      acumCemento = acumCemento + cantidad;
    }

    cantidadTotal = cantidadTotal + cantidad;
    precioTotal = precioTotal + precio * cantidad;
  } while (seguir == "si");

  if (acumA > acumCal && acumA > acumCemento) {
    maxTipo = "Arena";
  } else if (acumCal >= acumA && acumCal > acumCemento) {
    maxTipo = "Cal";
  } else {
    maxTipo = "Cemento";
  }

  if (precioMaxA > precioMaxCal && precioMaxA > precioMaxCemento) {
    masCaro = "Arena";
  } else if (precioMaxCal >= precioMaxA && precioMaxCal > precioMaxCemento) {
    masCaro = "Cal";
  } else {
    masCaro = "Cemento";
  }
  if (cantidadTotal > 10 && cantidadTotal < 30) {
    precioDescuento = precioTotal * 0.85;
  } else if (cantidadTotal > 30) {
    precioDescuento = precioTotal * 0.75;
  }

  document.write(
    "el total de arena es de " +
      acumA +
      " , de cal, " +
      acumCal +
      " , y el de cemento, " +
      acumCemento +
      "<br>"
  );
  document.write("A - El precio total es de " + precioTotal + "<br>");
  document.write("B- El precio con descuento es  " + precioDescuento + "<br>");
  document.write("D - el tipo con mas bolsas es " + maxTipo + "<br>");
  document.write("F - El tipo mas caro es " + masCaro + "<br>");
}
//1)declarar las variables (tipo, cantidad , precio, acumuladores, precioMax,
//  precioTotal)
//2) Generar un bucle que repita hasta que el usuario quiera
//******* COSAS DEL BUCLE ***********
//
//3 ) Pedir ingreso de tipo
//3.1) valido el tipo
//4) pido cantidad
//5) pido precio
//5.1) valido precio, mayor a 0
//
//**********************
// **** COSAS RESPONDER PUNTO (A)***********
// Sumo todos los precios de todos los tipos
// en una variable precio total,
//
// importe total a pagar sin descuento

// **** COSAS RESPONDER PUNTO (B)***********
// al total que tengo del punto anterior.
// me fijo si el tipo cantidadde bolsas total,
// 1)supera las 10 bolsas hago un 15% de descuento
// 2)supera las 30 bolsas hago un 25% de descuento
// 3) si no supera 10 bolsas, no hago nada
// (((((if adentro de if )))))
// importe total a pagar con descuento si corresponde

// **** COSAS RESPONDER PUNTO (D)***********
//me fijo la cantidad de bolsas de cada tipo,
//si olo hay un tipo: muestro ese
//si hay mas tipos, comparo los acumuladores
//tomo el acumulador mayor
// tipo con mas cantidad de bolsas (acumMax)
//

//**** COSAS RESPONDER PUNTO (f)***********
//me fijo los precios de todos los tipos
//si solo hay un tipo, muestro ese, sino:
//comparo los precios
//tomo el precio mayor
//tipo mas caro(precio max)