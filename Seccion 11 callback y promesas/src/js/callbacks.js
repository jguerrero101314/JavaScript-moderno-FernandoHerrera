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
    callback(heroe);
}