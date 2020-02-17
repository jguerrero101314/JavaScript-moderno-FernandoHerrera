function crearPersona(nombre, apellido) {
    return {
        nombre,
        apellido
    };
}
const persona = crearPersona("Joel", "Guerrero");
console.log(persona);

const persona2 = (nombre, apellido) => {
    return {
        nombre,
        apellido
    };
};

const persona3 = (nombre, apellido) => ({
    nombre,
    apellido
});
console.log(persona3("Ruth", "Andino"));

function imprimeArgumentos() {
    console.log(arguments);
}

const imprimeArgumentos2 = (...args) => {
    // console.log(args);
    return args;
};
imprimeArgumentos(10, true, false, "joel", "hola");
// imprimeArgumentos2(10, true, false, 'joel', 'hola');
// const argumentos = imprimeArgumentos2(10, true, false, 'joel', 'hola');
// console.log({ argumentos });

const [casado, vivo, nombre, saludo] = imprimeArgumentos2(
    10,
    true,
    false,
    "joel",
    "hola"
);
console.log({
    casado,
    vivo,
    nombre,
    saludo
});

const { apellido: nuevoApellido } = crearPersona("Joel", "Guerrero");
console.log({
    nuevoApellido
});

const tony = {
    nombre: "Tony Stark",
    codeName: "Iron man",
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.7
    },
    trajes: ["Mark I", "Mark V", "Hulkbuster"]
};

// const imprimePropiedades = (personaje) => {
//     console.log(personaje.nombre);
//     console.log(personaje.codeName);
//     console.log(personaje.vivo);
//     console.log(personaje.edad);
//     console.log(personaje.trajes);
// }

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {
    edad = edad || 0;

    console.log({
        nombre
    });
    console.log({
        codeName
    });

    console.log({
        vivo
    });

    console.log({
        edad
    });

    console.log({
        trajes
    });
};
imprimePropiedades(tony);