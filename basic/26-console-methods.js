// Console

//log

console.log("¡Hola JavaScript!")

//error

console.error("Este es un mensaje de error")
console.error("Error al conectarse con la base de datos: ", new Error("Conexión fallida"))

// warn

console.warn("Este es un mensaje de advertencia.")

// info

console.info("Este es un mensaje de información adicional.")

// table

let data = [
    ["Misael", 33],
    ["Tania", 29]
]

console.table(data)

data = [
    {name: "Misael", age: 33},
    {name: "Tania", age: 29}
    
]

console.table(data)

// group

console.group("Usuario")
console.log("Nombre: Misael")
console.log("Edad: 33")
console.groupEnd()

// time
console.time("Tiempo de ejecución 1")

for(let i = 0; i < 10000; i++){

}

console.time("Tiempo de ejecución 2")

for(let i = 0; i < 10000; i++){

}

console.timeEnd("Tiempo de ejecución 1")

for(let i = 0; i < 10000; i++){

}

console.timeEnd("Tiempo de ejecución 2")

for(let i = 0; i < 10000; i++){

}

// assert

let age = 17
console.assert(age >= 18, "El usuario debe ser mayor de edad")

// count

console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")
console.count("Click")

// trace

function funcA(){
    funcB()
}

function funcB(){
    console.trace("Seguimiento de la ejecución")
}

funcA()

// clear

//console.clear()