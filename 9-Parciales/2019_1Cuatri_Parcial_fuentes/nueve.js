function mostrar()
//Realizar el algoritmo que permita ingresar el nombre de un país,
// cantidad de habitantes en millones entre 1 y 7000 (validar)
//la temperaruta mínima que se registra en su territorio(entre -50 y 50)
 //hasta que el usuario quiera 
 //e informar al terminar el ingreso por document.write:
//a) La cantidad de temperaturas pares.
//b) El nombre del pais con menos habitantes
//c) la cantidad de paises que superan los 40 grados.
//d) el promedio de habitantes entre los paises ingresados
//f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.

{
    let pais;
    let habitantes;
    let temperatura;
    let contadorTempPares=0;
    let PaisConMenosHabitantes;
    let cantMinHabitantesPais;
    let contadorPaisesCalurosos=0;
    let contadorPaises=0;
    let acumuladorHabitantes=0;
    let promedioHabitantes;
    let paisMasFrio;
    let tempPaisMasFrio;
    let FlagTempminima =1;
    let FlagMinHabitantes =1;
    let seguir;


    do{
        pais = prompt("Ingrese el nombre de un país");
        habitantes = parseInt(prompt("ingrese la cantidad de habitantes entre 1 y 7000 (xMilón)"));
        while(habitantes< 1 || habitantes > 7000 ){
            habitantes = parseInt(prompt("ingrese habitantes entre 1 y 7000"));
        }
        temperatura = parseInt(prompt("ingrese la temperatura minima de su territorio entre -50 y 50"));
        while (temperatura < -50 || temperatura > 50){
            temperatura = parseInt(prompt("Error. ingrese temp entre -50 y 50"));
        }

        
        if(temperatura % 2 ==0){
            contadorTempPares++;
        }
        if(FlagMinHabitantes || habitantes < cantMinHabitantesPais ){
            cantMinHabitantesPais = habitantes;
            PaisConMenosHabitantes = pais;
            FlagMinHabitantes =0;
        }
        if (temperatura > 40){
            contadorPaisesCalurosos++;
        }
        if(FlagTempminima || temperatura < tempPaisMasFrio){
            tempPaisMasFrio = temperatura;
            paisMasFrio = pais;
            FlagTempminima =0;
        }
            
acumuladorHabitantes = (acumuladorHabitantes + habitantes);
contadorPaises++;
       seguir= prompt("desea seguir?");
    }while(seguir=="si");
promedioHabitantes = (acumuladorHabitantes / contadorPaises)


document.write("A- La cantidad de temperaturas pares es de " + contadorTempPares + "<br>");
document.write("B- El pais con menos habitantes es " + PaisConMenosHabitantes + " con "+ cantMinHabitantesPais + " habitantes <br>");
document.write("C- La cantida de paises que superan los 40 grados es de " + contadorPaisesCalurosos + "<br>");
document.write("D- El promedio total de habitantes es de " + promedioHabitantes + "<br>");
document.write("F- La temperatura minima es de " + tempPaisMasFrio + " y es en territorio de " + paisMasFrio + "<br>");





}
