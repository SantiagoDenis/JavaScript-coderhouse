
/* ========== Las cards de tickets ========== */
const ticketsContainer = document.querySelector('#tickets-container');

const ticketsArray = [
    {
        id: 1,
        name: "Enterprise",
        img: "./imgs/enterprise.jpg",
        desc: "Un vuelo a Mercurio, donde puedes tener una larga vida y prosperidad",
        price: "$100.000",
        time: "1 mes"
    },
    {
        id: 2,
        name: "Prometheus",
        img: "./imgs/prometheus.jpg",
        desc: "Un hermoso viaje a la colonia de Venus. Cuidado con tu tripulación que toca todo antes de cuestionarlo ",
        price: "$200.000",
        time: "2 meses"
    },
    {
        id: 3,
        name: "Endurance",
        img: "./imgs/interestellar.jpg",
        desc: "Un viaje a Marte con música épica y una cuestionable fuerza del amor en el aire",
        price: "$300.000",
        time: "3 meses"
    },
    {
        id: 4,
        name: "Covenant",
        img: "./imgs/covenant.jpg",
        desc: "Un viaje  a Saturno con un androide (David) para nada violento y muy filosófico",
        price: "$400.000",
        time: "4 meses"
    },
    {
        id: 5,
        name: "Discovery",
        img: "./imgs/discovery.webp",
        desc: "Viajarás a Júpiter con Hall 9000, irás dirigido por el mejor de todos los tiempos y verás colores muy raros",
        price: "$500.000",
        time: "5 meses"
    },
    {
        id: 6,
        name: "Devastator",
        img: "./imgs/empire.jpg",
        desc: "Viaja con una tripulación de clones que no saben disparar. El postre siempre es helado oscuro",
        price: "$600.000",
        time: "6 meses"
    },
    {
        id: 7,
        name: "USS Sulaco",
        img: "./imgs/USS Sulaco.webp",
        desc: "Viajarás a Neptuno con una tripulación de 7. Sólo que tu no eres el octavo pasajero",
        price: "$700.000",
        time: "7 meses"
    },
    {
        id: 8,
        name: "Millenium Falcon",
        img: "./imgs/milenium falcon.webp",
        desc: "Viajarás a Plutón con un oso y un Blade Runner. No le ganes en ajedrez al oso",
        price: "$800.000",
        time: "8 meses"
    }
];

ticketsArray.forEach( (ticket) => {
    const ticketItem = document.createElement("div")
    ticketItem.classList.add("cards1")
    ticketItem.innerHTML = `
                    <div class="img-container">
                        <img class="shop-ticket-image" src="${ticket.img}" alt="${ticket.name}">
                        <button class="bag-btn shop-ticket-button">
                            <i class="fas fa-shopping-cart"></i>
                            comprar un asiento
                        </button>
                    </div>
                    <div class="title-container">
                        <span class="shop-ticket-title"><h2>${ticket.name}</h2></span>
                    </div>
                    <div class="text-container">
                        <h3>Tiempo de viaje ${ticket.time}</h3>
                        <span class="shop-ticket-price"><h4>Precio: ${ticket.price}</h4></span>
                        <p>${ticket.desc}</p>
                    </div>
    `;

ticketsContainer.appendChild(ticketItem);

})


/* ========== carrito ========== */
function openSidebar() {
    document.querySelector('#sidebar').style.width="40%";
}
function closeSidebar() {
    document.querySelector('#sidebar').style.width="0%";
}

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    let removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (let i = 0; i < removeCartItemButtons.length; i++) {
        let button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    let quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (let i = 0; i < quantityInputs.length; i++) {
        let input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    let addToCartButtons = document.getElementsByClassName('shop-ticket-button')
    for (let i = 0; i < addToCartButtons.length; i++) {
        let button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Gracias por su compra!')
    let cartItems = document.getElementsByClassName('cart-tickets')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    let buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    let input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    let button = event.target
    let shopItem = button.parentElement.parentElement
    let title = shopItem.getElementsByClassName('shop-ticket-title')[0].innerText
    let price = shopItem.getElementsByClassName('shop-ticket-price')[0].innerText
    let imageSrc = shopItem.getElementsByClassName('shop-ticket-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    let cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    let cartItems = document.getElementsByClassName('cart-tickets')[0]
    let cartItemNames = cartItems.getElementsByClassName('cart-ticket-title')
    for (let i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('Este ticket ya fue agregado al carrito')
            return
        }
    }
    let cartRowContents = `
        <div class="cart-ticket cart-column">
            <img class="cart-ticket-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-ticket-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">Quitar</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    let cartItemContainer = document.getElementsByClassName('cart-tickets')[0]
    let cartRows = cartItemContainer.getElementsByClassName('cart-row')
    let total = 0
    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i]
        let priceElement = cartRow.getElementsByClassName('cart-price')[0]
        let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        let price = parseInt(priceElement.innerText.replace('$', ''))
        let quantity = quantityElement.value
        total = total + (price * quantity)
        let cartItemsNumber = document.querySelector('.cart-items-number')
        cartItemsNumber.innerText = cartRows.length;

    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}


/* ========== Las cards de planetas ========== */

const cardsContainer = document.querySelector('#cards-container')


const cardsArray = [
    {
        id: 1,
        name: "Mercurio",
        img: "./imgs/mercury.jpg",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, itaque consectetur nemo corrupti impedit.",
        cardPlanet: {
            gravity: 3.7,
            age: .24
        }
    },
    {
        id: 2,
        name: "Venus",
        img: "./imgs/venus.jpg",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, itaque consectetur nemo corrupti impedit.",
        cardPlanet: {
            gravity: 8.8,
            age: .61
        }
    },
    {
        id: 3,
        name: "Tierra",
        img: "./imgs/earth.jpg",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, itaque consectetur nemo corrupti impedit.",
        cardPlanet: {
            gravity: 9.8,
            age: 1
        }
    },
    {
        id: 4,
        name: "Marte",
        img: "./imgs/mars.jpg",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, itaque consectetur nemo corrupti impedit.",
        cardPlanet: {
            gravity: 3.7,
            age: 1.88
        }
    },
    {
        id: 5,
        name: "Júpiter",
        img: "./imgs/jupiter.jpg",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, itaque consectetur nemo corrupti impedit.",
        cardPlanet: {
            gravity: 24.8,
            age: 11.86
        }
    },
    {
        id: 6,
        name: "Saturno",
        img: "./imgs/saturn.jpg",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, itaque consectetur nemo corrupti impedit.",
        cardPlanet: {
            gravity: 10.4,
            age: 29.47
        }
    },
    {
        id: 7,
        name: "Urano",
        img: "./imgs/uranus.jpg",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, itaque consectetur nemo corrupti impedit.",
        cardPlanet: {
            gravity: 8.8,
            age: 84.07
        }
    },
    {
        id: 8,
        name: "Neptuno",
        img: "./imgs/neptune.jpg",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, itaque consectetur nemo corrupti impedit.",
        cardPlanet: {
            gravity: 11.1,
            age: 164.88
        }
    },
    {
        id: 9,
        name: "Plutón",
        img: "./imgs/pluto.jpg",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, itaque consectetur nemo corrupti impedit.",
        cardPlanet: {
            gravity: .62,
            age: 248
        }
    }
];

cardsArray.forEach( (planet) => {
    const planetItem = document.createElement("div")
    planetItem.classList.add("cards2")
    planetItem.innerHTML = `
    <div class="card-inner${planet.id}">
        <div class="card-face card-front">
            <div class="img-container">
                <img src=${planet.img} alt="${planet.name}">
            </div>
            <div class="title-container">
                <h2>${planet.name}</h2>
            </div>
            <div class="text-container">
                <p>${planet.desc}</p>
                <button class="in${planet.id}">Calcular</button>
            </div>
        </div>
        <div class="card-face card-back">
            <div class="header">
                <h2>Mira tu peso y edad en ${planet.name}</h2>
            </div>
            <div class="body">
                <form class="form" enctype="multipart/form-data" onsubmit="return false">
                    <input required class="year" type="number" placeholder="Edad">
                    <input required class="weight" type="number" placeholder="Peso(kg)">
                    <input class="calculate${planet.id}" value="Calcular" type="submit"></input>
                    <button class="out${planet.id}">Volver</button>
                </form>
                <div class="results-container${planet.id}">
                </div>
            </div>
        </div>
    </div>
    `

cardsContainer.appendChild(planetItem);

})

const planetCard1 = document.querySelector('.card-inner1');
const planetCard2 = document.querySelector('.card-inner2');
const planetCard3 = document.querySelector('.card-inner3');
const planetCard4 = document.querySelector('.card-inner4');
const planetCard5 = document.querySelector('.card-inner5');
const planetCard6 = document.querySelector('.card-inner6');
const planetCard7 = document.querySelector('.card-inner7');
const planetCard8 = document.querySelector('.card-inner8');
const planetCard9 = document.querySelector('.card-inner9');

const planetCardBtnOut1 = document.querySelector('.out1');
const planetCardBtnOut2 = document.querySelector('.out2');
const planetCardBtnOut3 = document.querySelector('.out3');
const planetCardBtnOut4 = document.querySelector('.out4');
const planetCardBtnOut5 = document.querySelector('.out5');
const planetCardBtnOut6 = document.querySelector('.out6');
const planetCardBtnOut7 = document.querySelector('.out7');
const planetCardBtnOut8 = document.querySelector('.out8');
const planetCardBtnOut9 = document.querySelector('.out9');

const planetCardBtnIn1 = document.querySelector('.in1');
const planetCardBtnIn2 = document.querySelector('.in2');
const planetCardBtnIn3 = document.querySelector('.in3');
const planetCardBtnIn4 = document.querySelector('.in4');
const planetCardBtnIn5 = document.querySelector('.in5');
const planetCardBtnIn6 = document.querySelector('.in6');
const planetCardBtnIn7 = document.querySelector('.in7');
const planetCardBtnIn8 = document.querySelector('.in8');
const planetCardBtnIn9 = document.querySelector('.in9');

const inputYear = document.querySelector('.year');
const inputWeight = document.querySelector('.weight');
const form = document.querySelector('.form');
const results1 = document.querySelector('.results-container1')
const results2 = document.querySelector('.results-container2')
const results3 = document.querySelector('.results-container3')
const results4 = document.querySelector('.results-container4')
const results5 = document.querySelector('.results-container5')
const results6 = document.querySelector('.results-container6')
const results7 = document.querySelector('.results-container7')
const results8 = document.querySelector('.results-container8')
const results9 = document.querySelector('.results-container9')

const submitBtn1 = document.querySelector('.calculate1')
const submitBtn2 = document.querySelector('.calculate2')
const submitBtn3 = document.querySelector('.calculate3')
const submitBtn4 = document.querySelector('.calculate4')
const submitBtn5 = document.querySelector('.calculate5')
const submitBtn6 = document.querySelector('.calculate6')
const submitBtn7 = document.querySelector('.calculate7')
const submitBtn8 = document.querySelector('.calculate8')
const submitBtn9 = document.querySelector('.calculate9')

submitBtn1.onclick = () => {
    results1.innerHTML = "Tu peso en mercurio sería de: " + parseInt(inputWeight.value * 3.7 / 9.8) + " kg y tu edad de "+ parseInt(inputYear.value / .24) + " años"
}
submitBtn2.onclick = () => {
    results2.innerHTML = "Tu peso en venus sería de: " + parseInt(inputWeight.value * 8.8 / 9.8) + " kg y tu edad de "+ parseInt(inputYear.value / .61) + " años"
}
submitBtn3.onclick = () => {
    results3.innerHTML = "No hay mucho que calcular acá. Andá para otro lado antes de que me enoje, dale"
}
submitBtn4.onclick = () => {
    results4.innerHTML = "Tu peso en mars sería de: " + parseInt(inputWeight.value * 3.7 / 9.8) + " kg y tu edad de "+ parseInt(inputYear.value / 1.88) + " años"
}
submitBtn5.onclick = () => {
    results5.innerHTML = "Tu peso en jupiter sería de: " + parseInt(inputWeight.value * 24.8 / 9.8) + " kg y tu edad de "+ parseInt(inputYear.value / 11.86) + " años"
}
submitBtn6.onclick = () => {
    results6.innerHTML = "Tu peso en saturno sería de: " + parseInt(inputWeight.value * 10.4 / 9.8) + " kg y tu edad de "+ parseInt(inputYear.value / 29.47) + " años"
}
submitBtn7.onclick = () => {
    results7.innerHTML = "Tu peso en urano sería de: " + parseInt(inputWeight.value * 8.8 / 9.8) + " kg y tu edad de "+ parseInt(inputYear.value / 84.07) + " años"
}
submitBtn8.onclick = () => {
    results8.innerHTML = "Tu peso en neptuno sería de: " + parseInt(inputWeight.value * 11.1 / 9.8) + " kg y tu edad de "+ parseInt(inputYear.value / 164.88) + " años"
}
submitBtn9.onclick = () => {
    results9.innerHTML = "Tu peso en plutón sería de: " + parseInt(inputWeight.value * .62 / 9.8) + " kg y tu edad de "+ parseInt(inputYear.value / 248) + " años"
}

    planetCardBtnIn1.onclick =  () => {
        planetCard1.classList.add('is-flipped');
    };
    planetCardBtnIn2.onclick =  () => {
        planetCard2.classList.add('is-flipped');
    };
    planetCardBtnIn3.onclick =  () => {
        planetCard3.classList.add('is-flipped');
    };
    planetCardBtnIn4.onclick =  () => {
        planetCard4.classList.add('is-flipped');
    };
    planetCardBtnIn5.onclick =  () => {
        planetCard5.classList.add('is-flipped');
    };
    planetCardBtnIn6.onclick =  () => {
        planetCard6.classList.add('is-flipped');
    };
    planetCardBtnIn7.onclick =  () => {
        planetCard7.classList.add('is-flipped');
    };
    planetCardBtnIn8.onclick =  () => {
        planetCard8.classList.add('is-flipped');
    };
    planetCardBtnIn9.onclick =  () => {
        planetCard9.classList.add('is-flipped');
    };


    planetCardBtnOut1.onclick =  () => {
        planetCard1.classList.remove('is-flipped');
    };
    planetCardBtnOut2.onclick =  () => {
        planetCard2.classList.remove('is-flipped');
    };
    planetCardBtnOut3.onclick =  () => {
        planetCard3.classList.remove('is-flipped');
    };
    planetCardBtnOut4.onclick =  () => {
        planetCard4.classList.remove('is-flipped');
    };
    planetCardBtnOut5.onclick =  () => {
        planetCard5.classList.remove('is-flipped');
    };
    planetCardBtnOut6.onclick =  () => {
        planetCard6.classList.remove('is-flipped');
    };
    planetCardBtnOut7.onclick =  () => {
        planetCard7.classList.remove('is-flipped');
    };
    planetCardBtnOut8.onclick =  () => {
        planetCard8.classList.remove('is-flipped');
    };
    planetCardBtnOut9.onclick =  () => {
        planetCard9.classList.remove('is-flipped');
    };
