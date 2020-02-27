class Persona {
    nombre = '';
    codigo = '';
    frase = '';
    constructor(nombre, codigo, frase) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }
}
const spiderman = new Persona('Peter Parker', 'Spider', 'Soy tu amigable vecino Spiderman');
const ironman = new Persona('Tony Stark', 'Iron man', 'yo soy iron man');
console.log(spiderman);
console.log(ironman);