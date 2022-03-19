document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      },
      {
        name: 'cake',
        img: 'images/cake.jpg'
      },
      {
        name: 'pancake',
        img: 'images/pancake.jpg'
      },
      {
        name: 'sushi',
        img: 'images/sushi.png'
      },
      {
        name: 'tempura',
        img: 'images/tempura.jpg'
      },
      {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      },
      {
        name: 'cake',
        img: 'images/cake.jpg'
      },
      {
        name: 'pancake',
        img: 'images/pancake.jpg'
      },
      {
        name: 'sushi',
        img: 'images/sushi.png'
      },
      {
        name: 'tempura',
        img: 'images/tempura.jpg'
      }
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    const HighScore = document.querySelector('#endresult')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
    let score = 0
    let highscore = 0
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank2.jpeg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank2.jpeg')
        cards[optionTwoId].setAttribute('src', 'images/blank2.jpeg')
        alert('You have clicked the same image!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
        score += 1000
      } else {
        cards[optionOneId].setAttribute('src', 'images/blank2.jpeg')
        cards[optionTwoId].setAttribute('src', 'images/blank2.jpeg')
        score -= 100
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = score
      if  (cardsWon.length === cardArray.length/2) {
        if (highscore < score){
          HighScore.textContent = score
        }
        var answer = window.confirm('Try Again ?');
        if (answer){
          score = 0
          resultDisplay.textContent = score
          cardsWon = []
          for (let i = 0; i < cardArray.length; i++) {
            cards[i].remove()
          }
          createBoard()
        } else {
          resultDisplay.textContent = 'Congratulations! You found them all!'
        }
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })