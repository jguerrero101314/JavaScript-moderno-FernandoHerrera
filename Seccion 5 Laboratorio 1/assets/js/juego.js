(() => {
    "use strict";
    let deck = [];
    const tipos = ["C", "D", "H", "S"],
        esepciales = ["A", "J", "Q", "K"];

    let puntosJugadores = [];

    //referencias del html
    const divCartasJugadores = document.querySelectorAll('.divCartas'),
        btnNuevo = document.querySelector("#btnNuevo"),
        btnPedir = document.querySelector("#btnPedir"),
        btnDetener = document.querySelector("#btnDetener"),
        puntosHTML = document.querySelectorAll("small");

    //esta funcion inicializa el juego
    const inicializarJuegos = (numJugadores = 2) => {
            deck = crearDeck();
            for (let i = 0; i < numJugadores; i++) {
                puntosJugadores.push(0);

            }
        }
        //esta funcion crea una nueva baraja
    const crearDeck = () => {
        deck = [];
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
        return _.shuffle(deck);
    };


    //esta funcion me permite tomar una carta
    const pedirCarta = () => {
        if (deck.length === 0) {
            throw "No hay cartas en el deck";
        }


        return deck.pop();
    };


    const valorCarta = carta => {
        const valor = carta.substring(0, carta.length - 1);

        return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
    };

    //turno: 0 = primer juador y el ultimo de la computadora
    const acumularPuntos = (carta, turno) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        puntosHTML[turno].innerHTML = puntosJugadores[turno];

        return puntosJugadores[turno];
    }
    const crearCarta = (carta, turno) => {
            const imgCarta = document.createElement("img");
            imgCarta.src = `assets/cartas/${carta}.png`;
            imgCarta.classList.add("carta");
            divCartasJugadores[turno].append(imgCarta);
        }
        //turno de la computadora
    const turnoComputadora = (puntosMinimos) => {
        let puntosComputadora = 0;
        do {
            const carta = pedirCarta();
            acumularPuntos(carta, puntosJugadores.length - 1);
            crearCarta(carta, puntosJugadores.length - 1);
            // const imgCarta = document.createElement("img");
            // imgCarta.src = `assets/cartas/${carta}.png`;
            // imgCarta.classList.add("carta");
            // divCartasComputadora.append(imgCarta);

            if (puntosMinimos > 21) {
                break;
            }
        } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21); {
            setTimeout(() => {
                if (puntosComputadora === puntosMinimos) {
                    alert("Nadie gana :(");
                } else if (puntosMinimos > 21) {
                    alert("Computadora gana");
                } else if (puntosComputadora > 21) {
                    alert("Jugador gana");
                } else {
                    alert("Computadora gana");
                }
            }, 500);
        }
    };

    btnPedir.addEventListener("click", () => {
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta, 0);
        crearCarta(carta, 0);
        if (puntosJugador > 21) {
            console.log("Lo siento mucho, perdiste");
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        } else if (puntosJugador === 21) {
            console.warn("21, genial!");
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        }
    });
    btnDetener.addEventListener("click", () => {
        if (btnDetener) {
            btnDetener.disabled = true;
            btnPedir.disabled = true;
            turnoComputadora(puntosComputadora);
        }
    });

    btnNuevo.addEventListener("click", () => {
        console.clear();
        inicializarJuegos();
        // location.reload();
        // deck = crearDeck();


        // puntosHTML[0].innerHTML = 0;
        // puntosHTML[1].innerHTML = 0;

        // divCartasComputadora.innerHTML = "";
        // divCartasJugador.innerHTML = "";

        // btnDetener.disabled = false;
        // btnPedir.disabled = false;
    });
})();