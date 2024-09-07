// 1. Concatena dos cadenas de texto
let name = "Misael"
let saludo = "Hola, " + name + "!"
console.log(saludo)
// 2. Muestra la longitud de una cadena de texto
console.log(saludo.length)
// 3. Muestra el primer y último carácter de un string
console.log(saludo[0])
console.log(saludo[12])
// 4. Convierte a mayúsculas y minúsculas un string
console.log(saludo.toUpperCase())
console.log(saludo.toLowerCase())
// 5. Crea una cadena de texto en varias líneas
let mensaje = `Hola este
es mi alias en tecnologia
AbrahamDev`
console.log(mensaje)
// 6. Interpola el valor de una variable en un string
let correo = "aflorescastrejon@gmail.com"
console.log(`Hola ${name}! Tu correo es ${correo}.`)
// 7. Reemplaza todos los espacios en blanco de un string por guiones
let saludoConGuiones = saludo.replace(/\s+/g, "-")
console.log(saludoConGuiones)
// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(saludo.indexOf("Misael"))
console.log(saludo.indexOf("Hola"))
console.log(saludo.indexOf("AbrahamDev"))
// 9. Comprueba si dos strings son iguales
let otroSaludo = "Hola, Misael!"
if(saludo == otroSaludo){
    console.log("Los saludos son iguales")
}else{
    console.log("Los strings son diferentes")
}
// 10. Comprueba si dos strings tienen la misma longitud
let string = "Hola, amigo"
if(saludo.length == string.length){
    console.log("Ambos strings tienen la misma longitud")
}else{
    console.log("Los strings tienen diferentes longitudes")
}