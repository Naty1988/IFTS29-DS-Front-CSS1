// var minumero = 2;
// alert(minumero);

// var minumero = 0;
// minumero += 5;
// alert(minumero); // 5
// var mitexto = 'Mi nombre es ';
// mitexto = mitexto + 'Juan';
// alert(mitexto);

// var mitexto = 'El número es ' + 3;
// alert(mitexto);

// var mitexto = '20' + 3;
// alert(mitexto); // "203"

// var mitexto = 'Felicidad no es hacer lo que uno quiere\r\n';
// mitexto = mitexto + 'sino querer lo que uno hace.';
// alert(mitexto);

// var valido = true;
// alert(valido);

// var miarray = ['rojo', 'verde', 'azul'];
// alert(miarray[0]); // "rojo"


// var miarray = ['rojo', 'verde', 'azul'];
// alert(miarray);  // "rojo,verde,azul"

// var miarray = ['rojo', 32, 'HTML5 es genial!'];
// alert(miarray[1]);


// var miarray = [64, 32];
// miarray[1] = miarray[1] + 10;
// alert('El valor actual es ' + miarray[1]); // "El valor actual es 42"

// var miarray = [
//     [2, 45, 31],
//     [5, 10],
//     [81, 12]
//  ];

//  alert(miarray[1][0]);  // 5

//  var mivariable = 9;
//    if (mivariable < 10) {
//     alert('El número es menor que 10');
//    }

//    var mivariable = 9;
//    if (!(mivariable < 10)) {
//      alert('El número es menor que 10');
//    }

//    var inteligente = true;
//    var edad = 19;
//    if (edad < 21 && inteligente) {
//        alert('Juan está autorizado');
//    }

//    var edad = 0;
// if (edad) {
//   alert('Juan está autorizado');
// }

// var nombre = 'Juan';
// if (nombre) {
//   alert(nombre + ' está autorizado');
//  }

//  var mivariable = 21;
// if (mivariable < 10) {
//     alert('El número es menor que 10');
// }
// else {
//     alert('El numero es igual o mayor que 10');
// }
// var mivariable = 8;
// switch (mivariable) {
//   case 5:
//     alert('El número es cinco');
//     break;
//   case 8:
//     alert('El número es ocho');
//     break;
//   case 10:
//     alert('El número es diez');
//     break;
//   default:
//     alert('El número es ' + mivariable);
//  }


// var total = 0;
// for (var f = 0; f < 5; f++) {
//     total += 10;
// }
// alert('El total es: ' + total);  // "El total es: 50"

// var total = 0;
// var lista = [23, 109, 2, 9];
// for (var f = 0; f < 4; f++) {
//     total += lista[f];
// }
// alert('El total es: ' + total);  // "El total es: 143"

// var contador = 0;
// while (contador < 100) {
//   contador++;
// }
// alert('El valor es: ' + contador); // "El valor es: 100"

// var contador = 150;
// do {
//   contador++;
// }
// while (contador < 100);
// alert('El valor es: ' + contador); // "El valor es: 151"


// var lista = [2, 4, 6, 8];
// var total = 0;
// for (var f = 0; f < 4; f++) {
//   var numero = lista[f];
//   if (numero == 6) {
//     continue;
//   }
//   total += numero;
// }
// alert('El total es: ' + total);  // "El total es: 14"

// Funciones

// function mostrarMensaje() {
//     alert('Soy una función');
// }
// mostrarMensaje();

// function mifuncion(valor) {
//     alert(valor);
// }
// mifuncion(5);


// var contador = 100;
// var items = 5;
// function mifuncion(valor1, valor2) {
//     var total = valor1 + valor2;
//     alert(total);  // 105 
// }
// mifuncion(contador, items);


// var contador = 100;
// var items = 5;
// function mifuncion(valor1, valor2) {
//     var total = valor1 + valor2;
//     return total;
// }
// var resultado = mifuncion(contador, items);
// alert(resultado);


// var contador = 100;
// var items = 5;
// function mifuncion(valor1, valor2) {
//     var total = valor1 + valor2;
//     if (total > 100) {
//         return total;
//     }
//     else {
//         return 0;
//     }
// }
// var resultado = mifuncion(contador, items);
// alert(resultado);

// //Funciones anonimas//

// var mifuncion = function (valor) {
//     valor = valor * 2;
//     return valor;
// };
// var total = 2;
// for (var f = 0; f < 10; f++) {
//     total = mifuncion(total);
// }
// alert('El total es ' + total);  // "El total es 2048"

// var mivalor = (function (valor) {
//     valor = valor * 2;
//     return valor;
// })(35);
// alert('El valor es ' + mivalor);  // "El valor es 70"

// //Funciones estandar//

// var mivalor = 'Hola';
// if (isNaN(mivalor)) {
//     alert(mivalor + ' no es un número');
// }
// else {
//     alert(mivalor + ' es un número');
// }


// var mivalor = '32';
// if (isNaN(mivalor)) {
//     alert(mivalor + ' no es un número');
// }
// else {
//     var numero = parseInt(mivalor);
//     numero = numero * 10;
//     alert('El número es: ' + numero); // "El número es 320" 
// }


// var nombre = 'Juan Perez';
// var codificado = encodeURIComponent(nombre);
// var miURL = 'http://www.ejemplo.com/contacto.html?nombre=' + codificado;
// alert(miURL);

// Objetos

// //En el ejemplo declaramos el objeto miobjeto con dos propiedades: nombre y edad. El valor de la propiedad nombre es "Juan" y el valor de la propiedad edad es 30.//

// var miobjeto = {
//     nombre: 'Juan',
//     edad: 30
// };

// //implementamos ambas técnicas para acceder a los valores de las propiedades del objeto y crear el mensaje que vamos a mostrar en la pantalla. El uso de cualquiera de estas técnicas es irrelevante, excepto en algunas circunstancias. Por ejemplo, cuando necesitamos acceder a la propiedad a través del valor de una variable, tenemos que usar corchetes.//

// var miobjeto = {
//     nombre: 'Juan',
//     edad: 30
// };
// var mensaje = 'Mi nombre es ' + miobjeto.nombre + '\r\n';
// mensaje += 'Tengo ' + miobjeto['edad'] + ' años';

// //En el ejemplo no podríamos haber accedido a la propiedad usando notación de puntos (miobjeto.nombrePropiedad) porque el intérprete habría intentado acceder a una propiedad llamada nombrePropiedad que no existe. Usando corchetes, primero la variable se resuelve y luego se accede al objeto con su valor ("nombre") en lugar de su nombre.//

// var nombrePropiedad = 'nombre';
// var miobjeto = {
//     nombre: 'Juan',
//     edad: 30
// };
// alert(miobjeto[nombrePropiedad]);  // "Juan"

// //También es necesario acceder a una propiedad usando corchetes cuando su nombre se considera no válido para una variable (incluye caracteres no válidos, como un espacio, o comienza con un número). En el siguiente ejemplo, el objeto incluye una propiedad cuyo nombre se ha declarado con una cadena de caracteres. Está permitido declarar nombres de propiedades con cadena de caracteres, pero como este nombre contiene un espacio, el código "miobjeto.mi edad" produciría un error, por lo que tenemos que usar corchetes para acceder a esta propiedad.//

// var mivariable = 'nombre';
// var miobjeto = {
//     nombre: 'Juan',
//     'mi edad': 30
// };
// alert(miobjeto['mi edad']);  // 30


// //Además de leer los valores de las propiedades, también podemos asignar nuevas propiedades al objeto o modificarlas usando notación de puntos. En el siguiente ejemplo, modificamos el valor de la propiedad nombre y agregamos una nueva propiedad llamada trabajo.//
// //El método mostrardatos() muestra una ventana emergente con los valores de las propiedades nombre y edad, y el método cambiarnombre() asigna el valor recibido por su parámetro a la propiedad nombre. Estos son dos métodos independientes que trabajan sobre las mismas propiedades, uno lee sus valores y el otro les asigna nuevos. Para ejecutar los métodos, usamos notación de puntos y paréntesis después del nombre, como hacemos con funciones.//
// var miobjeto = {
//     nombre: 'Juan',
//     edad: 30
// };
// miobjeto.nombre = 'Martín';
// miobjeto.trabajo = 'Programador';
// alert(miobjeto.nombre + ' ' + miobjeto.edad + ' ' + miobjeto.trabajo);

// var miobjeto = {
//     nombre: 'Juan',
//     edad: 30,
//     motocicleta: {
//         modelo: 'Susuki',
//         fecha: 1981
//     }
// };
// alert(miobjeto.nombre + ' tiene una ' + miobjeto.motocicleta.modelo);

// //Los objetos también pueden contener otros objetos. En el siguiente ejemplo, asignamos un objeto a la propiedad de otro objeto.//

// var miobjeto = {
//     nombre: 'Juan',
//     edad: 30,
//     motocicleta: {
//         modelo: 'Susuki',
//         fecha: 1981
//     }
// };
// alert(miobjeto.nombre + ' tiene una ' + miobjeto.motocicleta.modelo);

// //Métodos

// //los objetos también pueden incluir funciones.Las funciones dentro de los objetos se llaman métodos.
// //Los métodos tienen la misma sintaxis que las propiedades: requieren dos puntos después del nombre y una coma para separar cada declaración, 
// //pero en lugar de valores, debemos asignarles funciones anónimas.

// //El método mostrardatos() muestra una ventana emergente con los valores de las propiedades nombre y edad, 
// //el método cambiarnombre() asigna el valor recibido por su parámetro a la propiedad nombre. 
// //Estos son dos métodos independientes que trabajan sobre las mismas propiedades, uno lee sus valores y el otro les asigna nuevos. 
// //Para ejecutar los métodos, usamos notación de puntos y paréntesis después del nombre, como hacemos con funciones.

// var miobjeto = {
//     nombre: 'Juan',  
//     edad: 30,  
//     mostrardatos: function () {
//       var mensaje = 'Nombre: ' + miobjeto.nombre + '\r\n';
//       mensaje += 'Edad: ' + miobjeto.edad;
//       alert(mensaje);
//     },
//     cambiarnombre: function (nombrenuevo) {
//       miobjeto.nombre = nombrenuevo;
//     }
//   };
//   miobjeto.mostrardatos();  // "Nombre: Juan Edad: 30"
//   miobjeto.cambiarnombre('José');
//   miobjeto.mostrardatos();  // "Nombre: José Edad: 30"

//   //los métodos también pueden devolver valores. En el siguiente ejemplo, 
//   //modificamos el método cambiarnombre() para devolver el nombre anterior después de que se reemplaza por el nuevo.
// //El nuevo método cambiarnombre() almacena el valor actual de la propiedad nombre en una variable temporal llamada nombreviejo 
// //para poder devolver el valor anterior después de que el nuevo se asigna a la propiedad.
  
// var miobjeto = {
//     nombre: 'Juan',  edad: 30,  mostrardatos: function () {
//       var mensaje = 'Nombre: ' + miobjeto.nombre + '\r\n';
//       mensaje += 'Edad: ' + miobjeto.edad;
//       alert(mensaje);
//    },
//     cambiarnombre: function (nombrenuevo) {
//       var nombreviejo = miobjeto.nombre;
//       miobjeto.nombre = nombrenuevo;
//       return nombreviejo;
//     }
//   };
//   var anterior = miobjeto.cambiarnombre('José');
//   alert('El nombre anterior era: ' + anterior);  // "Juan"

// //La palabra clave this
// //Para asegurarnos de que siempre referenciamos al objeto con el que estamos trabajando, 
// //JavaScript incluye la palabra clave this. 
// //Esta palabra clave se usa en lugar del nombre del objeto para referenciar el objeto al que la instrucción pertenece. 
// //usamos la palabra clave this en lugar del nombre del objeto para referenciar sus propiedades. El resultado es el mismo que antes.
// //this referencia el objeto en el que la instrucción se está ejecutando. 
// //solo usamos la palabra clave this dentro de los métodos del objeto miobjeto, 
// //pero las instrucciones en el ámbito global siguen usando el nombre del objeto.

// var miobjeto = {
//     nombre: 'Juan',
//     edad: 30,
//     mostrardatos: function () {
//       var mensaje = 'Nombre: ' + this.nombre + '\r\n';
//       mensaje += 'Edad: ' + this.edad;
//       alert(mensaje);
//     },
//     cambiarnombre: function (nombrenuevo) {
//       var nombreviejo = this.nombre;
//       this.nombre = nombrenuevo;
//       return nombreviejo;
//     }
//   };
//   var anterior = miobjeto.cambiarnombre('José');
//   alert('El nombre anterior era: ' + anterior);  // "Juan"

//   //Constructores
//   //podemos crear objetos individuales, pero si queremos crear copias de estos objetos con las mismas propiedades y métodos, tenemos que usar constructores. 
//   //Un constructor es una función anónima que define un nuevo objeto y lo devuelve, creando copias del objeto (también llamadas instancias), cada una con sus propias propiedades, métodos y valores.
// // se asigna una función anónima a la variable constructor.

// //Dentro de la función, se crea un objeto y se devuelve mediante la instrucción return. Finalmente, el objeto que devuelve la función se almacena en la variable empleado y se ejecuta su método mostrarnombre().
  
// var constructor = function () {
//     var obj = {
//       nombre: 'Juan',
//       edad: 30,
//       mostrarnombre: function () {
//         alert(this.nombre);
//       },
//       cambiarnombre: function (nombrenuevo) {
//         this.nombre = nombrenuevo;
//       }
//    };
//    return obj;
//   };
//   var empleado = constructor();
//   empleado.mostrarnombre();  // "Juan"

//   //podemos configurar valores iniciales para las propiedades enviando los valores a la función cuando se construye el objeto.
// //propósito de un constructor es el de funcionar como una fábrica de objetos.

// var constructor = function (nombreinicial) {
//     var obj = {
//       nombre: nombreinicial,
//       edad: 30,
//       mostrarnombre: function () {
//         alert(this.nombre);
//       },
//       cambiarnombre: function (nombrenuevo) {
//         this.nombre = nombrenuevo;
//       }
//     };
//     return obj;
//   };
//   var empleado = constructor('Juan');
//   empleado.mostrarnombre();  // "Juan"

//   //cómo crear múltiples objetos con el mismo constructor.
// //Aunque los objetos creados desde un constructor comparten las mismas propiedades y métodos, se almacenan en diferentes espacios de memoria y, por lo tanto, manipulan valores diferentes. Cada vez que se llama la función constructor, se crea un nuevo objeto y podemos almacenar diferentes valores en cada uno de ellos. 

// //hemos creado tres objetos: empleado1, empleado2, y empleado3, y se ha asignado los valores "Juan", "Roberto" y "Arturo" a sus propiedades nombre. En consecuencia, cuando leemos la propiedad nombre de cualquiera de estos objetos, obtenemos diferentes valores dependiendo del objeto al que pertenece la propiedad (la función alert() al final del código muestra el mensaje "Juan, Roberto, Arturo").
  
// var constructor = function (nombreinicial) {
//     var obj = {
//       nombre: nombreinicial,
//       edad: 30,
//       mostrarnombre: function () {
//         alert(this.nombre);
//       },
//       cambiarnombre: function (nombrenuevo) {
//         this.nombre = nombrenuevo;
//       }
//     };
//     return obj;
//   };
//   var empleado1 = constructor('Juan');
//   var empleado2 = constructor('Roberto');
//   var empleado3 = constructor('Arturo');
//   alert(empleado1.nombre + ', ' + empleado2.nombre + ', ' + empleado3.nombre);
  

// //closure
// //Todo los objetos que hemos creado hasta el momento contienen propiedades y métodos públicos, lo cual significa que se puede acceder a sus contenidos y modificarlos desde cualquier parte del código. Para evitar esto último y hacer que las propiedades y métodos solo sean accesibles mediante el objeto que los ha creado, tenemos que volverlos privados usando una técnica llamada closure.
// //Cuando devolvemos un objeto desde un constructor, sus métodos aún pueden acceder a las variables de la función, incluso cuando ya no se encuentran en el mismo ámbito, y por ello estas variables se vuelven accesibles solo para el objeto.

// var constructor = function () {
//     var nombre = 'Juan';
//     var edad = 30;
//     var obj = {
//       mostrarnombre: function () {
//         alert(nombre);
//       },
//       cambiarnombre: function (nombrenuevo) {
//         nombre = nombrenuevo;
//       }
//     };
//     return obj;
//   };
//   var empleado = constructor();
//   empleado.mostrarnombre();  // "Juan"

//   //Si quiere asegurarse de que una variable no está referenciando al mismo objeto, puede comparar las variables con los operadores especiales === y !==. JavaScript también incluye el método is() dentro de un objeto global llamado Object que podemos usar para comprobar si dos variables referencian el mismo objeto (por ejemplo, Object.is(objeto1, objeto2)).


//   //El operador new
//   // Con la notación literal y los constructores tenemos todo lo que necesitamos para crear objetos individuales o múltiples objetos basados en una misma definición, pero para ser coherente con otros lenguajes de programación orientada a objetos, JavaScript ofrece una tercera alternativa. Se trata de una clase especial de constructor que trabaja con un operador llamado new (nuevo). El objeto se define mediante una función y luego se llama con el operador new para crear un objeto a partir de esa definición.
// // propiedades y los métodos de los objetos sean identificados mediante la palabra clave this, 

//   function MiObjeto() {
//     this.nombre = 'Juan';
//     this.edad = 30;
//     this.mostrarnombre = function () {
//       alert(this.nombre);
//     };
//     this.cambiarnombre = function (nombrenuevo) {
//       this.nombre = nombrenuevo;
//     };
//   }
//   var empleado = new MiObjeto();
//   empleado.mostrarnombre();  // "Juan"

// //podemos proveer valores iniciales, 

//   function MiObjeto(nombreinicial, edadinicial) {
//     this.nombre = nombreinicial;
//     this.edad = edadinicial;
//     this.mostrarnombre = function () {
//       alert(this.nombre);
//     };
//     this.cambiarnombre = function (nombrenuevo) {
//       this.nombre = nombrenuevo;
//     };
//   }
//   var empleado = new MiObjeto('Roberto', 55);
//   empleado.mostrarnombre();  // "Roberto"

//   //Herencia
//   //Un objeto no hereda las propiedades y los métodos de otro objeto directamente; lo hace desde el prototipo del objeto. Trabajar con prototipos puede resultar muy confuso, pero JavaScript incluye el método create() para simplificar nuestro trabajo. Este método es parte de un objeto global predefinido por JavaScript llamado Object. El método utiliza un objeto que ya existe como prototipo de uno nuevo, de modo que podemos crear objetos a partir de otros objetos sin preocuparnos de cómo se comparten entre ellos las propiedades y los métodos.
// // El código crea el objeto miobjeto usando notación literal y luego llama al método create() para crear un nuevo objeto basado en el objeto miobjeto. El método create() solo requiere el nombre del objeto que se va usar como prototipo del nuevo objeto, y devuelve este nuevo objeto que podemos asignar a una variable para su uso posterior. En este ejemplo, el nuevo objeto se crea con Object. create() y luego se asigna a la variable empleado. Una vez que tenemos el nuevo objeto, podemos actualizar sus valores. Usando el método cambiarnombre(), cambiamos el nombre de empleado a “Roberto” y luego mostramos el valor de la propiedad nombre de cada objeto en la pantalla.

//   var miobjeto = {
//     nombre: 'Juan',
//     edad: 30,
//     mostrarnombre: function () {
//       alert(this.nombre);
//     },
//     cambiarnombre: function (nombrenuevo) {
//       this.nombre = nombrenuevo;
//     }
//   };
//   var empleado = Object.create(miobjeto);
//   empleado.cambiarnombre('Roberto');
//   empleado.mostrarnombre();  // "Roberto"
//   miobjeto.mostrarnombre();  // "Juan"

// // crea dos objetos independientes, miobjeto y empleado, con sus propias propiedades, métodos y valores, pero conectados a través de la cadena de prototipos. El nuevo objeto empleado no es solo una copia del original, es un objeto que mantiene un enlace con el prototipo de miobjeto. Cuando introducimos cambios a este prototipo, los objetos siguientes en la cadena heredan estos cambios.
// // Se agrega un método llamado mostraredad() al objeto prototipo (miobjeto). 
// //Debido a la cadena de prototipos, este nuevo método es accesible también desde las otras instancias. 
// //Cuando llamamos al método mostraredad() de empleado al final del código, el intérprete busca el método primero en empleado y continúa buscando hacia arriba en la cadena de prototipos hasta que lo encuentra en el objeto miobjeto. 
// //Cuando finalmente se encuentra el método, muestra el valor 24 en la pantalla. Esto se debe a que, a pesar de que el método mostraredad() se ha definido dentro de miobjeto, la palabra clave this en este método apunta al objeto con el que estamos trabajando (empleado).
// //Debido a la cadena de prototipos, se puede invocar al método mostraredad() desde empleado, y debido a la palabra clave this, el valor de la propiedad edad que se muestra en la pantalla es el que se ha asignado a empleado.

//   var miobjeto = {
//     nombre: 'Juan',
//     edad: 30,
//     mostrarnombre: function () {
//       alert(this.nombre);
//     },
//     cambiarnombre: function (nombrenuevo) {
//       this.nombre = nombrenuevo;
//     }
//   };
//   var empleado = Object.create(miobjeto);
//   empleado.edad = 24;
//   miobjeto.mostraredad = function () {
//     alert(this.edad);
//   };
//   empleado.mostraredad();  // 24

//   //create() toma un objeto y lo convierte en el prototipo de uno nuevo. Esto nos permite construir una cadena de objetos donde cada uno hereda las propiedades y los métodos de su predecesor.

//   var miobjeto = {
//     nombre: 'Juan',
//     edad: 30,
//     mostrarnombre: function () {
//       alert(this.nombre);
//     },
//     cambiarnombre: function (nombrenuevo) {
//       this.nombre = nombrenuevo;
//     }
//   };
//   var empleado1 = Object.create(miobjeto);
//   var empleado2 = Object.create(empleado1);
//   var empleado3 = Object.create(empleado2);
//   empleado2.mostraredad = function () {
//     alert(this.edad);
//   };
//   empleado3.edad = 24;
//   empleado3.mostraredad();  // 24

//Objetos estándar
//Estos constructores trabajan con el operador new para crear nuevos objetos. El siguiente ejemplo almacena un número.

var valor = new Number(5);
alert(valor);  // 5

//cadena de caracteres que provee al constructor Number() se convierte en un valor numérico y se almacena en un objeto Number. Debido a que JavaScript se encarga de convertir estos objetos en valores primitivos y viceversa, podemos realizar operaciones aritméticas sobre el valor almacenado en el objeto, como lo hacemos con cualquier otro valor numérico.

var valor = new Number('5');
var total = valor * 35;
alert(total);  // 175

//constructor Array() Si especificamos varios valores, el array se crea como si lo hubiéramos declarado con corchetes.

var lista = new Array(12, 35, 57, 8);
alert(lista);  // 12,35,57,8

//si especificamos un único valor y ese valor es un número entero, el constructor lo utiliza para determinar el tamaño del array, crea un array con esa cantidad de elementos y asigna el valor undefined a cada uno de ellos.

var lista = new Array(2);
alert(lista[0] + ' – ' + lista[1]);  // undefined – undefined

//Objetos String
//Las cadenas de caracteres se almacenan como arrays de caracteres, de modo que podemos acceder a cada carácter usando corchetes, como lo hacemos con cualquier otro array. JavaScript incluye la propiedad length para contar la cantidad de caracteres en la cadena.

var texto = 'Hola Mundo';
var mensaje = 'El texto tiene ' + texto.length + ' caracteres';
alert(mensaje);  // "El texto tiene 10 caracteres"

//Debido a que las cadenas de caracteres se almacenan como arrays, podemos iterar sobre los caracteres con un bucle. En el siguiente ejemplo, agregamos un espacio entre las letras de un texto.
//La propiedad length devuelve el número de caracteres en la cadena, pero los índices comienzan a contar desde 0, por lo que debemos crear un bucle que vaya desde 0 al valor anterior de la propiedad length para obtener todos los caracteres en la cadena. Usando estos índices, el bucle for del ejemplo lee cada carácter usando corchetes y los agrega al valor actual de la variable mensaje junto con un espacio. En consecuencia, obtenemos una nueva cadena de caracteres con todos los caracteres de la cadena original separados por un espacio.

var texto = 'Hola Mundo';
var mensaje = '';
for (var f = 0; f < texto.length; f++) {
  mensaje += texto[f] + ' ';
}
alert(mensaje);  // "H o l a M u n d o "

//Métodos: trim y toUpperCase
//Este ejemplo agrega un espacio después de cada carácter en la cadena, lo cual significa que el texto final termina con un espacio en blanco. Los objetos String ofrecen el método trim() para eliminar estos espacios no deseados.

var texto = 'Hola Mundo';
var mensaje = '';
for (var f = 0; f < texto.length; f++) {
  mensaje += texto[f] + ' ';
}
mensaje = mensaje.trim();
alert(mensaje);  // "H o l a M u n d o"

//eemplazar todos los caracteres en una cadena con letras mayúsculas con solo llamar al método toUpperCase().

var texto = 'Hola Mundo';
var mensaje = texto.toUpperCase();
alert(mensaje);  // "HOLA MUNDO"

//Métodos: substr y substring
//Los objetos String incluyen los métodos substr() y substring() para copiar un trozo de texto desde una cadena

//substr() copia el grupo de caracteres que comienza en el índice especificado por el primer atributo. También se puede especificar un segundo atributo para determinar cuántos caracteres queremos incluir desde la posición inicial.

var texto = 'Hola Mundo';
var palabra = texto.substr(0, 4);
alert(palabra);  // "Hola"

//substr() copia un total de cuatro caracteres comenzando con el carácter en el índice 0. Como resultado, obtenemos la cadena “Hola”. Si no especificamos el número de caracteres a incluir, el método devuelve todos los caracteres hasta que llega al final de la cadena.
var texto = 'Hola Mundo';
var palabra = texto.substr(5);
alert(palabra);  // "Mundo"

//substr() también puede tomar valores negativos. Cuando se especifica un índice negativo, el método cuenta de atrás hacia adelante.

var texto = 'Hola Mundo';
var palabra = texto.substr(-5);
alert(palabra);  // "Mundo"

//substring() ma dos valores para determinar los caracteres primero y último que queremos copiar, pero no incluye el último carácter.
//copia los caracteres desde el índice 5 al 7 de la cadena (el carácter en el último índice no se incluye).

var texto = 'Hola Mundo';
var palabra = texto.substring(5, 7);
alert(palabra);  // "Mu"

//Métodos: split, startsWith y endsWith

//extraer las palabras de una cadena, podemos usar el método split(). Este método corta la cadena en partes más pequeñas y devuelve un array con estos valores. El método requiere un valor con el carácter que queremos usar como separador, por lo que si usamos un espacio, podemos dividir la cadena en palabras.

var texto = 'Hola Mundo';
var palabras = texto.split(' ');
alert(palabras[0] + ' / ' + palabras[1]);  // "Hola / Mundo"

//startsWith() y endsWith() buscan un texto al comienzo o al final de la cadena, y devuelven true si se encuentra el texto.
//evuelven valores booleanos, podemos usarlos para establecer la condición de una instrucción if. En el código buscamos el texto “Ho” al comienzo de la variable texto y mostramos un mensaje en caso de éxito. En este ejemplo, se encuentra el texto, el método devuelve true y, por lo tanto, el mensaje se muestra en pantalla.

const texto = "Hola Mundo!";
if (texto.startsWith("Ho")) {
     alert(texto);
} else {
     alert("No se encuentra 'Ho' en el texto");
}

//Métodos: includes, indexOf, lastIndexOf
//includes() busca un texto y devuelve true en caso de éxito, pero la búsqueda se realiza en toda la cadena.

var texto = 'Hola Mundo';
if (texto.includes('l')) {
  alert('El texto incluye la letra L');
}

//dónde se han encontrado esos caracteres. Existen dos métodos para este propósito: indexOf() y lastIndexOf(). Ambos métodos devuelven el índice donde se encuentra la primera coincidencia, pero el método indexOf() comienza la búsqueda desde el inicio de la cadena y el método lastIndexOf() lo hace desde el final.

//Objetos Array
// length para obtener la cantidad de valores en el array.

var lista = [12, 5, 80, 34];
alert(lista.length);  // 4


//terar sobre el array con un bucle for, l valor que devuelve la propiedad se usa para definir la condición del bucle.

var lista = [12, 5, 80, 34];
var total = 0;
for (var f = 0; f < lista.length; f++) {
  total += lista[f];
}
alert('El total es: ' + total);  // "El total es: 131"


//Array: Propiedades
//Métodos: Slice y filter
// iterar sobre el array para leer y procesar los valores uno por uno, los objetos Array ofrecen otros métodos para acceder a ellos. Por ejemplo, si queremos procesar solo algunos de los valores en el array, podemos obtener una copia con el método slice().
//devuelve un nuevo array con los valores entre el índice especificado por el primer atributo y el valor en el índice que se encuentra antes del especificado por el segundo atributo. En el ejemplo, el método accede a los valores en los índices 1 y 2, y devuelve los números 5 y 80.

var lista = [12, 5, 80, 34];
var listanueva = lista.slice(1, 3);
alert(listanueva);  // 5,80

//examinar los valores antes de incluirlos en el nuevo array, tenemos que usar un filtro. Con este propósito, los objetos Array ofrecen el método filter(). Este método envía cada valor a la función y los incluye en el nuevo array solo cuando la función devuelve true. En el siguiente ejemplo, devolvemos true cuando el valor es menor o igual que 50. En consecuencia, el nuevo array contiene todos los valores del array original excepto el valor 80.

var lista = [12, 5, 80, 34];
var listanueva = lista.filter(function (valor) {
  if (valor <= 50) {
    return true;
  }
  else {
    return false;
  }
 }
);
alert(listanueva);  // 12, 5, 34

//En la función provista para el método filter(), comparamos el valor del array con el número 50 y devolvemos true o false dependiendo de la condición, pero como las condiciones ya producen un valor booleano cuando se evalúan, podemos devolver la condición misma y simplificar el código.

var lista = [12, 5, 80, 34];
var listanueva = lista.filter(function (valor) {
    return valor <= 50;
  }
);
alert(listanueva);  // 12, 5, 34

//Métodos: Every, some y join

//Estos métodos evalúan los valores con una función, pero en lugar de devolver un array con los valores validados por la función, devuelven los valores true o false. 
//Every() devuelve true si se validan todos los valores
//some() devuelve true si se valida al menos uno de los valores.
//every() para comprobar que todos los valores del array son menores o iguales a 100.

var lista = [12, 5, 80, 34];
var valido = lista.every(function (valor) {
    return valor <= 100;
  }
);
if (valido) {
  alert('Los valores no son mayores que 100');
}

//Métodos: Join, indexOf y lastIndexOf
//incluir los valores de una array dentro de una cadena de caracteres para mostrarlos al usuario, podemos llamar al método join(). Este método crea una cadena de caracteres con los valores del array separados por un carácter o una cadena de caracteres.

//crea una cadena de caracteres con un guion entre los valores.

var lista = [12, 5, 80, 34];
var mensaje = lista.join('-');
alert(mensaje);  // "12-5-80-34"

//indexOf() y lastIndexOf(). Estos métodos buscan un valor y devuelven el índice de la primer coincidencia encontrada. 
//indexOf() comienza la búsqueda desde el inicio 
//lastIndexOf() desde el final.
//Si queremos encontrar todos los valores que coinciden con la búsqueda, tenemos que crear un bucle para realizar múltiples búsquedas

//variable ultimo almacena el índice del último valor encontrado por el método indexOf(). Al comienzo, la variable se inicializa con el valor 0, lo cual significa que el método comenzará la búsqueda desde el índice 0 del array, pero después de realizar la primera búsqueda, la variable se actualiza con el índice que devuelve el método indexOf(), desplazando el punto de partida de la próxima búsqueda a una nueva ubicación. El bucle sigue funcionando hasta que el método indexOf() devuelve el valor -1 (no se ha encontrado ninguna coincidencia).
//indexOf puede tomar un segundo atributo que especifica la ubicación desde la que queremos comenzar la búsqueda. Usando este atributo, podemos indicar al método que no busque en los índices donde ya hemos encontrado un valor.
//incrementa el valor de la variable contador para contar el número de valores encontrados.

var lista = [12, 5, 80, 34, 5];
var buscar = 5;
var ultimo = 0;
var contador = 0;
while (ultimo >= 0) {
    var ultimo = lista.indexOf(5, ultimo);
    if (ultimo != -1) {
        ultimo++;
        contador++;
    }
}
alert('Hay un total de ' + contador + ' números ' + buscar);

//Métodos: Push, unshift
//push() agrega el valor al final del array 
//unshift() lo agrega al comienzo.

var lista = [12, 5, 80, 34];
lista.push(100);
alert(lista);  // 12,5,80,34,100

//Para agregar múltiples valores, tenemos que especificarlos separados por comas.

var lista = [12, 5, 80, 34];
lista.push(100, 200, 300);
alert(lista);  // 12,5,80,34,100,200,300

//Métodos: Concat, pop, shift
//concat() concatena dos arrays y devuelve un nuevo array con el resultado (los arrays originales no se modifican).

var lista = [12, 5, 80, 34];
var listanueva = lista.concat([100, 200, 300]);
alert(listanueva);  // 12,5,80,34,100,200,300

//pop() elimina el valor al final 
//shift() lo elimina al inicio.

var lista = [12, 5, 80, 34];
lista.pop();
alert(lista);  // 12,5,80

//Métodos: Splice, reverse
//splice() agrega o elimina valores desde cualquier ubicación del array. 
//El primer atributo especifica el índice donde queremos comenzar a eliminar valores
//el 2° determina cuántos elementos queremos eliminar. 
// ejemplo,elimina 2 valores desde el índice 1.

var lista = [12, 5, 80, 34];
var removidos = lista.splice(1, 2);
alert('Valores restantes: ' + lista);  // 12,34 
alert('Valores removidos: ' + removidos);  // 5,80

//podemos agregar nuevos valores a un array en posiciones específicas. Los valores se deben especificar después de los dos primeros atributos separados por comas.
//ejemplo agrega los valores 24, 25, y 26 en el índice 2. Como no se va a eliminar ningún valor, declaramos el valor 0 para el segundo atributo.

var lista = [12, 5, 80, 34];
lista.splice(2, 0, 24, 25, 26);
alert(lista);  // 12,5,24,25,26,80,34

//reverse() invierte el orden de los valores en el array.

var lista = [12, 5, 80, 34];
lista.reverse();
alert(lista);  // 34,80,5,12

//Métodos: Sort y map

// sort() tomar una función decidir el orden en el que se ubicarán los valores. Si no especificamos ninguna función, orden alfabético y ascendente.

var lista = [12, 5, 80, 34];
lista.sort();
alert(lista);  // 12,34,5,80

//e ordenan alfabéticamente, no de forma numérica. Si queremos que el método considere el orden numérico o lograr una organización diferente, tenemos que facilitar una función. 
//La función recibe dos valores y debe devolver un valor booleano para indicar su orden. Por ejemplo, para ordenar los valores en orden ascendente, tenemos que devolver true si el primer valor es mayor que el segundo valor o false en caso contrario.

var lista = [12, 5, 80, 34];
lista.sort(function (valor1, valor2) {
  return valor1 > valor2;
});
alert(lista);  // 5,12,34,80

//map() procesar los valores del array uno por uno y crear un nuevo array con los resultados.
//multiplica cada valor por 2 y devuelve los resultados.

var lista = [12, 5, 80, 34];
var listanueva = lista.map(function (valor) {
  return valor * 2;
});
alert(listanueva);  // 24, 10, 160, 68

//Date: Métodos
//Date: constructor

var fecha = new Date();
alert(fecha);  // “Sun Dec 18 2022 00:00:00 GMT-0300 (Argentina Standard Time)”

var fecha = new Date('January 20 2017');
alert(fecha);  // "Fri Jan 20 2017 00:00:00 GMT-0500 (EST)"

var fecha = new Date(2017, 1, 15, 12, 35, 0);
alert(fecha);  // “Wed Feb 15 2017 12:35:00 GMT-0500 (EST)”

//para obtener el año de una fecha, tenemos que usar el método getFullYear().

var hoy = new Date();
var ano = hoy.getFullYear();
alert('El año es ' + ano);  // "El año es 2017"

//meses se representan con valores de 0 a 11, y, por lo tanto, tenemos que sumar 1 al valor que devuelve el método getMonth() para obtener un valor que las personas puedan entender.

var hoy = new Date();
var ano = hoy.getFullYear();
var mes = hoy.getMonth() + 1;
var dia = hoy.getDate();
alert(ano + '-' + mes + '-' + dia);  // "2017-1-5"

// determinar la fecha 15 días a partir de la fecha actual, tenemos que obtener el día actual, sum

var hoy = new Date();
alert(hoy);  // "Thu Jan 05 2017 14:37:28 GMT-0500 (EST)" 
hoy.setDate(hoy.getDate() + 15);
alert(hoy);  // "Fri Jan 20 2017 14:37:28 GMT-0500 (EST)"

//diferencia entre dos fechas.

var hoy = new Date(2017, 0, 5);
var futuro = new Date(2017, 0, 20);
var intervalo = futuro - hoy;
alert(intervalo);  // 129600000

//El valor que devuelve la resta se expresa en milisegundos

var hoy = new Date(2017, 0, 5);
var futuro = new Date(2017, 0, 20);
var intervalo = futuro – hoy;
var segundos = intervalo / 1000;
alert(segundos + " segundos");  // "1296000 segundos"

//comprueba si dos fechas son iguales o no, y muestra un mensaje para comunicar el resultado.

var hoy = new Date(2017, 0, 20, 10, 35);
var futuro = new Date(2017, 0, 20, 12, 35);
if (futuro.getTime() == hoy.getTime()) {
  alert('Las Fechas son Iguales');
}
else {
  alert('Las Fechas son Diferentes');
}
//Comparando dos fechas
//Antes de comparar las fechas, anulamos la hora, los minutos y los segundos con el método setHours(). Ahora, las fechas tienen la hora configurada en 0 y el operador de comparación solo tiene que comprobar si las fechas son iguales o no

var hoy = new Date(2017, 0, 20, 10, 35);
var futuro = new Date(2017, 0, 20, 12, 35);
hoy.setHours(0, 0, 0);
futuro.setHours(0, 0, 0);
if (futuro.getTime() == hoy.getTime()) {
  alert('Las Fechas son Iguales');
}
else {
  alert('Las Fechas son Diferentes');
}

//Objeto Math
//El método random() devuelve un número entre 0 y 1. Si queremos obtener un número dentro de un rango diferente de valores, tenemos que multiplicar el valor por la fórmula (max – min) + min, donde min y max son los valores mínimos y máximos que queremos incluir. 

//obtener un número al azar entre 1 y 10, pero hemos tenido que definirlo como 1 y 11 debido a que el valor máximo no se incluye en el rango. Otro tema que debemos considerar es que el número que devuelve el método random() es un valor decimal. Si queremos obtener un número entero, tenemos que redondearlo con el método floor().

var numeroalazar = Math.random() * (11 - 1) + 1;
var valor = Math.floor(numeroalazar);
alert("El número es: " + valor);


