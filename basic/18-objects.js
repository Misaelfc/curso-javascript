// Objects

// Sintaxis

let person = {
    name: "Misael",
    age: 33,
    alias: "AbrahamDev"
}  

// Acceso a propiedades

// Notación punto
console.log(person.name)

// Notación de corchetes
console.log(person["name"])

// Modificación de propiedades

person.name = "Misael Flores"
console.log(person.name)

console.log(typeof person.age)

person.age = "33"
console.log(person.age)
console.log(typeof person.age)

// Eliminación de propiedades

delete person.age 
console.log(person)

// Nueva propiedad

person.email = "aflorescastrejon@gmail.com"
person["age"] = 33

console.log(person)

// Métodos (funciones)

let person2 = {
    name: "Misael",
    age: 33,
    alias: "AbrahamDev",
    walk: function(){
        console.log("La persona camina")
    }
}
person2.walk()

// Anidación de objects

let person3 = {
    name: "Misael",
    age: 33,
    alias: "AbrahamDev",
    walk: function(){
        console.log("La persona camina")
    },
    job: {
        name: "Programador",
        exp: 2,
        work: function(){
            console.log(`La persona de ${this.age} años de experiencia trabaja`)
        }
    }
}

console.log(person3)

console.log(person3.name)
console.log(person3.job)
console.log(person3.job.name)
person3.job.work()

// Igualdad de objects

let person4 = {
    name: "Misael Flores",
    alias: "AbrahamDev",
    Email: "aflorescastrejon@gmail.com",
    age: 33
}

console.log(person)
console.log(person4)

console.log(person == person4)
console.log(person === person4)

console.log(person.name == person4.name)

// Iteración

for(let key in person4){
    console.log(key + ": " + person4[key])
}

// Funciones como objects

function Person(name, age){ // Deberia ser una clase
    this.name = name
    this.age = age
}

let person5 = new Person("Misael", 33)
console.log(person5)
console.log(person5.name)


console.log(typeof person5)
console.log(typeof person4)

