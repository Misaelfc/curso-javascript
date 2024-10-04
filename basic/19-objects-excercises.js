// 1. Crea un objeto con 3 propiedades
let person = {
    name: "Misael",
    age: 33,
    alias: "AbrahamDev"
}

// 2. Accede y muestra su valor
console.log(person.name)
console.log(person.age)
console.log(person.alias)

// 3. Agrega una nueva propiedad
person.name = "Misael Flores"
console.log(person.name)

// 4. Elimina una de las 3 primeras propiedades
delete person.age
console.log(person)

// 5. Agrega una función e invócala
let person2 = {
    name: "Misael",
    age: 33,
    alias: "AbrahamDev",
    workOut: function(){
        console.log("La persona entrena calistenia")
    }
}

person2.workOut()
// 6. Itera las propiedades del objeto
let person3 = {
    name: "Misael Flores",
    alias: "AbrahamDev",
    Email: "aflorescastrejon@gmail.com",
    age: 33
}

for(let key in person3){
    console.log(key + ": " + person3[key])
}

// 7. Crea un objeto anidado

let person4 = {
    name: "Misael Flores",
    alias: "AbrahamDev",
    Email: "aflorescastrejon@gmail.com",
    age: 33,
    workOut: function(){
        console.log("La persona entrena calistenia")
    },
    job: {
        name: "Bellboy",
        exp: 2,
        work: function(){
            console.log(`La persona4 tiene ${this.exp} años de experiencia como Bellboy`)
        }
    }
}

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(person4)
console.log(person4.name)
console.log(person4.job)
console.log(person4.job.name)
person4.job.work()

// 9. Comprueba si los dos objetos creados son iguales

console.log(person)
console.log(person4)

console.log(person == person4)
console.log(person === person4)

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(person.name == person4.name)