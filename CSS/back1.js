/* Ej 1
const p1 = Promise.resolve(1);
const p2 = Promise.reject("Error");

Promise.allSettled([p1, p2]).then(results =>{
    console.log(results);
})
*/
/*Ej 2
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`)
    }
    actualizarEdad(edad) {
        this.edad = edad;
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`)
    }

}
const persona = new Persona("ana", 30);
persona.actualizarEdad(20);
*/

/*Ej3
const sum = (num) => {
    let total = 0;
    for (let i =1; i <= num; i ++) {
        total += i;
    }
    return total
}
console.log(sum(5))
*/
/*
Ej4
const numbers = [1,2,3,4,5];
const evenNumbers = numbers.filter( num => {
    return num % 2 == 0;
});
console.log(evenNumbers, "evenNumbers")
const result = { data:[]};

setTimeout(() => {
    result.data = evenNumbers;
},1000)
console.log(result.data)
*/
/*
const procesarDatos =() => {
    Promise.resolve("Datos procesados")
    .then((result) => console.log(result))
    }
    procesarDatos().then(() =>console.log("Proceso completado"))

    */
/*
    const sum = a =>b => a + b;
    console.log(sum(5)(10));
    */
/*
    const calcularSuma = async (valores) => {
        let suma = 0;
        for (const valor of valores) {
            suma += valor;
        }
        await esperar(500);
        return suma;
    }
    function esperar(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }
    calcularSuma([1,2,3,4]).then(console.log)
    */
   const numbers = [1,2,3,4,5];
   const evenNumbers = numbers.filter(num => num %2 === 0);
   console.log(evenNumbers)