// import { init } from "./js/chistes.page";
// init();

// import { obtenerUsuarios } from "./js/http-provider";
// import { init } from "./js/usuarios-page";


// obtenerUsuarios().then(console.log);
// init();
import * as CRUD from './js/crud-provider';

CRUD.getUsuario(2).then(console.log);
CRUD.crearUsuario({
    name: 'Joel',
    job: 'Ebanista'
}).then(console.log);