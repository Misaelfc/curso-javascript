// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
myArray = [1, 2, 3, 4, 5]
let myValue = myArray[1]
console.log(myValue)

let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray
console.log(myValue0)
console.log(myValue1)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] = myArray
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)

// 3. Usa desestructuración para extraer dos propiedades de un objeto
let person = {
    name: "Misael",
    age: 33,
    alias: "AbrahamDev"
}

let {name, age, alias} = person
console.log(name)
console.log(age)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let {name2 =  "Abraham", age2 = 29, alias: alias3} = person
console.log(name2)
console.log(age2)
console.log(alias3)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let person3 = {
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

let {name: name3, job: {name: jobName}} = person3

console.log(name3)
console.log(jobName)

// 6. Usa propagación para combinar dos arrays en uno nuevo
let myArray2 = [...myArray]

// 7. Usa propagación para crear una copia de un array
let myArray3 = [...myArray, 6, 7]
console.log(myArray2)
console.log(myArray3)

// 8. Usa propagación para combinar dos objetos en uno nuevo
let person4 = {...person, email: "modoguerra@gmail.com"}
console.log(person4)
// 9. Usa propagación para crear una copia de un objeto
let person5 = {...person,}

console.log(person5)
// 10. Combina desestructuración y propagación
myArray = [1, 2, 3];
myArray2 = [4, 5, 6];
myArray3 = [7, 8, 9];

let [first, second, third] = myArray;
let myArray4 = [first, second, third, ...myArray2, ...myArray3]
console.log(myArray4)