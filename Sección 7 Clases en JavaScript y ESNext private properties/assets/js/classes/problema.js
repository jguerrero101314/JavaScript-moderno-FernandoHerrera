const jguerrero = {
    nombre: 'Joel',
    edad: 22,
    imprimr() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}
const pedro = {
    nombre: 'pedro',
    edad: 15,
    imprimr() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}
const melisass = {
    nombre: 'Melissa',
    edad: 35,
    imprimr() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

jguerrero.imprimr();

function Persona(nombre, edad) {
    console.log("se ejecuto esta linea");
    this.nombre = nombre;
    this.edad = edad;

    this.imprimr = function() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}
const maria = new Persona('Maria', 18);
const melisa = new Persona('melisas', 35);
console.log(maria);
maria.imprimr();
melisa.imprimr();