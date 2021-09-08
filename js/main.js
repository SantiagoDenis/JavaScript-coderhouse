
// Algoritmo: ¿Cuantos años humanos tiene tu mascota en comparación tuya?
//Al algoritmo de la clase anterior, se le han agregado condicionales para que se pueda calcular no solo la edad de perros, sino tambien de otras 6 mascotas.

let dog = 1 //la esperanza de vida promedio de un perro es de 11 años y la esperanza de vida promedio humana es de 77. La edad del perro se multiplica *7 para ser un año humano.
let cat = 2 // el cálculo se torna más complejo: el primer año de vida del gato equivale a 15 años de edad en humanos, mientras que el segundo año solo equivale a 10 años humanos. Cuando el gato es completamente adulto, a partir aproximadamente del 3er año, cada año gatuno equivale a 4 años humanos.
let turtle = 3 //una tortuga doméstica vive 20 años apróx (esto sin incluir tortugas "libres" marinas o terrestres que tienen una esperanza de vida de 100 años). Por lo que un año de tortuga son 4 humanos.
let hamster = 4 //la esperanza de vida de un hámster no pasa de 4 años; por lo que un año de hámster equivale a 19 años humanos.
let bird = 5 //considerando las aves domésticas solamente, como un canario, tienen una esperanza de vida de 10 a 11 años en condiciones optimas. Por lo que reutilizaremos el código para calcular perros.
let fish = 6 //existe una variada cantidad de peces que pueden ser adoptados como mascota. No obstante, considerando los más populares (goldfish, guppy, pez payaso, etc), tienen una esperanza de vida de 2 años. (38 años humanos = 1 año de pez).
let rabbit = 7//un conejo domestico tiene 9 años de esperanza de vida promedio.  Un año humano = 9 años de conejo.

let userName = prompt("Ingrese su nombre: "); //Nombre del usuario

let welcome = parseInt(prompt("Hola " + userName + "! Si quieres continuar el quiz presiona el botón aceptar, de lo contrario, presiona 9")); //let que utilizaremos al finar del while para definir un camino

let equivalent = "";

let result = "";

while(welcome != 9, welcome != 1) { //comienzo del while que excluye dos numeros para que el usuario pueda elegir un camino (los detalles se encuentran debajo, junto al let welcome)

    let petName = prompt(userName + ", " + "ingresa el nombre de tu mascota: "); //nombre de la mascota

    let petKind = parseInt(prompt(userName + " por favor, introducí el tipo de mascota que es " + petName + ", siendo 1 para perro, 2 para gato, 3 para tortuga, 4 para hámster, 5 para pájaro, 6 para pez y 7 para conejo "));

    let petAge = parseInt(prompt("Ahora, ingresa la edad de " + petName)); //edad de la mascota

    switch (petKind) { //switch que cumple un rol similar al if que se encontraba previamente, solo que esta un un bucle
        case 1:
            result = petAge * 7;
            alert (petName + " tiene " + result + " años humanos ;)");
            break;
        case 2:
            if (petAge == 1) {
                result = petAge * 15;
                alert (petName + " tiene " + result + " años humanos ;)");
                break;
            }else if (petAge == 2) {
                result = ((petAge - 1) * 10) + 15;
                alert (petName + " tiene " + result + " años humanos ;)");
                break;
            }else {
                result = ((petAge - 2) * 4) + 25;
                alert (petName + " tiene " + result + " años humanos ;)");
                break;
            }
        case 3:
            result = petAge * 4;
            alert (petName + " tiene " + result + " años humanos ;)");
            break;
        case 4:
            result = petAge * 19;
            alert (petName + " tiene " + result + " años humanos ;)");
            break;
        case 5:
            result = petAge * 7;
            alert (petName + " tiene " + result + " años humanos ;)");
            break;
        case 6:
            result = petAge * 38;
            alert (petName + " tiene " + result + " años humanos ;)");
            break;
        case 7:
            result = petAge * 9;
            alert (petName + " tiene " + result + " años humanos ;)");
            break;
        default:
            alert ("No has ingresado el dato correcto :(");
            break;
    }
    welcome = parseInt(prompt("¡Bien hecho " + userName + "! " + "Ahora, ingresa 9 para salir, 1 si quieres ver la edad que tendrá tu mascota por diez años en el futuro, o toca el botón aceptar para seguir viendo la edad de más animales!"));//aquí esta el uso del let welcome para que elija un camino el usuario. En caso de que elija 9 saldrá, si elije 1 irá al for de abajo o sino continua con el bucle para poner otra mascota.
    if (welcome == 1) { //se encuentra el if que permite entrar al for
        for (let i = 1; i <= 10; i++) { //el for que hace un calculo para encontrar la edad de la mascota previamente sellecionada en un futuro
            alert ("Dentro de " + i + " años, tu mascota tendrá " + ((result / petAge) * i + result) + " años de edad");
        }
    }
}

