function saludar(nombre) {
    // console.log('hola mundo');
    console.log('hola: ' + nombre);
    console.log(arguments);

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
saludar('Joel', 40, true, 'Pnama');
saludar2('Alex');
saludarFlecha();
saludarFlecha2('Ruth');