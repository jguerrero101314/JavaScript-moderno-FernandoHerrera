const elMayor = (a, b) => (a > b) ? a : b;

const tieneMembresia = (miembro) => (miembro) ? ' 2 dolares' : '10 dolares';


console.log(elMayor(0, 15));
console.log(tieneMembresia(false));

const amigo = false;
const amigoArr = [
    'Peter',
    'tony',
    'dr.strange',
    amigo ? 'thor' : 'Loki'
];
console.log(amigoArr);

const nota = 69; //A+ A B+
const grado = nota >= 95 ? 'A+' :
    nota >= 90 ? 'A' :
    nota >= 85 ? 'B+' :
    nota >= 80 ? 'B' :
    nota >= 75 ? 'C+' :
    nota >= 70 ? 'C ' : ' F';

console.log({ nota, grado });