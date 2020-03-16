import { buscarHeroeAsync, buscarHeroe } from "./promise";

const heroesIds = ['capi', 'iron', 'spider'];
const heroesPromesas = heroesIds.map(buscarHeroe);

// const heroesPromesas = heroesIds.map(id => buscarHeroe(id));
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

export const heroesCiclo = async() => {
    console.time('HeroesCiclo');


    // heroesPromesas.forEach(async(p) => console.table(await p));

    // for await (const heroe of heroesPromesas) {
    //     console.table(heroe);
    // }
    // const heroes = await Promise.all(heroesPromesas);
    // heroes.forEach(heroe => console.table(heroe));

    console.timeEnd('HeroesCiclo');

}

export const heroesIfAwait = async(id) => {
    if ((await buscarHeroeAsync(id)).nombre === 'Ironman') {
        console.log('Es el mejor de todos');

    } else {
        console.log('Naaaa');
    }

}