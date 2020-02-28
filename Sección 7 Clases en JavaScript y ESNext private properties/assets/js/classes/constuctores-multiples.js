class Persona {
    static porObjeto({ nombre, apellido, pais }) {

        return new Persona(nombre, apellido, pais);

    }
    constructor(nombre, apellido, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }
    getInfo() {
        console.log(`info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }
}
const nombre1 = 'Melissa',
    apellido1 = 'Flores',
    pais = ' Honduras';

const joel = {
    nombre: 'Joel',
    apellido: 'Guerrero',
    pais: 'Panama'
}

const persona1 = new Persona(nombre1, apellido1, pais);
const persona2 = Persona.porObjeto(joel);
persona1.getInfo();
persona2.getInfo();