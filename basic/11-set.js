// set

// Declaración

let mySet = new Set()

console.log(mySet)

// Inicialización

mySet = new Set(["Abraham", "Misael", "abrahamdev", 33, true, "aflorescastrejon@gmail.com"])

console.log(mySet)

// Métodos comunes

// add y delete

mySet.add("https://moure.dev")

console.log(mySet)

mySet.delete("https://moure.dev")

console.log(mySet)

console.log(mySet.delete("Abraham"))
console.log(mySet.delete(4))

console.log(mySet)

// has

console.log(mySet.has("Misael"))
console.log(mySet.has("Abraham"))

// size

console.log(mySet.size)

// Convertir un set a array

let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a set

mySet = new Set(myArray)
console.log(mySet)

// No admite duplicados

mySet.add("aflorescastrejon@gmail.com")
console.log(mySet)
