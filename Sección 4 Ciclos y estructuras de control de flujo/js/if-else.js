let a = 5;

if (a >= 10) {
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');
}
console.log('Fin');

const hoy = new Date();
let dia = hoy.getDay();

console.log(dia);

if (dia === 0) {
    console.log('Domingo');
} else if (dia === 1) {
    console.log('Lunes');
    // console.log('No es domingo');
    // if (dia === 1) {
    //     console.log('Lunes');
    // } else {
    //     console.log('No es lunes ni domingo');
    // }
} else if (dia === 1) {
    console.log('martes');
} else {
    console.log('No es lunes, martes ni domingo');

}