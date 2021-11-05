/*========== set up ==========*/
//decidí hacer todo sin jQuery y emplear en su lugar vanilla js (uso la api ISS tracker y una librería de mapas para poder mostrar la ubicación de la ISS en tiempo real visualmente)

/* integrando la libreria, haciendo el map y tiles */
const mymap = L.map('issMap').setView([0, 0], 1);

const attribuiton = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tlieUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const tiles = L.tileLayer(tlieUrl, { attribuiton })

tiles.addTo(mymap);

/* haciendo el marker y el icon de la iss */
const issIcon = L.icon({
    iconUrl: './imgs/issSvg.png',
    iconSize: [50, 23],
    iconAnchor: [25, 16],

})

const marker = L.marker([0, 0], { icon: issIcon }).addTo(mymap);

/* integrando la api */
const apiUrl = "https://api.wheretheiss.at/v1/satellites/25544"

let firstTime = true;

async function getISS() {
    const response = await fetch (apiUrl);
    const data = await response.json();
    const { latitude, longitude } = data;

    marker.setLatLng([latitude, longitude]);
    //un if para arreglar el bug del zoom al actualizarse
    if (firstTime) {
        mymap.setView([latitude, longitude], 2);
        firstTime = false;
    }

    document.getElementById("lat").textContent = latitude.toFixed(3);
    document.getElementById("lon").textContent = longitude.toFixed(3);
}

getISS();

//hace que se actualize automaticamente para ver el recorrido de la iss
setInterval(getISS, 1000);
