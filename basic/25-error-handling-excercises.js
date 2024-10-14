// 1. Captura una excepción utilizando try-catch
let myThing

try{
    // Código que intenta ejecutar
    console.log(myThing.email)
    console.log("Finaliza la acción sin errores")   
}catch{
    //Bloque de error
    console.log("Se ha producido un error")
}

// 2. Captura una excepción utilizando try-catch y finally
try{
    console.log(myThing.email)
}catch(error) {
    console.log("Se ha producido un error:", error.message)
}finally {
    console.log("Este error se ejecuta siempre")
}
// 3. Lanza una excepción genérica
try {
    // Código que puede lanzar una excepción
    let resultado = 10 / 0;
    console.log(resultado);
} catch (error) {
    // Captura la excepción genérica
    console.error('Ocurrió un error:', error);
}
// 4. Crea una excepción personalizada
class MiExcepcionPersonalizada extends Error {
    constructor(mensaje){
        super(mensaje)
        this.name = MiExcepcionPersonalizada
    }
}
// Uso de la excepción personalizada
try{
    throw new MiExcepcionPersonalizada ("Este es un error personalizado")
}catch(error){
    console.log(`${error.name}: ${error.message}`)
}
// 5. Lanza una excepción personalizada
// Definición de la excepción personalizada
class ExcepcionPersonalizada extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "ExcepcionPersonalizada";  // Nombre de la excepción
    }
}

// Función que lanza una excepción personalizada
function realizarOperacionPeligrosa(valor) {
    if (valor < 0) {
        // Lanzar la excepción personalizada si la condición no se cumple
        throw new ExcepcionPersonalizada("El valor no puede ser negativo");
    }
    console.log("Operación realizada con éxito:", valor);
}

// Uso de la función que puede lanzar la excepción personalizada
try {
    realizarOperacionPeligrosa(-5);  // Esto lanzará la excepción personalizada
} catch (error) {
    console.error(`${error.name}: ${error.message}`);
}
// 6. Lanza varias excepciones según una lógica definida
// Excepción personalizada para suma con cero
class SumZeroIntegerError extends Error {
    constructor(message, a, b) {
        super(message);
        this.name = "SumZeroIntegerError";
        this.a = a;
        this.b = b;
    }
    printNumbers() {
        console.log(`${this.a} + ${this.b}`);
    }
}

// Excepción personalizada para números negativos
class NegativeIntegerError extends Error {
    constructor(message, a, b) {
        super(message);
        this.name = "NegativeIntegerError";
        this.a = a;
        this.b = b;
    }
    printNumbers() {
        console.log(`${this.a} + ${this.b}`);
    }
}

// Función que lanza diferentes excepciones según la lógica
function sumIntegers(a, b) {
    if (a === 0 || b === 0) {
        throw new SumZeroIntegerError("No se permite sumar con cero", a, b);
    } else if (a < 0 || b < 0) {
        throw new NegativeIntegerError("No se permite sumar números negativos", a, b);
    }
    return a + b;
}

// 7. Captura varias excepciones en un mismo try-catch
// Uso de la función con manejo de múltiples excepciones
try {
    console.log(sumIntegers(-5, 10));  // Esto lanzará la excepción de números negativos
} catch (error) {
    console.log("Se ha producido un error:", error.message);

    // Verificar si es una excepción personalizada y mostrar más información
    if (error instanceof SumZeroIntegerError || error instanceof NegativeIntegerError) {
        error.printNumbers();
    }
}
// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

// Array de valores mixtos (números, cadenas, etc.)
const valores = ["3.14", "42", "NaN", "Hola", true, undefined, null, "1e4"];

// Bucle que intenta convertir cada valor a un número flotante
for (let i = 0; i < valores.length; i++) {
    try {
        // Intentar convertir el valor a número
        let valorConvertido = parseFloat(valores[i]);
        
        // Comprobar si el resultado es NaN (no es un número válido)
        if (isNaN(valorConvertido)) {
            throw new Error(`No se pudo convertir '${valores[i]}' a un número`);
        }

        console.log(`El valor '${valores[i]}' se ha convertido a:`, valorConvertido);
    } catch (error) {
        // Capturar y mostrar el error
        console.error(`Error al convertir '${valores[i]}':`, error.message);
    }
}
// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
// Definimos una clase para la excepción personalizada
class SumaInvalidaError extends Error {
    constructor(a, b) {
        super(`La suma de ${a} y ${b} es inválida.`);
        this.name = "SumaInvalidaError";
        this.a = a;
        this.b = b;
    }
}

// Función que verifica la suma de a y b
function verificarSuma(a, b) {
    const suma = a + b;
    
    if (suma < 10) {  // Ponemos un requisito, por ejemplo que la suma sea mayor o igual a 10
        throw new SumaInvalidaError(a, b); // Lanzamos la excepción si no se cumple
    } else {
        console.log(`La suma de ${a} y ${b} es válida: ${suma}`);
    }
}

// Ejemplo de uso
try {
    verificarSuma(3, 4);  // Esto lanzará la excepción
} catch (error) {
    console.error(error.message);  // Muestra el mensaje de error personalizado
    console.error(`a = ${error.a}, b = ${error.b}`);  // Accede a los valores de a y b
}
// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
// Excepción personalizada cuando uno de los números es cero
class SumaZeroIntegerError extends Error {
    constructor(message, a, b) {
        super(message);
        this.name = "SumaZeroIntegerError";
        this.a = a;
        this.b = b;
    }
}

// Función que suma dos números enteros
function sumIntegers(a, b) {
    // Verificar si ambos parámetros son números
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Esta operación solo suma números");
    }

    // Verificar si ambos son enteros
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Esta operación solo suma números enteros");
    }

    // Verificar si uno de los números es 0
    if (a === 0 || b === 0) {
        throw new SumaZeroIntegerError("Se está intentando sumar cero", a, b);
    }

    return a + b; // Retorna la suma si no hay errores
}

try {
    console.log(sumIntegers(5, 10));  // Resultado: 15
    console.log(sumIntegers(5, "10"));  // Error: Solo suma números
    //console.log(sumIntegers(5.5, 10)); // Error: Solo suma enteros
    //console.log(sumIntegers(0, 10));   // Error: Sumar cero
} catch (error) {
    if (error instanceof SumaZeroIntegerError) {
        console.error(`Error: ${error.message}. Valores: a = ${error.a}, b = ${error.b}`);
    } else {
        console.error("Se ha producido un error:", error.message);
    }
}