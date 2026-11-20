// let a, b;

//a = 20;
//b = 30;

//console.log(a == b); // true
//console.log(a < b); // true
//console.log(a > b); // false

//let pais, edad;
//pais = prompt("¿De que pais eres?")
//edad = prompt("¿Que edad tienes?")


//if (pais == "colombia" && edad >= 18){
// document.writeln("eres ciudadano del pais del ", pais);

//}else {
//document.writeln("No eres ciudadano del pais de colombia o mo eres mayor de edad");
//}

let day, month, year;
day = prompt("Ingrese el dia (1-31)");
month = prompt("Ingrese el mes (1-12)");
year = prompt("Ingrese el año (Por ejemplo 2023:)");

// Convertir los vaores ingresados en numeros 
day = parseInt(day);
day = parseInt(mes);
day = parseInt(year);

// Validar si el dia, mes, año son iguales
if (isNaN(day)){
  document.writeln("ingrese solo numeros")

}else if(month == 1 || month == 2 || month == 3){
  document.writeln(" Pertenece al primer trimestre de año")

}else {
  document.writeln("No Pertenece al primer trimestre de año ")

}
