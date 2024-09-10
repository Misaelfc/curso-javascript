// array

// Declaración

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

//Inicialización

myArray = [3]
myArray2 = new Array(3)
console.log(myArray)
console.log(myArray2)

myArray = ["Abraham", "Flores", "abrahamdev", 33, true]
myArray2 = new Array("Abraham", "Flores", "abrahamdev", 33, true)
console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[2] = "Abraham"
//myArray2[0] = "Flores"
myArray2[1] = "abrahamdev"
myArray2[4] = "abrahamdev"

console.log(myArray2)

myArray = []
myArray[2] = "Abraham"
//myArray[0] = "Flores"
myArray[1] = "abrahamdev"

console.log(myArray)

// Métodos comunes

myArray = []

//push y pop
myArray.push("Misael")
myArray.push("Abraham")
myArray.push("abrahamdev")
myArray.push(37)

console.log(myArray)

console.log(myArray.pop()) //Elimina el último y lo devuelve
myArray.pop()

console.log(myArray)

// shift y unshift

console.log(myArray.shift())
console.log(myArray)

myArray.unshift("Misael", "abrahamdev")
console.log(myArray)

//length

console.log(myArray.length)

// clear

//myArray = []
myArray.length = 0 // alternativa
console.log(myArray)

// slice

myArray = ["Abraham", "Flores", "abrahamdev", 37, true]

let myNweArray = myArray.slice(1, 3)

console.log(myArray)
console.log(myNweArray)

// splice

myArray.splice(1, 3)
console.log(myArray)

myArray = ["Abraham", "Flores", "abrahamdev", 37, true]

myArray.splice(1, 2, "Nuevo entrada")
console.log(myArray)
