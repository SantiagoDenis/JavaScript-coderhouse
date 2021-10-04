
//clase 8 y 9: juego de memoria para las aeronaves

document.addEventListener('DOMContentLoaded', () => {


    //opciones de las tarjetas
    const cardArray = [
        {
            name: 'enterprise',
            img: './imgs/enterprise.jpg'
        },
        {
            name: 'enterprise',
            img: './imgs/enterprise.jpg'
        },
        {
            name: 'prometheus',
            img: './imgs/prometheus.jpg'
        },
        {
            name: 'prometheus',
            img: './imgs/prometheus.jpg'
        },
        {
            name: 'endurance',
            img: './imgs/interestellar.jpg'
        },
        {
            name: 'endurance',
            img: './imgs/interestellar.jpg'
        },
        {
            name: 'covenant',
            img: './imgs/covenant.jpg'
        },
        {
            name: 'covenant',
            img: './imgs/covenant.jpg'
        },
        {
            name: 'USS Sulaco',
            img: './imgs/USS Sulaco.webp'
        },
        {
            name: 'USS Sulaco',
            img: './imgs/USS Sulaco.webp'
        },
        {
            name: 'empire',
            img: './imgs/empire.jpg'
        },
        {
            name: 'empire',
            img: './imgs/empire.jpg'
        },
        {
            name: 'discovery',
            img: './imgs/discovery.webp'
        },
        {
            name: 'discovery',
            img: './imgs/discovery.webp'
        },
        {
            name: 'millenium falcon',
            img: './imgs/milenium falcon.webp'
        },
        {
            name: 'millenium falcon',
            img: './imgs/milenium falcon.webp'
        },
    ]

    //math.random para que siempre tengan un orden diferente
    cardArray.sort(() => 0.5 - Math.random())

    //Obteniendo del html ambas etiquetas (por class y Id)
    const board = document.querySelector('.games-content')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    //creando el tablero que vamos a usar
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', './imgs/blank.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            board.appendChild(card)
        }
    }

    //function que revisa si las cards son iguales
    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if(optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', './imgs/blank.jpg')
            cards[optionTwoId].setAttribute('src', './imgs/blank.jpg')
            alert('Clikeaste la misma imagen :(')
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            alert('Encontraste las mismas imagenes!! :)')
            cards[optionOneId].setAttribute('src', './imgs/tick.png')
            cards[optionTwoId].setAttribute('src', './imgs/tick.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', './imgs/blank.jpg')
            cards[optionTwoId].setAttribute('src', './imgs/blank.jpg')
            alert('No son las mismas, intentá de nuevo')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if  (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Felicidades! Ganaste el juego!'
        }
    }

    //funcion
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
});