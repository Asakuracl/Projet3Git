//ajout de la map
// working on this oop :

class leafMap {
    constructor(map) {

        this.map = map;

        //this.stations = JSON.parse(reponse);
        // ajout this.marker ?


    }

    setMarker(reponse) {
        const stations = JSON.parse(reponse);

    }

    init() {
        ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=toulouse&apiKey=034bd9ac4f75e74fe7ca15956aec17853c048759", this.setMarker)
        /*
        {
            // Transforme la réponse en tableau d'objets JavaScript
            this.stations;
            console.log(this.stations);
            // Affiche les stations
            /*
            for(let station of stations) {
                //console.log(station);
                //console.log(station.position.lat);
                const marker = L.marker([station.position.lat, station.position.lng]).addTo(map);

                marker.addEventListener('click', function () {

                    //1
                    document.getElementById("stationName").innerHTML = station.name;

                    document.getElementById("stationAddress").innerHTML = station.address;

                    document.getElementById("stationStatus").innerHTML = "Etat station: " + station.status;

                    document.getElementById("stationStand").innerHTML = "Places diponibles: " + station.bike_stands;

                    document.getElementById("stationBikes").innerHTML = "Vélos diponibles: " + station.available_bikes;

                })

            }
        
        });
        */
    };
}




const map = L.map("mapVelo").setView([43.6, 1.43], 14);
L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.fr/open-data/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 18

}).addTo(map);

const mymap = new leafMap(map);

mymap.init();