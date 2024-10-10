// 1. Crea una clase que reciba dos propiedades
class Person {
    constructor(name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

// 2. Añade un método a la clase que utilice las propiedades
let person = new Person("Misael", 33, "AbrahamDev")
console.log(person.alias)

// 3. Muestra los valores de las propiedades e invoca a la función
class PersonWithFunction {
    constructor(name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }workOut(){
        console.log("La persona entrena calistenia")
    }
}

let person2 = new PersonWithFunction("Misael", 33, "AbrahamDev")
person2.workOut()

// 4. Añade un método estático a la primera clase
class PersonWithMethod {
    constructor(name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }
    static greet(person){
        person.forEach(person => {
            console.log(`Hola, ${person.name}!`)
        });
    }
}

// 5. Haz uso del método estático
let person3 = new PersonWithMethod("Brais", 37, "MoureDev")
PersonWithMethod.greet([person3])

// 6. Crea una clase que haga uso de herencia
class Animal{

    constructor(name){
        this.name = name
    }

    sound(){
        console.log("El animal emite un sonido genérico")
    }

}

class Dog extends Animal{
    sound(){
        console.log("Guau")
    }
    barking(){
        console.log("El perro está ladrando")
    }
}

let myDog = new Dog("Hachi")
myDog.sound()
myDog.barking()
// 7. Crea una clase que haga uso de getters y setters
class PersonWithSetAndGet{
    #name
    #age
    #alias
    #bank

    constructor(name, age, alias, bank){
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }
    get name(){
        return this.#name
    }

    set bank(bank){
        this.#bank = bank 
    }

    get bank() {
        return this.#bank;
    }
}

// 8. Modifica la clase con getters y setters para que use propiedades privadas
person4 = new PersonWithSetAndGet("Misael", 33, "AbrahamDev", "IBAN12367568")
console.log(person4)
console.log(person4.name)

// 9. Utiliza los get y set y muestra sus valores
person4.bank = "new IBAN12367568"
console.log(person4.bank)

// 10. Sobrescribe un método de una clase que utilice herencia 
class PersonStudent {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Método que será sobrescrito
    introduce() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

class Student extends PersonStudent{
    constructor(name, age, studentId) {
        super(name, age);  // Llamada al constructor de la clase base
        this.studentId = studentId;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name} and my student ID is ${this.studentId}.`);
    }
}

let persona = new PersonStudent("Abraham", 33)
let estudiante = new Student("Misael", 33, "114575")

persona.introduce()
estudiante.introduce()

