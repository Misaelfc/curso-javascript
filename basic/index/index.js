// funciones

export function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

// constantes.js

export const PA = 3.14159;

// clases.js

export class Circulo {
    constructor(radio) {
        this.radio = radio;
    }

    area() {
        return PI * this.radio * this.radio;
    }
}