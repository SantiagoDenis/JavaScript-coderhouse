    /* ========== Space Travel ========== */
    //Un juego como el del pou del cohete, donde hay que mantener al cohete entre los postes por los que pasa

    //el setup, donde declaro variables que voy a usar
    let block = document.getElementById("block");
    let hole = document.getElementById("hole");
    let character = document.getElementById("character");
    let jumping = 0; //va a ser igual a 0 a no ser que la function jump se ejecute
    let counter = 0;

    //la function va a ejecutarse cada vez que la animación se ejecute
    hole.addEventListener('animationiteration', () => {
        let random = -((Math.random()*300)+150); //math random para que el agujero se encuentre en diferentes alturas de manera random
        hole.style.top = random + "px";
        counter++;
    });

    //function interval que se ejecuta cada 10 milisegundos; hace que la nave caiga, como si fuese la gravedad
    setInterval( function() {
        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if (jumping == 0) { //un if para que no se ejecute la function al jumping ser = 1
            character.style.top = (characterTop + 3) + "px";
        }
        let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
        let cTop = -(500-characterTop); //para solucionar que el top del hole es negativa. creo que es la mejor forma de hacerlo
        if((characterTop > 480) || (blockLeft < 20) && (blockLeft >- 50) && ((cTop < holeTop) || (cTop > holeTop + 130 /***/))) { //definir cuando acaba el juego: si la nave choca el final del tablero (primer if). Si block esta tocando la nave de cualquier forma (primer y segundo if despues del or): Si chocas contra un bloque, el juego termina, si pasas sobre el agujero el juego continúa. (/***/aclaración: utilizo 130px porque es la altura real de 150px - la altura de la nave de 20px)
            alert("Has estrellado la nave. Puntuación:" + counter)
            character.style.top = 100 + "px";
            counter = 0;  //reseteo el counter para que no siga sumando
        }
    }, 10);

    //funcion que utilizaré para que la nave vuele de a pequeños saltos
    function jump() {
        jumping = 1; //jumping es 1
        let jumpCount = 0;
        let jumpInterval = setInterval(function() { //es prácticamente la misma funcion que la que simula la gravedad, solo que en lugar de sumar 3 px, resto 5
            let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
            if ((characterTop > 6) && (counter < 15)) {
                character.style.top = (characterTop - 5) + "px";
            }
            if (jumpCount > 20) {
                clearInterval(jumpInterval);
                jumping = 0; //cuando se acaba la funcion, jumping es 0 de nuevo
            }
            jumpCount++;
        }, 10)
    }