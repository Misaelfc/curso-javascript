// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function sum(a,b){
    console.log(a + b)
}
sum(7, 9)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function obtenerMayorNumero(array){
    if(array.length === 0){
        return undefined
    }
    let numeroMayor = array[0]
    for(let i = 0; i <array.length; i++){
        if(array[i] > numeroMayor)
            numeroMayor = array[i]
    }
    return numeroMayor
}
const numeros = [5, 15, 77, 90, 21]
console.log(obtenerMayorNumero(numeros))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function contarVocales(cadena){
    let vocales = "aeiou"
    let contador = 0

    for(let letra of cadena){
        if(vocales.includes(letra)){
            contador++
        }
    }
    return contador
}
const texto = "Parangarecutirimicuaro"
console.log(contarVocales(texto))

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
function mayusculas(arr){
    let resultado = []

    for(let str of arr){
        resultado.push(str.toUpperCase())
    }
    return resultado
}
const frase = "Misael sera un developer excepcional"
console.log(mayusculas(frase))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function primo(numero){
    if(numero <= 1){
        return false
    }
    if(numero === 2){
        return true
    }
    if(numero % 2 === 0){
        return false
    }
    for(let i = 3; i <= numero / 2; i += 2){
        if(numero % i === 0){
            return false
        }
    }
    return true
}
console.log(primo(17))
console.log(primo(99))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
function elementos(arr1, arr2){
    let resultado = []
    for(let elemento of arr1){
        if(arr2.includes(elemento)){
            resultado.push(elemento)
        }
    }
    return resultado
}
const array1 = [1, 2, 3, 4, 5]
const array2 = [4, 5, 7, 9, 72]
console.log(elementos(array1, array2))
// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function sumaDeNumerosPares(arr){
    let suma = 0
    for(let numero of arr){
        if(numero % 2 === 0){
            suma += numero
        }
    }
    return suma
}
const numbers = [1, 3, 6, 9, 12, 24, 30]
console.log(sumaDeNumerosPares(numbers))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function numeroElevadoAlCuadrado(arr){
    let resultado = []
    for(let numero of arr){
        resultado.push(arr[numero] * arr[numero])
    }
    return resultado
}
let arreglo = [1, 2, 3, 4, 5]
let cuadrados = numeroElevadoAlCuadrado(arreglo)
console.log(cuadrados)
// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function invertirPalabras(cadena){
    let palabras = cadena.split(" ")
    let resultado = ""
    for(let i = palabras.length -1; i >= 0; i--){
        resultado += palabras[i]
        if(i > 0){
            resultado += " "
        }
    }
    return resultado
}
let text = "Hola mundo desde JavaScript"
let textoInvertido = invertirPalabras(text)
console.log(textoInvertido)
// 10. Crea una función que calcule el factorial de un número dado
function factorial(numero){
    let resultado= 1
    for(let i = 2; i <= numero; i++){
        resultado *= i
    }
    return resultado
}
let num = 5
let resultadoFactorial = factorial(num)
console.log(resultadoFactorial)