// 1. Exporta una función
export function add(a, b){
    return a + b
}

console.log(add(5, 10))
// 2. Exporta una constante
export const PI = 3.1416

// 3. Exporta una clase
// Definir la clase
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
    }
}

// Exportar la clase
export default Persona;


// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)
// Definir una constante
export const velocidadLuz = 299792458; // en metros por segundo

// Definir una función
export function suma(a, b) {
    return a + b;
}

// Definir una clase (que se exportará por defecto)
// class Circulo {
//     constructor(radio) {
//         this.radio = radio;
//     }

//     // Método para calcular el área del círculo
//     area() {
//         return PI * this.radio * this.radio;
//     }
// }

// Exportar la clase por defecto
// export default Circulo;


// 9. Exporta una función, una constante y una clase desde una carpeta
// index.js

// Exportar todo desde la carpeta index
export { saludar } from './index/index.js';
export { PA } from './index/index.js';
export { Circulo } from './index/index.js';
