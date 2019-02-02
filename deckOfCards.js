class Deck {
    constructor(){
      this.deck = []
      this.sortDeck()

    }
    /*
     * Sort the deck in order of Suit and Rank
     */
    sortDeck()  {
      this.deck = []

      let card = (suit, rank) => {
              this.name = rank + ' of ' + suit
              this.suit = suit
              this.rank = rank

              return {name:this.name, suit:this.suit, rank:this.rank}
      }

      const suits = ['Clubs', 'Diamonds', 'Spades', 'Hearts']
      const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']

      for (let suit in suits) {
          for (let rank in ranks) {
              this.deck.push(card(suits[suit], ranks[rank]))
        }
      }
    }
    /*
    * Fisher–Yates Shuffle
    * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
    */
    shuffleDeck() {
      const deck = this.deck
      let m = deck.length, i

      while (m) {
        i = Math.floor(Math.random() * m--);
        [deck[m], deck[i]] = [deck[i], deck[m]];
      }
      return this.deck;
    }
    /*
     * Deal the cards
     */
    deal(){
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
    printDeck() {
      for(this.card in this.deck)  {
        console.log(this.deck[this.card])
      }
    }

  }
