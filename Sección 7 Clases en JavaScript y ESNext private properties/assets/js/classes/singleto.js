class Singleton {
    static instancia; //null, undefined?
    nombre = '';

    constructor(nombre = '') {
        const a = undefined;
        console.log(a); //undefined
        console.log(!a); //true
        console.log(!!a); //false


        // console.log(Singleton.instancia);
        if (!!Singleton.instancia) {
            return Singleton.instancia;
        }
        Singleton.instancia = this;
        this.nombre = nombre;

        // return this;
    }
}
const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('SpiderMan');
const instancia3 = new Singleton('SuperMan');

console.log(`Nombre en la instancia 1 es: ${instancia1.nombre}`);
console.log(`Nombre en la instancia 2 es: ${instancia2.nombre}`);
console.log(`Nombre en la instancia 3 es: ${instancia3.nombre}`);