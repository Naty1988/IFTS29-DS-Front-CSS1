      
/*
const iterations = 10;
const numbers = [];

for (let i = 0; i < iterations; i++) {
 const number = 1 + Math.floor(Math.random() * 6);
 numbers.push(number);
 if (number === 6) {
   console.log('ERROR');
   break;
 }
}
console.log(numbers)


const list = ['A', 'B', 'C'];

for (let i = 0; i < list.length; i++) {
 console.log('i=', i, ' list=', list[i]);
}



list.forEach(function (e, i) {
  console.log('i=', i, 'list=', e);
 });
             

['A', 'B', 'C'].forEach((e, i) => console.log('i=', i, 'list=', e));




setTimeout(function () {
  console.log('He ejecutado la función');
 }, 2000);
 
  // arrow functions        

 setTimeout(() => console.log('He ejecutado la función'), 2000);
//guardar el callback en una constante:
const action = () => console.log('He ejecutado la función');
setTimeout(action, 2000); 

setTimeout(() => console.log('Código asíncrono.'), 2000);
console.log('Código síncrono.');


     //Asincronía con callbacks    

 // Implementación con callbacks 
 const doTask = (iterations, callback) => {
  const numbers = [];
  for (let i = 0; i < iterations; i++) {
    const number = 1 + Math.floor(Math.random() * 6);
    numbers.push(number);
    if (number === 6) {
      // Error, se ha sacado un 6 
      callback({
        error: true,
        message: 'Se ha sacado un 6'
      });
      return;
    }
  }
  // Termina bucle y no se ha sacado 6 
  return callback(null, {
    error: false,
    value: numbers
  });
 };
 
 fetch('/robots.txt')
 .then((response) => response.text())
 .then((data) => console.log(data))
 .finally(() => console.log('Terminado.'))
 .catch((error) => console.error(data));            
 
 
                                

 //mplementación con promesas 
const doTask = (iterations) =>
  new Promise((resolve, reject) => {
    const numbers = [];
    for (let i = 0; i < iterations; i++) {
      const number = 1 + Math.floor(Math.random() * 6);
      numbers.push(number);
      if (number === 6) {
        reject({
          error: true,
          message: 'Se ha sacado un 6'
        });
      }
    }
    resolve({
      error: false,
      value: numbers
    });
  });
 
          

  doTask(10)
  .then((result) => console.log('Tiradas correctas: ', result.value))
  .catch((err) => console.error('Ha ocurrido algo: ', err.message));
 
        
// Petición HTTP
fetch('/robots.txt')
.then((response) => {
  if (response.ok) return response.text();
  else throw new Error(response.status);
})
.then((data) => {
  console.log('Datos: ' + data);
})
.catch((err) => {
  console.error('ERROR: ', err.message);
});

                      
                

            

const isResponseOk = (response) => {
  if (!response.ok) throw new Error(response.status);
  return response.text();
 };
 
 
 fetch('/robots.txt')
  .then((response) => isResponseOk(response))
  .then((data) => console.log('Datos: ', data))
  .catch((err) => console.error('ERROR: ', err.message));
                  const request = async (url) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error('WARN', response.status);
    const data = await response.text();
    return data;
};

const resultOk = await request('/robots.txt');
const resultError = await request('/nonExistentFile.txt');
            

const request = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error('WARN', response.status);
  const data = await response.text();
  return data;
};

const resultOk = await request('/robots.txt');
const resultError = await request('/nonExistentFile.txt');
          
   */ 
           

class Personaje {
  name;
  energy;
 
  constructor(name, energy = 10) {
    this.name = name;
    this.energy = energy;
  }
 
  get status() {
    return '⭐'.repeat(this.energy);
  }
 
  set status(stars) {
    this.energy = stars.length;
  }
 }
 
 const mario = new Personaje('Mario');
 mario.energy; // 10
 mario.status = '⭐⭐⭐';
 mario.energy; // 3
 mario.status; // '⭐⭐⭐'
 

                           

 // Declaración de una clase (de momento, vacía)
 class Animal {}
 // Crear (instanciar) un objeto basada en una clase
 const pato = new Animal();                   
 
     