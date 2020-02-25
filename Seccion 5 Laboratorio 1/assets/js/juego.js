/**
 * 2C =  Two of Clubs 
 * 2D =  Two of Diaminds 
 * 2H =  Two of Hearts
 * 2S =  Two of Spades
 */
let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const esepciales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0,
    puntosComputadora = 0;

//referencias del html
const btnPedir = document.querySelector('#btnPedir');
const puntosHTML = document.querySelectorAll('small');
//esta funcion crea una nueva baraja
const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }
    for (let tipo of tipos) {
        for (let especial of esepciales) {
            deck.push(especial + tipo);
        }
    }
    // console.log(deck);
    deck = _.shuffle(deck);
    return deck;
}
crearDeck();

//esta funcion me permite tomar una carta
const pedirCarta = () => {
    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();


    return carta;
}
pedirCarta();

const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);

    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10 :
        valor * 1;
}
const valor = valorCarta(pedirCarta());


btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHTML[0].innerHTML = puntosJugador;

});