let a = 10,
    b = a;

console.log(a, b);


let juan = {
    nombre: 'Juan'
};
let ana = {...juan };
ana.nombre = 'Ana';
console.log({ juan, ana });


const cambiaNombre = ({...persona }) => {
    persona.nombre = 'Tnoy';

    return persona;

}

let peter = { nombre: 'Peter' };
let tony = cambiaNombre(peter);

console.log({ peter, tony });
//arreglos
const frutas = ['manzanas', 'peras', 'uvas']

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');



otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas });