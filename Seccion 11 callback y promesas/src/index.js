import './styles.css';
import { buscarHeroe, buscarHeroeAsync } from './js/promise';

import { ObtenerHeroesArr } from './js/await';
// import { promesaLenta, promesaMedia, promesaRapida } from './js/promise';

// promesaLenta.then(console.log);
// promesaMedia.then(console.log);
// promesaRapida.then(console.log);
// Promise.race([promesaLenta, promesaMedia, promesaRapida])
//     .then(console.log)
//     .catch(console.warn);
// buscarHeroe('capi2').then(heroe => console.log(heroe))
//     .catch(console.warn);
// buscarHeroeAsync('iron2').then(console.log).catch(console.warn);

console.time('await')
ObtenerHeroesArr().then(heroes => {
    console.table(heroes);
    console.timeEnd('await')
});