const arr = new Array(10); //no tradicional
const arr2 = []; //mas usada

let videoJuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];
console.log(videoJuegos);


let arregloCosas = [
    true,
    1234,
    'Joel',
    1 + 2,
    function() {},
    () => {},
    { a: 1 },
    ['x', 'Megaman', 'Zero', 'Dr. Light', [
        'Dr. Willy', 'Woodman'
    ]],
];
console.log(arregloCosas[7][4][1]);