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
    },
    ' ultima-Pelicula': 'Infinity war'
};
console.log('Nombre:', personaje.nombre);
console.log('Nombre:', personaje['nombre']);
console.log('Edad:', personaje.edad);
console.log('Coors:', personaje.coords.lat);


console.log('No. Trajes:', personaje.trajes.length);
console.log('Ultimo Traje:', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('Vivo', personaje[x]);
console.log('Ultima pelicula', personaje[" ultima-Pelicula"]);



//mas detalles

delete personaje.edad; //elimina propiedad del objeto
console.log(personaje);

personaje.casado = true; //agregar

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

console.log(personaje);

Object.freeze(personaje); //bloquea el objeto no me deja agregar mas nada al objeto
personaje.dinero = 10000000;
personaje.direccion.ubicacion = 'Panama';
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);

console.log(propiedades, valores);