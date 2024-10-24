// 4. Importa una función
import { add, PI } from "./31-modules-excercises-exports.js";
import defaultImport from "./31-modules-excercises-exports.js"
console.log(add(5, 10))
// 5. Importa una constante
console.log(PI)
// 6. Importa una clase 
import Persona from "./31-modules-excercises-exports.js"

const persona1 = new Persona("Abraham", 33);
persona1.saludar();

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)
// Importar todo lo exportado
import{ velocidadLuz, suma } from './31-modules-excercises-exports.js';

console.log(velocidadLuz); // 3.14159
console.log(suma(2, 3)); // 5

// const circulo = new Circulo(5);
// console.log(circulo.area()); // Calcula el área del círculo

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior
import { saludar, PA, Circulo} from "./index/index.js";
console.log(saludar("Leandro"))
console.log(PA)
const miCirculo = new Circulo(5)
console.log(miCirculo.area) 