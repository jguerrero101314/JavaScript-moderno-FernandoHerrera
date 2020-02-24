/**
 * 2C =  Two of Clubs 
 * 2D =  Two of Diaminds 
 * 2H =  Two of Hearts
 * 2S =  Two of Spades
 */
let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const esepciales = ['A', 'J', 'Q', 'K'];

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
    console.log(deck);
    return deck;
}
crearDeck();

//esta funcion me permite tomar una carta
const pedirCarta = () => {
    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    console.log(deck);
    console.log(carta); //carta debe ser de la baraja

    return '2C';
}
pedirCarta();

const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);

    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10 :
        valor * 1;
}
const valor = valorCarta('KD');
console.log({ valor });