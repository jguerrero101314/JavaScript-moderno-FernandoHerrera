import './styles.css';
import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe } from './js/promise';


const heroeId1 = 'capi';
const heroeId2 = 'spider';
const heroeId3 = 'iron';


/* callbacks
buscarHeroe(heroeId1, (err, heroe1) => {
    // if (err) {
    //     console.error(err);
    // } else {
    //     console.log(heroe);
    // }
    if (err) { return console.error(err); }
    buscarHeroe(heroeId2, (err, heroe2) => {
        if (err) { return console.error(err); }
        console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`);
    });
});*/
//promesas
/*
buscarHeroe(heroeId1).then(heroe1 => {
    // console.log(`enviando a ${heroe.nombre} a la mision`);
    buscarHeroe(heroeId2).then(heroe2 => {
        // console.log(`enviando a ${heroe.nombre} a la mision`);
        console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`);
    });
});
*/
//promise all
Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2), buscarHeroe(heroeId3)])
    .then(([heroe1, heroe2, heroe3]) => {
        // console.log('Promise.all', heroes);
        console.log(`Enviando a ${heroe1.nombre} , ${heroe2.nombre} y  ${heroe3.nombre} a la mision`);

    });

console.log('Fin de programa');