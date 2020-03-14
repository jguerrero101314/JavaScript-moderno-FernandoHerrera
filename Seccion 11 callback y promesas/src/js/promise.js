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
export const buscarHeroe = (id) => {

    const heroe = heroes[id];


    return new Promise((resolve, reject) => {
        if (heroe) {
            resolve(heroe);
        } else {
            reject(`No existe un heroe con el id ${id}`);
        }
    });

}