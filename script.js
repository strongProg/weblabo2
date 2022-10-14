import Deck from "./deck.js"

const deck = new Deck()
console.log(deck.cards)

const list  = document.querySelector(player-card-slot)
const Text = document.querySelector('.text') 

let joueur1, joueur2

demarrer_jeux()
function demarrer_jeu() {
    const deck = new Deck()
    desk.brassage()

    const deckCouper = Math.ceil(deck.nbreCartes/2)
    joueur1 = new Deck(deck.cartes.slice(0, deckCouper))
    joueur2 = new Deck(deck.cartes.slice(deckCouper, nbreCartes))
    console.log(joueur1)
    console.log(joueur2)

/*netoyer_ecran()*/
}


