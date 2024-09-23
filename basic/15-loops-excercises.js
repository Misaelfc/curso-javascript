// 1. Crea un bucle que imprima los números del 1 al 20
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
for(let i = 0; i < numbers.length; i++){
    console.log(`${numbers[i]}`)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma = 0
for(let i = 0; i <= 100; i++){
    suma += i
}
console.log(suma)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for(let i = 0; i <= 50; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
miArreglo = ["Abraham", "Misael", "Dante", "Leandro", "Lucio", "Draco", "Andre"]
for(let valor of miArreglo){
    console.log(valor)
}
for(let i = 0; i < miArreglo.length; i++){
    console.log(miArreglo[i])
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let cadena = "JavaScript es el mejor lenguaje"
let vocales = "aeiou"
let contador = 0
for(let i = 0; i < cadena.length; i++){
    if(vocales.includes(cadena[i])){
        contador++
    }
}
console.log("Número de vocales " + contador)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let resultado = 1
for(let i = 0; i < myArray.length; i++){
    resultado *= myArray[i]
}
console.log(resultado)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
for(let i = 0; i <= 10; i++){
    console.log("5 x " + i + " = " + (5 * i))
}
// 8. Usa un bucle para invertir una cadena de texto
let texto = "Hola, como estás?"
let textoInvertido = ""
// Usar un bucle para recorrer la cadena desde el último carácter hasta el primero
for(let i = texto.length - 1; i >= 0; i--){
    textoInvertido += texto[i]
}
console.log(textoInvertido)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let fibonacci = [0, 1]
// Usar un bucle para generar los siguientes 8 números
for(let i = 2; i < 10; i++){
    fibonacci[i] = fibonacci [i -1] + fibonacci[i -2]
}
console.log(fibonacci)

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let numeros = [5, 20, 45, 69, 82, 10]
let mayoresA10 = []

// Usar un bucle para recorrer el array y seleccionar los números mayores a 10
for(let i = 0; i < numeros.length; i++){
    if((numeros[i]) > 10){
        mayoresA10.push(numeros[i]) // Agregar el número al nuevo array si es mayor a 10
    }
}
console.log(mayoresA10)