
//creando un carrusel con los links a cada juego
$(document).ready(function() {
    $(".next").on("click", function() {
        let currentImg = $(".active");
        let nextImg = currentImg.next();

        if (nextImg.length) {
            currentImg.removeClass("active");
            nextImg.addClass("active");
        }
    });
    $(".prev").on("click", function() {
        let currentImg = $(".active");
        let prevImg = currentImg.prev();

        if (prevImg.length) {
            currentImg.removeClass("active");
            prevImg.addClass("active");
        }
    });
});

///creando un aviso a ese carrusel
$('.slider-inner').prepend('<div id="welcome"></div>')
$('#welcome').css('position', 'absolute')
             .css('height', '100%')
             .css('width', '100%')
             .css('z-index', '100')
             .css('background-color', 'black')
             .css('color', 'red')
             .css('text-align', 'center')
             .fadeIn(1000)
             .delay(2000)
             .fadeOut(1000);

$('#welcome').prepend('<h1 id="welcome-sign"><====Presiona los botones para ver más juegos====></h1>')
$('#welcome-sign').css('margin-top', '23%')