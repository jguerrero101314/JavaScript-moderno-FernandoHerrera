const heroes = {
    capi: {
        nombre: 'Capitan america',
        poder: 'Aguantar golpes'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Mucho dinero'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'Super fuerza'
    }
}
export const buscarHeroe = (id, callback) => {

    const heroe = heroes[id];
    if (heroe) {
        callback(null, heroe);
    } else {
        //un error
        callback(`No existe un heroe con el id ${id}`);

    }
    // callback(heroe);
}