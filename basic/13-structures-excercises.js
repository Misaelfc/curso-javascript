// 1. Crea un array que almacene cinco animales
let myAnimals = ["perro", "gato", "pajaro", "puma", "vaca"]
console.log(myAnimals)

// 2. Añade dos más. Uno al principio y otro al final
myAnimals2 = new Array("caballo", "perro", "gato", "pajaro", "puma", "vaca", "leon")
console.log(myAnimals2)

// 3. Elimina el que se encuentra en tercera posición
myAnimals2.splice(2, 1)
console.log(myAnimals2)

// 4. Crea un set que almacene cinco libros
let mySet = new Set(["Hábitos atómicos", "Piense y hágase rico", "El método", "Models", "El monje que vendió su ferrari"])
console.log(mySet)

// 5. Añade dos más. Uno de ellos repetido
mySet.add("El alquimista")
mySet.add("El método")

console.log(mySet)

// 6. Elimina uno concreto a tu elección
mySet.delete("El método")
console.log(mySet)

// 7. Crea un mapa que asocie el número del mes a su nombre
let myMap = new Map()
console.log(myMap)

myMap = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
])
console.log(myMap)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(myMap.has(5))
console.log(myMap.values(5))
// 9. Añade al mapa una clave con un array que almacene los meses de verano
myMap.set("verano", ["Junio", "Julio", "Agosto"])
console.log(myMap)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
// Paso 1: Crear un array
let myArray = ["manzana", "pera", "manzana", "naranja", "pera"];

// Paso 2: Transformar el array en un Set (elimina duplicados)
mySet = new Set(myArray);

// Paso 3: Almacenar el Set en un Map
myMap = new Map();
myMap.set("frutas", mySet);

console.log(myMap);