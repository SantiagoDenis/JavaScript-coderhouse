    //definiendo variables que usaré
    const grid = document.querySelector('.grid')
    const resultsDisplay = document.querySelector('.results')
    let currentShooterIndex = 202
    let width = 15
    let direction = 1
    let invadersId
    let goingRight = true
    let aliensRemoved = []
    let results = 0

    //for para hacer los divs (el tablero es de 15 * 15, por lo tanto son 225)
    for (let i = 0; i < 225; i++) {
    const square = document.createElement('div')
    grid.appendChild(square)
    }

    const squares = Array.from(document.querySelectorAll('.grid div'))

    //definiendo la aparición de los invasores alienígenas, para luego iterar sobre este array y mostrarlos
    const alienInvaders = [
    0,1,2,3,4,5,6,7,8,9,
    15,16,17,18,19,20,21,22,23,24,
    30,31,32,33,34,35,36,37,38,39
    ]

    //UI de los aliens, dandoles la clase con el estilo escrito en scss
    function draw() {
    for (let i = 0; i < alienInvaders.length; i++) {
        if(!aliensRemoved.includes(i)) {
        squares[alienInvaders[i]].classList.add('invader')
        }
    }
    }

    draw()

    //function que voy a utilizar en el movimiento de los aliens
    function remove() {
    for (let i = 0; i < alienInvaders.length; i++) {
        squares[alienInvaders[i]].classList.remove('invader')
    }
    }

    //agrego a la nave
    squares[currentShooterIndex].classList.add('shooter')

    //utilizando eventos del teclado para mover la nave con un switch
    function moveShooter(e) {
    squares[currentShooterIndex].classList.remove('shooter')
    switch(e.key) {
        case 'ArrowLeft':
            if (currentShooterIndex % width !== 0) currentShooterIndex -=1
            break
        case 'ArrowRight' :
            if (currentShooterIndex % width < width -1) currentShooterIndex +=1
            break
    }
    //muestro la nave en base a donde se mueve
    squares[currentShooterIndex].classList.add('shooter')
    }
    //llamo la function cuando se toca la tecla
    document.addEventListener('keydown', moveShooter)

    //todo el movimiento de los invasores: moviendo de un lado del tablero al otro, y haciendo que bajen una fila cada vez que lo hagan
    function moveInvaders() {
    const leftEdge = alienInvaders[0] % width === 0
    const rightEdge = alienInvaders[alienInvaders.length - 1] % width === width -1
    remove() //quito los estilos para que no se siga viendo

    if (rightEdge && goingRight) {
        for (let i = 0; i < alienInvaders.length; i++) {
        alienInvaders[i] += width +1
        direction = -1
        goingRight = false
        }
    }

    if(leftEdge && !goingRight) {
        for (let i = 0; i < alienInvaders.length; i++) {
        alienInvaders[i] += width -1
        direction = 1
        goingRight = true
        }
    }

    for (let i = 0; i < alienInvaders.length; i++) {
        alienInvaders[i] += direction
    }

    draw()

    //se pierde el juego cuando los aliens lleguen a tocar a la nave (cuando coexistan en el mismo "square")
    if (squares[currentShooterIndex].classList.contains('invader', 'shooter')) {
        resultsDisplay.innerHTML = 'Los invasores han ganado'
        clearInterval(invadersId)
    }

    //se pierde también si llegan al final del tablero
    for (let i = 0; i < alienInvaders.length; i++) {
        if(alienInvaders[i] > (squares.length)) {
        resultsDisplay.innerHTML = 'Los invasores han ganado'
        clearInterval(invadersId)
        }
    }
    //si no hay más aliens: el usuario ganó
    if (aliensRemoved.length === alienInvaders.length) {
        resultsDisplay.innerHTML = 'Ganaste!!'
        clearInterval(invadersId)
    }
    }
    invadersId = setInterval(moveInvaders, 600)

    //para dispararle a los aliens
    function shoot(e) {
    let laserId
    let currentLaserIndex = currentShooterIndex //esto debería hacer que el disparo sea en la misma columa que la nave. No funciona.

    if (currentLaserIndex < width){
        squares[currentLaserIndex].classList.remove('laser')
        clearInterval(laserId)
        return
    }
    //moviendo el laser desde la nave hasta el alien (o el final del tablero)
    function moveLaser() {
        if (currentLaserIndex < width){
            squares[currentLaserIndex].classList.remove('laser')
            clearInterval(laserId)
            return
        }
        squares[currentLaserIndex].classList.remove('laser')
        currentLaserIndex -= width
        squares[currentLaserIndex].classList.add('laser')

        //definiendo lo que va a pasar cuando haya contacto entre el laser y el alien
        if (squares[currentLaserIndex].classList.contains('invader')) {
        squares[currentLaserIndex].classList.remove('laser')
        squares[currentLaserIndex].classList.remove('invader')
        squares[currentLaserIndex].classList.add('boom')

        //timeout para que la animación de explosión no dure mucho
        setTimeout(()=> squares[currentLaserIndex].classList.remove('boom'), 300)
        clearInterval(laserId)

        //moviendo al alien al array de aliens disparados y aumentando el puntaje
        const alienRemoved = alienInvaders.indexOf(currentLaserIndex)
        aliensRemoved.push(alienRemoved)
        results++
        resultsDisplay.innerHTML = results
        console.log(aliensRemoved)

        }

    }
    //el display de la function con la flecha
    switch(e.key) {
        case 'ArrowUp':
        laserId = setInterval(moveLaser, 100)
    }
    }
    //se ejecuta cuando ya se presionó la tecla
    document.addEventListener('keydown', shoot)