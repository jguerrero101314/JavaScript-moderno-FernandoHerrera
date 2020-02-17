let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Iron man',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    }
};
console.log('Nombre:', personaje.nombre);
console.log('Nombre:', personaje['nombre']);
console.log('Edad:', personaje.edad);
console.log('Coors:', personaje.coords.lat);


console.log('No. Trajes:', personaje.trajes.length);