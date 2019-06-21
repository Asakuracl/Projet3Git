//ajout de la map
// working on this oop :

class leafMap {
    constructor(map) {

        this.map = map;
        this.urlAkey = "https://api.jcdecaux.com/vls/v1/stations?contract=toulouse&apiKey=034bd9ac4f75e74fe7ca15956aec17853c048759";

        this.stations = null;
        this.markers = null;
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

            this.markers.addEventListener("click", function () {
                stationName.innerHTML = station.name;
                stationAddress.innerHTML = station.address;
                stationStatus.innerHTML = station.status;
                stationStand.innerHTML = station.bike_stands;
                stationBikes.innerHTML = station.available_bikes;

                document.querySelector(".hidden").classList.remove("hidden");
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