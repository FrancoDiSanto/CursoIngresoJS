function mostrar()
//Bienvenidos.
//Realizar el algoritmo que permita iterar el ingreso de dos datos,
//una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera
// e informar al terminar el ingreso por document.write:
//a) La cantidad de números pares.
//b) La cantidad de números impares.
//c) La cantidad de ceros.
//d) El promedio de todos los números positivos ingresados.
//e) La suma de todos los números negativos.
//f) El número y la letra del máximo y el mínimo.

{
    let letra;
    let numero;
    let contadorNumerosPares =0;
    let contadorNumerosImpares=0;
    let contadorDeCeros=0;
    let contadorPositivos=0;
    let totalPositivos =0;
    let promedioPositivos=0;
    let sumaNegativos=0;
    let maximo;
    let minimo;
    let letraMaximo;
    let letraMinimo;
    let FlagMaximo=1;
    let FlagMinimo=1;
    let seguir;
    do{
        letra = prompt("ingrese una letra");
        numero = parseInt(prompt("ingrese un numero entre -100 y 100"));
        while(numero < -100 || numero > 100){
            numero = parseInt(prompt("Error. Ingrese un numero entre -100 y 100"));
        }

        if(numero % 2 == 0){
            contadorNumerosPares++;            
}else{contadorNumerosImpares++;
}
if(numero > 0 ){
    contadorPositivos++;
    totalPositivos = totalPositivos + numero;
}else{
    sumaNegativos = sumaNegativos + (numero)
}
if(numero==0){
    contadorDeCeros++;

}
if(FlagMaximo || numero> maximo){
    maximo= numero;
    letraMaximo = letra;
    FlagMaximo =0;
}
if(FlagMinimo||numero< minimo){
minimo = numero
letraMinimo = letra;
FlagMinimo =0;
}



        seguir= prompt("desea seguir?");
    }while(seguir =="si")
 promedioPositivos = (totalPositivos / contadorPositivos);

document.write("A- La cantidad de numeros pares es de " + contadorNumerosPares + "<br>");
document.write("B- La cantidad de numero impares es de " +contadorNumerosImpares +"<br>" );
document.write("C- La cantidad de ceros es de " +contadorDeCeros +"<br>" );
document.write("D- El promedio de positivos ingresados es de " + promedioPositivos + "<br>");
document.write("E- La suma de los negativos es de " + sumaNegativos + "<br>");
document.write("F- El numero maximo es " + maximo + "y su letra es " + letraMaximo + " y el numero minimo es " + minimo + "y su letra es " + letraMinimo + "<br>");







}
