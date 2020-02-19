diaLetras = ['Domingo', 'Lunes', 'Martes',
    'Miercoles', 'Jueves', 'Sabado'
];
dia = 10;
console.log(diaLetras[dia] || 'Dia no definido');

// dia = 6;
// const diasLetras = {
//     0: () => 'domingo -0',
//     1: () => 'lunes - 1',
//     2: () => 'martes - 2',
//     3: () => 'Miercoles - 3',
//     4: () => 'Jueves - 4',
//     5: () => 'Viernes -5',
//     6: () => 'Sabado - 6',
// };

// console.log(diasLetras[dia]());