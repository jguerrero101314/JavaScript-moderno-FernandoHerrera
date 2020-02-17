// 1. Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “Hello World”.
// alert('Hello World');

// 2. Escribe un programa de una sola línea que escriba en la pantalla un texto que diga “Hello World” (document.write).

document.write('Hello World');

// 3. Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.

let a = 3,
    b = 5;
console.log(a + b);


// 4. Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”

// let nombre = prompt("cual es su usuario");
// alert('Hola: ' + nombre);
// console.log('Hola: ' + nombre);

// 5. Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
let numero1 = parseInt(prompt('Escriba el 1er numero'));
let numero2 = parseInt(prompt('Escriba el 2do numero'));
let resultado = (numero1 + numero2);
alert('La suma es: ' + resultado);
console.log('La suma es: ' + resultado);