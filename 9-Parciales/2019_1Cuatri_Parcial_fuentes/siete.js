function mostrar()
//Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros(validar entre 0 y 250) , el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet, informar por alert:
//a) El promedio de las alturas totales.
//b) La altura más baja y el sexo de esa persona.
//c) La cantidad de muheres que su altura supere los 190 centimetros.
{
let altura;
let sexo;
let acumuladorAltura=0;
let contadorJugadores=0;
let alturaMasBaja=0;
let contadoraMujeresAltas=0;
let FlagAlturamin =1;
let sexoDelMasBajo;
let promedioAlturasTotales=0;

for(let i = 0 ; i<5; i++){
altura = parseInt(prompt("ingrese su altura"));
while(altura <0 || altura > 250) {
    altura =parseInt(prompt("ingrese una altura entre 0 y 250 cm"));
}
sexo = prompt("ingrese su sexo");
while(sexo != "m" && sexo != "f"){
    sexo = prompt("ingrese un sexo (f o m)");
}

contadorJugadores++;                            //punto A  
acumuladorAltura =acumuladorAltura + altura  //punto A 
if(altura > 190 && sexo =="f"){ //punto C 
    contadoraMujeresAltas++;    //punto C
}

if(FlagAlturamin || altura < alturaMasBaja){//punto B
    alturaMasBaja = altura;//punto B
    sexoDelMasBajo = sexo;//punto B
    FlagAlturamin=0;
}

}
promedioAlturasTotales = acumuladorAltura / contadorJugadores

document.write("A- El promedio de las alturas totales es de " + promedioAlturasTotales + "<br>");
document.write("B- La altura mas baja es de " + alturaMasBaja + " y su sexo es " + sexoDelMasBajo + "<br>");
document.write("C- La cantidad de mujeres que supera los 190cm es de " + contadoraMujeresAltas + "<br>");
}
