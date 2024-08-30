// 1. Crea una variable para cada operación aritmética
let a = 7
let b = 9
// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
console.log(a + b) //Suma
console.log(a - b) //Resta
console.log(a * b) //Multiplicación
console.log(a / b) //División
console.log(a % b) //Módulo
console.log(a ** b) //Exponente
// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación
console.log(a == a)
console.log(a < b)
console.log(a <= b)
console.log(a === a)
console.log(a == 7)
// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(a > b)
console.log(a >= b)
console.log(a == b)
console.log(a === b)
console.log(a != 7)

// 5. Utiliza el operador lógico and
console.log(7 > 9 && 10 > 20)
console.log(7 < 9 && 10 < 20)
console.log(7 > 9 && 10 < 20)
console.log(7 < 9 && 10 > 20)

// 6. Utiliza el operador lógico or
console.log(7 > 9 || 10 > 20)
console.log(7 < 9 || 10 < 20)
console.log(7 > 9 || 10 < 20)
console.log(7 < 9 || 10 > 20)

// 7. Combina ambos operadores lógicos
console.log(7 < 9 && 10 > 20 || 15 > 25)
console.log(7 < 9 && 10 > 20 || 15 < 25)
// 8. Añade alguna negación
console.log(!(7 > 9 && 10 > 20))
console.log(!(7 > 9 || 10 > 20))
// 9. Utiliza el operador ternario
const amIStuding = true
amIStuding ? console.log("Estoy estudiando") : console.log("No estoy estudiando") 
// 10. Combina operadores aritméticos, de comparáción y lógicas
let resultado = (a + b > 15) && (a * b < 100) || (b - a == 2)
console.log(resultado)