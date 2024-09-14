// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let myName = "Misael"
if(myName == "Misael"){
    console.log("Mi nombre es Misael")
}
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let user = "abrahamdev"
let password = 2691
let inputPassword = 2691
if(user == myName && password == inputPassword){
    console.log("Usuario y contraseñas correctos")
}else{
    console.log("Nombre de usuario y contraseña son incorrectos")
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let number = 10
if(number > 0){
    console.log("El número es positivo")
}else if(number < 0){
    console.log("El número es negativo")
}else{
    console.log("El número es cero")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let myAge = 14
let myVote = 18
if(myAge >= myVote){
    console.log("Puedes votar")
}else{
    let añosParaVotar = myVote - myAge;
    console.log(`No puedes votar. Te faltan ${añosParaVotar} años para votar. `)
}
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
const message = myAge >= 18 ? "Eres un adulto" : "Eres un menor de edad"
console.log(message)
// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = "Septiembre"
if(mes === "Diciembre" || mes === "Enero" || mes === "Febrero"){
    console.log("Estamos en invierno")
}else if(mes === "Marzo" || mes === "Abril" || mes === "Mayo"){
    console.log("Estamos en primavera")
}else if(mes === "Junio" || mes === "Julio" || mes === "Agosto"){
    console.log("Estamos en verano")
}else if(mes === "Septiembre" || mes === "Octubre" || mes === "Noviembre"){
    console.log("Estamos en otoño")
}else{
    console.log("Mes no valido")
}
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch
let numeroDeDias
mes = "Enero"
switch(mes){
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
        numeroDeDias = 31
        break
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
        numeroDeDias = 30
        break
    case "Febrero":
        console.log(`${mes} tiene 28 días, y 29 en año bisiesto`);
        break
    default:
        numeroDeDias = "No valido"
}
console.log(numeroDeDias)
// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "Francés"
let saludo
switch(idioma){
    case "Español":
        saludo = "Hola"
        break  
    case "Inglés":
        saludo = "Hello"
        break
    case "Francés":
        saludo = "Bonjour"
        break
    case "Italiano":
        saludo = "Bonjorno"
        break
    default:
        saludo = "Idioma no reconocido"
}   
console.log(saludo)

// 9. Usa un switch para hacer de nuevo el ejercicio 6
mes = "Febrero"
let estacion

switch(mes){
    case "Diciembre":
    case "Enero":
    case "Febrero":
        estacion = "Invierno"
        break
    case "Marzo":
    case "Abril":
    case "Mayo":
        estacion = "Primavera"
        break
    case "Junio":
    case "Julio":
    case "Agosto":
        estacion = "Verano"
        break
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
        estacion = "Otoño"
        break
    default:
        estacion = "Estación del mes incorrecta"
}       
console.log(estacion)
// 10. Usa un switch para hacer de nuevo el ejercicio 7
numeroDeDias
mes = "Febrero"
let año = 2024
switch(mes){
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
        numeroDeDias = 31
        break
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
        numeroDeDias = 30
        break
    case "Febrero":
        numeroDeDias = new Date(año, 1, 29).getDate() === 29 ? 29 : 28
        break
    default:
        numeroDeDias = "No valido"
}
console.log(`El mes de ${mes} tiene ${numeroDeDias} días`)