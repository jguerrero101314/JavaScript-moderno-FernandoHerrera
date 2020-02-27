// class Persona {
//     nombre = '';
//     codigo = '';
//     frase = '';
//     constructor(nombre, codigo, frase) {
//         this.nombre = nombre;
//         this.codigo = codigo;
//         this.frase = frase;
//     }
// }
// const spiderman = new Persona('Peter Parker', 'Spider', 'Soy tu amigable vecino Spiderman');
// const ironman = new Persona('Tony Stark', 'Iron man', 'yo soy iron man');
// console.log(spiderman);
// console.log(ironman);


// class Persona {
//     nombre = '';
//     codigo = '';
//     frase = '';
//     constructor(nombre, codigo, frase) {
//         this.nombre = nombre;
//         this.codigo = codigo;
//         this.frase = frase;
//     }
//     quienSoy() {
//         console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`)
//     }
//     miFrase() {
//         this.quienSoy();
//         console.log(`${this.codigo} dice: ${this.frase}`);
//     }
// }

// console.log(spiderman);
// console.log(ironman);
// spiderman.quienSoy();
// spiderman.miFrase();
// ironman.quienSoy();
// ironman.miFrase();

class Persona {
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';
    constructor(nombre, codigo, frase) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }
    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }
    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }
    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`)
    }
    miFrase() {
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}
const spiderman = new Persona('Peter Parker', 'Spider', 'Soy tu amigable vecino Spiderman');
spiderman.quienSoy();
spiderman.setComidaFavorita = 'El pie de cereza de la tia may';

spiderman.nemesis = 'Duende verde';

console.log(spiderman.getComidaFavorita);