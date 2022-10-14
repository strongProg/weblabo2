const imoji = ['♦','♣','♥','♠']
const valeur = ['A','2','3','4','5','6','7','8','9','10','J','K']

export default class deck {
    constructeur(cartes = nouveauDeck()) {
    this.cartes = cartes
}


get nbreCartes() {
    return this.cartes.length
}

brassage() {
    for (let i = this.nbreCartesb-1 ; i > 0; i--) {
        const newIndex = math.floor(math.random() * (i + 1))
        const ancienneValeur = this.cartes[newIndex]
        this.cartes[newIndex] = this.cartes[i]
        this.cartes[i] = ancienneValeur
    }
}

}

class Carte {
    constructeur(imoji, valeur) {
        this.imoji = imoji
        this.valeur = valeur
    }
}


function nouveauDeck() {
    return IMOJIS.map(imoji => {
        return VALEURS.map(valeur => {
            return new Carte(imoji, valeur)
        })
    })
}