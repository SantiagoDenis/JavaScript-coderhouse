
/* ========== Las cards de tickets ========== */
const ticketsContainer = document.querySelector('#tickets-container');

const ticketsArray = [
    {
        id: 1,
        name: "Enterprise",
        img: "./imgs/enterprise.jpg",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, itaque consectetur nemo corrupti impedit.",
        price: "$100.000",
        time: "meses"
    },
    {
        id: 2,
        name: "Prometheus",
        img: "./imgs/prometheus.jpg",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, itaque consectetur nemo corrupti impedit.",
        price: "$200.000",
        time: "2 meses"
    },
    {
        id: 3,
        name: "Endurance",
        img: "./imgs/interestellar.jpg",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, itaque consectetur nemo corrupti impedit.",
        price: "$300.000",
        time: "3 meses"
    },
    {
        id: 4,
        name: "Covenant",
        img: "./imgs/covenant.jpg",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, itaque consectetur nemo corrupti impedit.",
        price: "$400.000",
        time: "4 meses"
    },
    {
        id: 5,
        name: "USS Sulaco",
        img: "./imgs/USS Sulaco.webp",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, itaque consectetur nemo corrupti impedit.",
        price: "$500.000",
        time: "5 meses"
    },
    {
        id: 6,
        name: "Devastator",
        img: "./imgs/empire.jpg",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, itaque consectetur nemo corrupti impedit.",
        price: "$600.000",
        time: "6 meses"
    },
    {
        id: 7,
        name: "Discovery",
        img: "./imgs/discovery.webp",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, itaque consectetur nemo corrupti impedit.",
        price: "$700.000",
        time: "7 meses"
    },
    {
        id: 8,
        name: "Millenium Falcon",
        img: "./imgs/milenium falcon.webp",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, itaque consectetur nemo corrupti impedit.",
        price: "$800.000",
        time: "8 meses"
    }
];



ticketsArray.forEach( (ticket) => {
    const ticketItem = document.createElement("div")
    ticketItem.classList.add("cards1")
    ticketItem.innerHTML = `
                    <div class="img-container">
                        <img src="${ticket.img}" alt="${ticket.name}">
                        <button class="bag-btn">
                            <i class="fas fa-shopping-cart"></i>
                            reservar un asiento
                        </button>
                    </div>
                    <div class="title-container">
                        <h2>${ticket.name}</h2>
                    </div>
                    <div class="text-container">
                        <h3>Precio: ${ticket.price}</h3>
                        <h3>Tiempo de viaje ${ticket.time}</h3>
                        <p>${ticket.desc}</p>
                    </div>
    `;

ticketsContainer.appendChild(ticketItem);

})



/* ========== Las cards de planetas ========== */

const cardsContainer = document.querySelector('#cards-container')


const cardsArray = [
    {
        id: 1,
        name: "mercury",
        img: "./imgs/mercury.jpg",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, itaque consectetur nemo corrupti impedit.",
        cardPlanet: {
            gravity: 3.7,
            age: .24
        }
    },
    {
        id: 2,
        name: "venus",
        img: "./imgs/venus.jpg",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, itaque consectetur nemo corrupti impedit.",
        cardPlanet: {
            gravity: 8.8,
            age: .61
        }
    },
    {
        id: 3,
        name: "earth",
        img: "./imgs/earth.jpg",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, itaque consectetur nemo corrupti impedit.",
        cardPlanet: {
            gravity: 9.8,
            age: 1
        }
    },
    {
        id: 4,
        name: "mars",
        img: "./imgs/mars.jpg",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, itaque consectetur nemo corrupti impedit.",
        cardPlanet: {
            gravity: 3.7,
            age: 1.88
        }
    },
    {
        id: 5,
        name: "jupiter",
        img: "./imgs/jupiter.jpg",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, itaque consectetur nemo corrupti impedit.",
        cardPlanet: {
            gravity: 24.8,
            age: 11.86
        }
    },
    {
        id: 6,
        name: "saturn",
        img: "./imgs/saturn.jpg",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, itaque consectetur nemo corrupti impedit.",
        cardPlanet: {
            gravity: 10.4,
            age: 29.47
        }
    },
    {
        id: 7,
        name: "uranus",
        img: "./imgs/uranus.jpg",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, itaque consectetur nemo corrupti impedit.",
        cardPlanet: {
            gravity: 8.8,
            age: 84.07
        }
    },
    {
        id: 8,
        name: "neptune",
        img: "./imgs/neptune.jpg",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, itaque consectetur nemo corrupti impedit.",
        cardPlanet: {
            gravity: 11.1,
            age: 164.88
        }
    },
    {
        id: 9,
        name: "pluto",
        img: "./imgs/pluto.jpg",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, itaque consectetur nemo corrupti impedit.",
        cardPlanet: {
            gravity: .62,
            age: 248
        }
    }
];
//los botones para dar vuelta la tarjeta solo funcionan en mercurio pero no en los demás... ¿Por qué?
cardsArray.forEach( (planet) => {
    const planetItem = document.createElement("div")
    planetItem.classList.add("cards2")
    planetItem.innerHTML = `
    <div class="card-inner is-flipped">
        <div class="card-face card-front">
            <div class="img-container">
                <img src=${planet.img} alt="${planet.name}">
            </div>
            <div class="title-container">
                <h2>${planet.name}</h2>
            </div>
            <div class="text-container">
                <p>${planet.desc}</p>
                <button class="in">Calcular</button>
            </div>
        </div>
        <div class="card-face card-back">
            <div class="header">
                <h2>See your weight and age in ${planet.name}</h2>
            </div>
            <div class="body">
                <form class="form">
                    <input required class="year" type="number" placeholder="YYYY">
                    <input required class="weight" type="number" placeholder="Weight(kg)">
                    <input class="calculate" value="send" type="submit"></input>
                    <button class="out">Volver</button>
                </form>
                <div class="results-container">
                </div>
            </div>
        </div>
    </div>
    `

cardsContainer.appendChild(planetItem);

})

//no los selecciona; la card no gira porque no selecciona estas clases (con solo el "querySelector" si funciona pero solamente para la primer card). ¿Cómo hacer que funcione en todas?)
const planetCard = document.querySelectorAll('.card-inner');
const planetCardBtnOut = document.querySelectorAll('.out');
const planetCardBtnIn = document.querySelectorAll('.in');
const inputYear = document.querySelectorAll('.year');
const inputWeight = document.querySelectorAll('.weight');
const form = document.querySelectorAll('.form');
const submitBtn = document.querySelectorAll('.calculate')
const results = document.querySelectorAll('.results-container')


//haciendo que la card gire al tocarla en .planets, para mostrar otro contenido
//la clase is-flipped es la que no hace display
    planetCardBtnIn.onclick =  () => {
        planetCard.classList.add('is-flipped');
    };

    planetCardBtnOut.onclick = () => {
        planetCard.classList.remove('is-flipped');
    };

    //la operación de el peso y la edad

/*     let weight = inputWeight.value
    let age = inputYear.value

    let resultW = weight * cardsArray.cardPlanet.gravity / 9.8
    let resultA = age * 1 / cardsArray.cardPlanet.age


results.innerHTML = ` <h3>Your weight in ${planet.name} is: ${resultW} </h3>
<h3>Your age in ${planet.name} is: ${resultA} </h3> ` */



//carrito; recien comienzo a hacerlo

/* cardsArray.forEach( (planet) => {
    const div = document.createElement("div")
    div.classList.add("cards")
    div.innerHTML = `
    <div class="img-container">
        <img src="/imgs/enterprise.jpg" alt="Mercurio">
        <button class="bag-btn" data-id="1">
            <i class="fas fa-shopping-cart"></i>
            reservar un asiento
        </button>
        </div>
        <div class="title-container">
            <h2>Enterprise : Mercury</h2>
        </div>
        <div class="text-container">
            <h3>Nave</h3>
            <h3>$400.000</h3>
        </div>
    </div>
    `

cardsContainer.appendChild(div);

}) */
