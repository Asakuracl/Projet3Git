//add the map

class leafMap {
    constructor(map) {

        this.map = map;
        this.urlAkey = "https://api.jcdecaux.com/vls/v1/stations?contract=toulouse&apiKey=034bd9ac4f75e74fe7ca15956aec17853c048759";

    }

    setMarker(reponse) {

        this.stations = JSON.parse(reponse);

        for (let station of this.stations) {
            this.markers = L.marker([station.position.lat, station.position.lng]).addTo(map);

            //on markers click add station information
            this.markers.addEventListener("click", function () {

                document.querySelector("#stationName").innerHTML = station.name;
                document.querySelector("#stationAddress").innerHTML = station.address;
                document.querySelector("#stationStatus").innerHTML = "Ouvert";
                document.querySelector("#stationStand").innerHTML = station.bike_stands;
                document.querySelector("#stationBikes").innerHTML = station.available_bikes;

                //show name & button only on available bikes, when click on markers
                this.hidden = document.querySelector("#formulInput");
                //this.btHidden = document.querySelector('#formulBouton');


                if (station.available_bikes !== 0) {
                    this.hidden.style.display = "block";
                    //this.btHidden.style.display = "block";
                } else {
                    this.hidden.style.display = "none";
                    //this.btHidden.style.display = "none";
                    stationStatus.innerHTML = "fermée";
                }
            });
        }
    }

    ajaxGet(url, callback) {
        let req = new XMLHttpRequest();
        req.open("GET", url);
        req.addEventListener("load", function () {
            if (req.status >= 200 && req.status < 400) {
                // Appelle la fonction callback en lui passant la réponse de la requête
                callback(req.responseText);
            } else {
                console.error(req.status + " " + req.statusText + " " + url);
            }
        });
        req.addEventListener("error", function () {
            console.error("Erreur réseau avec l'URL " + url);
        });
        req.send(null);
    }

    init() {
        this.ajaxGet(this.urlAkey, this.setMarker.bind(this))
    };


}


const map = L.map("mapVelo").setView([43.6, 1.43], 14);
L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.fr/open-data/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 18

}).addTo(map);

const mymap = new leafMap(map);

mymap.init();