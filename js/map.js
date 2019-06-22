//ajout de la map
// working on this oop :

class leafMap {
    constructor(map) {

        this.map = map;
        this.urlAkey = "https://api.jcdecaux.com/vls/v1/stations?contract=toulouse&apiKey=034bd9ac4f75e74fe7ca15956aec17853c048759";

        //this.stations = null;
        //this.markers = null;
        /*
                this.stationName = document.querySelector("#stationName");
                this.stationAddress = document.querySelector("#stationAddress");
                this.stationStatus = document.querySelector("#stationStatus");
                this.stationStand = document.querySelector("#stationStand");
                this.stationBikes = document.querySelector("#stationBikes");
        */

    }

    setMarker(reponse) {
        this.stations = JSON.parse(reponse);

        for (let station of this.stations) {
            this.markers = L.marker([station.position.lat, station.position.lng]).addTo(map);
            //vérifier statut close console.log(station.status)

            //on markers click add station information
            this.markers.addEventListener("click", function () {

                stationName.innerHTML = station.name;
                stationAddress.innerHTML = station.address;
                stationStatus.innerHTML = station.status;
                stationStand.innerHTML = station.bike_stands;

                //show name, button only on available bikes, when click on markers
                this.hidden = document.querySelectorAll(".hidden");

                if (station.available_bikes === 0) {
                    for (let i = 0; i < this.hidden.length; i++) {
                        this.hidden[i].style.display = "none";
                    }

                    stationBikes.innerHTML = station.available_bikes;
                } else if (station.available_bikes > 0) {
                    for (let i = 0; i < this.hidden.length; i++) {
                        this.hidden[i].style.display = "block";
                    }

                    stationBikes.innerHTML = station.available_bikes;

                }

                //change english word status
                if (station.status === "OPEN") {
                    this.open = station.status
                    this.change = this.open.replace("OPEN", "Ouvert");
                    stationStatus.innerHTML = this.change;
                } else {
                    this.close = station.status
                    this.change = this.close.replace("CLOSED", "Fermée");
                    stationStatus.innerHTML = this.change;
                }

            });
        }
    }

    init() {
        ajaxGet(this.urlAkey, this.setMarker.bind(this))
    };
}




const map = L.map("mapVelo").setView([43.6, 1.43], 14);
L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.fr/open-data/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 18

}).addTo(map);

const mymap = new leafMap(map);

mymap.init();