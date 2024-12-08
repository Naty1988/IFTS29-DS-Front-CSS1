//Bucle

 
                            

const letters = ['a', 'b', 'c', 'd'];

// Con funciones por expresión

const f = function () {

    console.log('Un elemento.');

};

letters.forEach(f);

// Con funciones anónimas

letters.forEach(function () {

    console.log('Un elemento.');

});

// Con funciones flecha

letters.forEach(() => console.log('Un elemento.'));

// element al parámetro que hará referencia al elemento, index al parámetro que hará referencia al índice (posición del array) y array al parámetro que hará referencia al propio array en cuestión. 

  
                            

const letters = ['a', 'b', 'c', 'd'];

// Devuelve 'a' / 'b' / 'c' / 'd':

letters.forEach((element) => console.log(element)); 

// Devuelve 'a' 0 / 'b' 1 / 'c' 2 / 'd' 3:

letters.forEach((element, index) => console.log(element, index)); 

// Devuelve 'a' / 'a' / 'a' / 'a':

letters.forEach((element, index, array) => console.log(array[0])); 

// every() permite comprobar si todos y cada uno de los elementos de un array cumplen la condición que se especifique en la FUNCTION callback:
// callback. La condición es que la longitud de cada elemento STRING del array sea 1. Si dicha función devuelve true, significa que cumple la condición, si devuelve false, no la cumple. Por lo tanto, si todos los elementos del array devuelven true, entonces every() devolverá true.
                            
const letters = ['a', 'b', 'c', 'd'];

letters.every((letter) => letter.length === 1); // true

//código más detallado,

 
                            

const letters = ['a', 'b', 'c', 'd'];

// Esta función se ejecuta por cada elemento del array

const condition = function (letter) {
 
    // Si el tamaño del elemento (string) es igual a 1

    if (letter.length == 1) {

        return true;

    } else {

        return false;

    }

};

// Si todos los elementos devuelven true, devuelve true

letters.every(condition); // true


//some() podemos comprobar si al menos uno de los elementos del array, cumplen dicha condición definida por el callback.
                          

      const letters = ['a', 'bb', 'c', 'd'];

      letters.some((element) => element.length == 2); // true
      
      
 //map()  evolver un nuevo array donde cada uno de sus elementos será lo que devuelva la función callback por cada uno de los elementos del array original:                         
//array devuelto por map() es nameSizes, y cada uno de los elementos que lo componen, es el número devuelto por el callback (name.length), que no es otra cosa sino el tamaño de cada STRING.
const names = ['Ana', 'Pablo', 'Pedro', 'Pancracio', 'Heriberto'];

const nameSizes = names.map((name) => name.length);

nameSizes; // Devuelve [3, 5, 5, 9, 9]

//filter() nos permite filtrar los elementos de un array y devolver un nuevo array con sólo los elementos que queramos. Para ello, utilizaremos la función callback para establecer una condición que devuelve true sólo en los elementos que nos interesen:

 
                            

const names = ['Ana', 'Pablo', 'Pedro', 'Pancracio', 'Heriberto'];

const filteredNames = names.filter((name) => name.startsWith('P'));

filteredNames; // Devuelve ['Pablo', 'Pedro', 'Pancracio']

//Aplanar: flatMap()
//revisa todos los elementos del array en busca de arrays anidados, y los aplana hasta el nivel level indicado por parámetro.
                            
const values = [10, 15, 20, [25, 30], 35, [40, 45, [50, 55], 60]];

values.flat(0); // [10, 15, 20, [25, 30], 35, [40, 45, [50, 55], 60]];

values.flat(1); // [10, 15, 20, 25, 30, 35, 40, 45, [50, 55], 60];

values.flat(2); // [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];

values.flat(Infinity); // Idem al anterior, pero si hubieran más niveles los aplanaría todos

//aplanando un nivel y transformando cada elemento del array, según la función pasada por parámetro. Es decir, el método .flatMap(ƒ) es el equivalente a realizar la operación .map(ƒ). flat(1):
 //recorre cada uno de los elementos mediante un map() para transformarlos: si son un array, devuelve su cantidad de elementos, si no es un array, devuelve 1. Finalmente, si el array resultante tuviera algún array entre sus elementos (que en este caso es imposible), le aplicaría un flat(1).                          

const values = [10, 15, 20, [25, 30], 35, [40, 45, [50, 55], 60]];

values.flatMap((element) => (Array.isArray(element) ? element.length : 1)); // [1, 1, 1, 2, 1, 4]

//find() y findIndex(). Ambos se utilizan para buscar elementos de un array mediante una condición, la diferencia es que el primero devuelve el elemento mientras que el segundo devuelve su posición en el array original.
  //no encontrar ningún elemento que cumpla la condición, find() devolverá UNDEFINED, mientras que findIndex(), que debe devolver un NUMBER, devolverá -1.                    
const names = ['Ana', 'Pablo', 'Pedro', 'Pancracio', 'Heriberto'];

names.find((name) => name.length == 5); // 'Pablo'

names.findIndex((name) => name.length == 5); // 1

//findLastIndex() y findLast(),buscando elementos desde derecha a izquierda, en lugar de izquierda a derecha:
  //n lugar de encontrarnos a Pablo (posición 1), el primer elemento que tiene 5 carácteres, como va buscando de derecha a izquierda, el primero que encuentra es Pedro (posición 2).                         
const names = ['Ana', 'Pablo', 'Pedro', 'Pancracio', 'Heriberto'];

names.findLast((name) => name.length == 5); // 'Pedro'

names.findLastIndex((name) => name.length == 5); // 2

//Acumulador: reduce()
// reduce() y reduceRight() recorrer todos los elementos del array, e ir acumulando sus valores (o alguna operación diferente) y sumarlo todo, para devolver su resultado final.
                                                
 
                            

const numbers = [95, 5, 25, 10, 25];

numbers.reduce((first, second) => {

    console.log(`F=${first} S=${second}`);

    return first + second;

});

// F=95 S=5 (1ª iteración: elemento 1: 95 + elemento 2: 5) = 100

// F=100 S=25 (2ª iteración: 100 + elemento 3: 25) = 125

// F=125 S=10 (3ª iteración: 125 + elemento 4: 10) = 135

// F=135 S=25 (4ª iteración: 135 + elemento 5: 25) = 160

// Finalmente, devuelve 160

//Hacia izquierda: reduceRight() derecha a izquierda.
                         
const numbers = [95, 5, 25, 10, 25];

numbers.reduce((first, second) => first - second); // 95 - 5 - 25 - 10 - 25. Devuelve 30

numbers.reduceRight((first, second) => first - second); // 25 - 10 - 25 - 5 - 95. Devuelve -110

//Parámetro inicial

//Es posible indicar un segundo parámetro opcional en el .reduce(). Este parámetro es el valor inicial que queremos tomar en el reduce,
                          

const numbers = [95, 5, 25, 10, 25];

numbers.reduce((accumulator, nextElement) => {

    console.log(`F=${accumulator} S=${nextElement}`);

    return accumulator + nextElement;

}, 0);

// F=0 S=95 (iteración inicial): 0 + elemento 1: 95) = 95

// F=95 S=5 (1ª iteración: elemento 1: 95 + elemento 2: 5) = 100

// F=100 S=25 (2ª iteración: 100 + elemento 3: 25) = 125

// F=125 S=10 (3ª iteración: 125 + elemento 4: 10) = 135

// F=135 S=25 (4ª iteración: 135 + elemento 5: 25) = 160

// Finalmente, devuelve 160

//Desestructuración de arrays: separar una estructura, que en Javascript es o un array o un objeto.
// parte derecha utilizamos los [ ] para indicar que se trata de un array, pero en la parte izquierda los utilizamos para indicar que hacemos una desestructuración.                          
const elements = [5, 2];

const [first, last] = elements; // first = 5, last = 2

const elements = [5, 4, 3, 2];

const [first, second] = elements; // first = 5, second = 4, rest = discard

const elements = [5, 4, 3, 2];

const [first, , third] = elements; // first = 5, third = 3, rest = discard

const elements = [4];

const [first, second] = elements; // first = 4, second = undefined
                        
//  desestructuración
// intercambio de variables, donde el valor inicial de a debe estar en b y viceversa.
let a = 10;

let b = 5;

[a, b] = [b, a];


//Expandir (Spread)
         
                            

const debug = (param) => console.log(...param);

const array = [1, 2, 3, 4, 5];

debug(array); // 1 2 3 4 5

//Agrupar (Rest) agrupación de varios elementos individuales, en un array                           

const elements = [5, 4, 3, 2];

const [first, ...rest] = elements; 

// first = 5, rest = [4, 3, 2]

//------------------

//Reestructuración de arrays
                            
const pair = [3, 4];

// Usando desestructuración + spread

const complete = [1, 2, ...pair, 5]; // [1, 2, 3, 4, 5]

// Sin usar desestructuración

const complete = [1, 2, pair, 5]; // [1, 2, [3, 4], 5]

//------------------
//Set/Map     estructura que no permite valores repetidos,                        

const set = new Set(); 

// Set({}) (Conjunto vacío)

const set = new Set([5, 6, 7, 8, 9]); 

// Set({5, 6, 7, 8, 9}) (Conjunto con 5 elementos)

const set = new Set([5, 5, 7, 8, 9]); 

// Set({5, 7, 8, 9}) (Conjunto con 4 elementos)

set.constructor.name; 

// "Set" 

//------------------
//Propiedad size cuántos elementos tenemos en el conjunto

 
                            

const set = new Set();

set.size; // 0

const set = new Set([5, 6, 7, 8]);

set.size; // 4

const set = new Set([5, 6, 7, 8, 8]);

set.size; // 4 (El 8 sólo se inserta una vez)

//-----------------------
//Añadir elementos (add)   añadir un elemento al conjunto.              
                            
const set = new Set();

set.add(5);

set.add('A');

set.add(5); // No se inserta

set; // Set({5, "A"})

//--------------
//Comprobar si existen: has evuelve un BOOLEAN, por lo que si existe, nos devolverá true. De lo contrario, false.                          

const set = new Set([1, 2, 3]);

set.has(2); // true

set.has(34); // false

set.add(34);

set.has(34); // true

//-------------
//Borrar elementos: delete BOOLEAN. Si el borrado se realizó con éxito, devolverá true, si no pudo realizarse (no existe el elemento), devolverá false.
                           
const set = new Set([1, 2, 3]);

set.delete(3); // true

set.delete(39); // false

set; // Set({1, 2})

//-------
//Vaciar conjunto: clear
 
                            

const set = new Set([1, 2, 3]);

set.clear();

set.size; // 0

//---------------------
//Convertir a Arrays utilizar desestructuración y convertirlo a un array (o viceversa)

 
                            

const set = new Set([5, 'A', [99, 10, 24]]);

set.size; // 3

const clonedArray = [...structuredClone(set)];

const array = [...set];

clonedArray[2][0] = 'Modified';

[...set][2][0]; // 99 (El original se mantiene intacto)

array[2][0] = 'Modified';

[...set][2][0]; // "Modified" (El original ha mutado)

//convertir un array en un Set:

 
                            

const array = [5, 4, 3, 3, 4];

const set = new Set(array);

set; // Set({ 5, 4, 3 })


                        
                        
                        
                        

                        


                        
                        
                        
                        


                                        
                        

                                                

                        
                        
                        

                                                                    
