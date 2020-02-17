function saludar(nombre) {
    // console.log('hola mundo');
    console.log('hola: ' + nombre);
    console.log(arguments);

    return 10; // si no tiene return regresa undefined
    //esto nunca se va a ejecutar
    console.log('Soy un codigo que esta despues del return');

}
const saludar2 = function(nombre) { // funcion anonima
    // console.log('hola mundo2');
    console.log('hola:' + nombre);
}
const saludarFlecha = () => {
    console.log('Hola flecha');
}
const saludarFlecha2 = (nombre) => {
    console.log('Hola:' + nombre);
}

// saludar();
// saludar('Joel', 40, true, 'Pnama');
// saludar2('Alex');
// saludarFlecha();
// saludarFlecha2('Ruth');
const retornoSaludar = saludar('Joel', 40, true, 'Pnama');
console.log(retornoSaludar);

function sumar(a, b) {
    return a + b;
}
const sumar2 = (a, b) => {
    return a + b;
}

const sumar3 = (a, b) => a + b;
console.log(sumar(1, 2));
console.log(sumar2(1, 2));
console.log(sumar3(2, 2));

function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log('getAleatorio1 = ' + getAleatorio());
console.log('getAleatorio2 = ' + getAleatorio2());