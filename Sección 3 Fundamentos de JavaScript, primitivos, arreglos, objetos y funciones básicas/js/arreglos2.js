let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log({ primero, ultimo });

juegos.forEach((elemento, indice, arr) => {
    console.log({ elemento, indice, arr });
});
let nuevaLongitud = juegos.push('F-Zero'); //inserta al fnal
console.log({ nuevaLongitud, juegos });

nuevaLongitud = juegos.unshift('Fire Emblem'); //inserta al inicio
console.log({ nuevaLongitud, juegos });


let juegoBorrado = juegos.pop(); //borra el ultimo
console.log({ juegoBorrado, juegos });

let posicion = 1;

let juegosBorados = juegos.splice(posicion, 2); //aelimina cualquier posicion e ingresa
console.log({ juegosBorados, juegos });


let metroidIndex = juegos.indexOf('Metroid'); //busca algo en especifico
console.log({ metroidIndex });