// Algoritmo: ¿Cuál es tu edad o peso en otros planetas?

//Const para calcular peso
const mercuryGravity = 3.7;
const venusGravity = 8.8;
const earthGravity = 9.8;
const marsGravity = 3.7;
const jupiterGravity = 24.8;
const saturnGravity = 10.4;
const uranusGravity = 8.8;
const neptuneGravity = 11.1;

//const para calcular edad
const mercuryAge = .24;
const venusAge = .61;
const earthAge = 1;
const marsAge = 1.88;
const jupiterAge = 11.86;
const saturnAge = 29.47;
const uranusAge = 84.07;
const neptuneAge = 164.88;

var userName = prompt("Ingrese su nombre: "); //Nombre del usuario

let welcome = numberConvertor( prompt("Hola " + userName + "! Si quieres saber tu peso en otros planetas pulsa 1, si quieres saber tu edad en otros planetas pulsa 2, para salir, presiona el boton aceptar")); //let que utilizaremos al finar del while para definir un camino

var result = "";

//while de peso. Aquí uso una regla de tres simple llamando la función weightOperation que calcula el peso terrestre de la persona, lo procesa y devuelve un valor segun lo introducido de la misma en base al planeta que haya escogido.
while (welcome == 1) {

var weight = numberConvertor( prompt("Ingrese su peso en kg aquí: ")); //etapa 1

var planet = numberConvertor( prompt(userName + " por favor, introducí el planeta en el que quieres saber tu peso, siendo 1 para mercurio, 2 para venus, 3 para marte, 4 para jupiter, 5 para saturno, 6 para urano y 7 para neptuno ")) //etapa 2

    switch (planet) { //etapa 3
        case 1:
            result = mercuryGravity;
            weightOperation()
            alert (userName + ", tienes " + weightOperation() + " kg en Mercurio! ;)");
            break;
            case 2:
            result = venusGravity;
            weightOperation()
            alert (userName + ", tienes " + weightOperation() + " kg en Venus! ;)");
            case 3:
            result = marsGravity;
            weightOperation()
            alert (userName + ", tienes " + weightOperation() + " kg en Marte! ;)");
            break;
            case 4:
            result = jupiterGravity;
            weightOperation()
            alert (userName + ", tienes " + weightOperation() + " kg en Júpiter! ;)");
            break;
            case 5:
            result = saturnGravity;
            weightOperation()
            alert (userName + ", tienes " + weightOperation() + " kg en Saturno! ;)");
            break;
            case 6:
            result = uranusGravity;
            weightOperation()
            alert (userName + ", tienes " + weightOperation() + " kg en Urano! ;)");
            break;
            case 7:
            result = neptuneGravity;
            weightOperation()
            alert (userName + ", tienes " + weightOperation() + " kg en Neptuno! ;)");
            break;
            default:
            alert ("No has ingresado el dato correcto :(");
            break;
        }
        welcome = numberConvertor(prompt("¡Bien hecho " + userName + "! " + "Ahora, ingresa el boton aceptar para salir,pulsa 2 para ver tu edad en otros planetas o pulsa 1 para seguir viendo tu peso en otros planetas!"));
    }

//while de edad. Utilizo una regla de tres simple de la funcion ageOperation para asi calcular la edad del usuario equivalente al planeta que elijió
while (welcome == 2) {

    var age = numberConvertor( prompt("Ingrese sus años de edad aquí: ")); //etapa 1

    var planet = numberConvertor( prompt(userName + " por favor, introducí el planeta en el que quieres saber tu edad, siendo 1 para mercurio, 2 para venus, 3 para marte, 4 para jupiter, 5 para saturno, 6 para urano y 7 para neptuno ")) //etapa 2

        switch (planet) { //etapa 3
            case 1:
                result = mercuryAge;
                ageOperation()
                alert (userName + ", tienes " + ageOperation() + " años de edad en Mercurio! ;)");
                break;
                case 2:
                result = venusAge;
                ageOperation()
                alert (userName + ", tienes " + ageOperation() + " años de edad en Venus! ;)");
                case 3:
                result = marsAge;
                ageOperation()
                alert (userName + ", tienes " + ageOperation() + " años de edad en Marte! ;)");
                break;
                case 4:
                result = jupiterAge;
                ageOperation()
                alert (userName + ", tienes " + ageOperation() + " años de edad en Júpiter! ;)");
                break;
                case 5:
                result = saturnAge;
                ageOperation()
                alert (userName + ", tienes " + ageOperation() + " años de edad en Saturno! ;)");
                break;
                case 6:
                result = uranusAge;
                ageOperation()
                alert (userName + ", tienes " + ageOperation() + " años de edad en Urano! ;)");
                break;
                case 7:
                result = neptuneAge;
                ageOperation()
                alert (userName + ", tienes " + ageOperation() + " años de edad en Neptuno! ;)");
                break;
                default:
                alert ("No has ingresado el dato correcto :(");
                break;
            }
            welcome = numberConvertor(prompt("¡Bien hecho " + userName + "! " + "Ahora, ingresa aceptar para salir, pulsa 1 para ver tu peso en otros planetas o pulsa 2 para seguir viendo tu edad en otros planetas!"));
        }

//las tres funciones que solicitan el desafío complementario
   function weightOperation() {
        const planetWeight = weight * result / earthGravity;
        return planetWeight;
   }

   function ageOperation() {
       const planetAge = earthAge * age / result;
        return planetAge;
   }

    function numberConvertor(pNumber) {
        const isANumber = !isNaN(pNumber);
        if (isANumber) {
            return parseInt(pNumber);
        }
        return 0;
    }
