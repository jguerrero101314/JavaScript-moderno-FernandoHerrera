const dia = 1;
const horaActual = 8;

let horaApertura, mensaje;

// if (dia === 0 || dia === 6) {

//     console.log('FIn de semana');
//     horaApertura = 9;
// } else {
//     console.log('dia de semana');
//     horaApertura = 11;
// }

// if (horaActual >= horaApertura) {
//     mensaje = 'esta abierto';
// } else {
//     mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura} `;
// }
// console.log({ horaApertura, mensaje });




// if ([0, 6].includes(dia)) {
//     console.log('FIn de semana');
//     horaApertura = 9;
// } else {
//     console.log('dia de semana');
//     horaApertura = 11;
// }

// if (horaActual >= horaApertura) {
//     mensaje = 'esta abierto';
// } else {
//     mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura} `;
// }
// console.log({ horaApertura, mensaje });

horaApertura = ([0, 6].includes(dia)) ? 9 : 11;
mensaje = (horaActual >= horaApertura) ? 'esta abierto' : `Esta cerrado, hoy abrimos a las ${horaApertura}`;
console.log({ horaApertura, mensaje });