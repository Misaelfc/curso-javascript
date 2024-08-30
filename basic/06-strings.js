// Strings

// Concatenación
let myName = "Misael"
let greeting = "Hola, " + myName + "!"
console.log(greeting)
console.log(typeof greeting)

// Longitud
console.log(greeting.length)

// Acceso a caracteres
console.log(greeting[0])
console.log(greeting[12])

// Métodos comunes
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Misael"))
console.log(greeting.indexOf("Hola"))
console.log(greeting.indexOf("AbrahamDev"))
console.log(greeting.includes("AbrahamDev"))
console.log(greeting.includes("Misael"))
console.log(greeting.includes("Hola"))
console.log(greeting.slice(0,10))
console.log(greeting.replace("Misael", "AbrahamDev"))

// Template literals (plantillas literales)
let message = `Hola este 
es mi
curso de 
JavaScript`
console.log(message)

let email = "aflorescastrejon@gmail.com"

console.log(`Hola ${myName}! Tu email es ${email}.`)
