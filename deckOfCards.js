

class Card {
  constructor(suit, rank) {
    this.name = rank + ' of ' + suit + 's'
    this.suit = suit;
    this.rank = rank;

    //return {name:this.name, suit:this.suit, rank:this.rank}
  }
}

class Deck {
    constructor () {
      this.deck = []
    }
    /*
     * Generate a new deck of cards
     */
    generateDeck ()  {
      const suits = ['Spade', 'Diamond', 'Club', 'Heart']
      const ranks = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King']

      for (let suit in suits) {
          for (let rank in ranks) {
              this.deck.push(new Card(suits[suit], ranks[rank]))
        }
      }
      return this.deck
    }
    /*
    * Fisher–Yates Shuffle
    * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
    */
    shuffleDeck () {
      const deck = this.deck
      let m = deck.length, i

      while (m) { // m = card counter
        i = Math.floor(Math.random() * m--); //decrement card counter
        [deck[m], deck[i]] = [deck[i], deck[m]]; //swap array elements
      }
      return this.deck;
    }
    /*
     * Deal the cards
     */
    deal () {
      if (this.deck.length > 0) {
        return this.deck.shift()
      }
      else {
        return "No more cards"
      }
    }
    /*
     * print out the deck of cards
     */
    printDeck () {
      for(this.card in this.deck)  {
        console.log(this.deck[this.card])
      }
    }

    replaceCard () {
      this.deck.unshift()
    }

    clearDeck () {
      this.deck = []
      //this.deck.length = 0
    }

  }
