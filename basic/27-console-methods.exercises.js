// 1. Crea un función que utilice error correctamente
function funcA(){
    console.error("Este es un mensaje de error")
}
funcA()
// 2. Crea una función que utilice warn correctamente
function funcB(){
    console.warn("Este es un mensaje de advertencia.")
}
funcB()
// 3. Crea una función que utilice info correctamente
function funcC(){
    console.info("Este es un mensaje de información adicional")
}
funcC()
// 4. Utiliza table
let data = [
    {name: "Misael", age: 33},
    {name: "Tania", age: 29}
]
console.table(data)
// 5. Utiliza group
console.group("Usuario")
console.log("Nombre: Misael")
console.log("Edad: 33")
console.groupEnd()

// 6. Utiliza time
console.time("Tiempo de ejecución 1")

for(let i = 0; i < 10000; i++){

}

console.timeEnd("Tiempo de ejecución 1")

for(let i = 0; i < 10000; i++){

}
// 7. Valida con assert si un número es positivo
let age = 18
console.assert(age >= 18, "El usuario debe ser mayor de edad")

// 8. Utiliza count
console.count("Click")
console.count("Click")
console.countReset("Click")
// 9. Utiliza trace
function funcD(){
    funcE()
}

function funcE(){
    console.trace("Seguimiento de la ejecución")
}

funcD()
// 10. Utiliza clear
// console.clear()