const dia = 0;
const horaActual = 10;

let horaApertura, mensaje;

if (dia === 0 || dia === 6) {

    console.log('FIn de semana');
    horaApertura = 9;
} else {
    console.log('dia de semana');
    horaApertura = 11;
}

if (horaActual >= horaApertura) {
    mensaje = 'esta abierto';
} else {
    mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura} `;
}
console.log({ horaApertura, mensaje });




if ([0, 6].includes(dia)) {
    console.log('FIn de semana');
    horaApertura = 9;
} else {
    console.log('dia de semana');
    horaApertura = 11;
}

if (horaActual >= horaApertura) {
    mensaje = 'esta abierto';
} else {
    mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura} `;
}
console.log({ horaApertura, mensaje });