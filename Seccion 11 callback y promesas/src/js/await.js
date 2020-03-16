import { buscarHeroeAsync, buscarHeroe } from "./promise";

const heroesIds = ['capi', 'iron', 'spider'];
/*
export const ObtenerHeroesArr = async() => {
    const heroesArr = [];
    for (const id of heroesIds) {
        // buscarHeroeAsync(id).then(heroe => heroesArr.push(heroe));
        const heroe = await buscarHeroeAsync(id);
        heroesArr.push(heroe);
    }
    // setTimeout(() => {
    //     console.log('Obtener heroes');
    //     console.table(heroesArr);
    // }, 1000);
    return heroesArr;
};*/
/*
export const ObtenerHeroesArr = async() => {
    const heroesArr = [];
    for (const id of heroesIds) {
        heroesArr.push(buscarHeroe(id));

    }
    // setTimeout(() => {
    //     console.log('Obtener heroes');
    //     console.table(heroesArr);
    // }, 1000);
    return await Promise.all(heroesArr);
};*/
export const ObtenerHeroesArr = async() => {

    return await Promise.all(heroesIds.map(buscarHeroe));
};
// export const ObtenerHeroesArr = async() => await Promise.all(heroesIds.map(buscarHeroe));

export const obtenerHeroeAwait = async(id) => {

    try {
        const heroe = await buscarHeroeAsync(id);
        return heroe;
    } catch (err) {
        console.log('CATCH!!!');
        return {
            nombre: 'Sin Nombre',
            poder: 'Sin Poder'
        };
    }
};