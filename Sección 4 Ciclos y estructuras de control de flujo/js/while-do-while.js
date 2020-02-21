const carros = ['Ford', 'Toyota', 'Honda'];
let i = 0;
// while (i < carros.length) {
//     console.log(carros[i]);
//     i++;

// }
//undefined
//null
//false
console.warn(' while');
while (carros[i]) {
    if (i === 1) {
        // break;
        i++;
        continue;
    }
    console.log(carros[i]);
    i++;
    // i = i + 1;
}

console.warn('Do while');

let j = 0;

do {
    console.log(carros[j]);
    j++;

} while (carros[j]);