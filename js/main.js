//ajout de la map
/*
const mymap = L.map("mapVelo").setView([43.6, 1.43], 14);

L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.fr/open-data/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 18

}).addTo(mymap);
*/

//ajax
/* 

ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=toulouse&apiKey=034bd9ac4f75e74fe7ca15956aec17853c048759", function (reponse) {
    // Transforme la réponse en tableau d'objets JavaScript
    const stations = JSON.parse(reponse);
    //console.log(stations)
    // Affiche les stations

    for (let station of stations) {
        //console.log(station);
        //console.log(station.position.lat)
        const marker = L.marker([station.position.lat, station.position.lng]).addTo(mymap);

        //marker.bindPopup("Hello world!");
        marker.addEventListener('click', function () {
            
            const infos = [
                station.name, 
                station.address,
                
                "Etat station: " +station.status,
                
                "Places diponibles: "+station.bike_stands,
                
                "Vélos diponibles: "+ station.available_bikes];
            
            
            for (let info of infos){
               
                const stationInfo = document.createElement("p");
                stationInfo.id = "defaut";
                stationInfo.textContent = info;
            
                
                const choix = document.getElementById("choix");
        
                
                if (choix.hasChildNodes()){
                    choix.removeChild(choix.firstChild)
                } 
                
               choix.appendChild(stationInfo)
      
            }
              
        })

    }
   
});

*/

/*

const info = station.name + "\n" + station.address + "\n" + "Cette station est: " + station.status + "\n" + "Place disponible: " + station.bike_stands + "\n" + "Vélos disponible: " + station.available_bikes;

const info = station.name + "\n" + station.address;
            const info2 = "Cette station est: " + station.status;
            // comment sauter une ligne ???
            document.querySelector("#choix").textContent += info;
            document.querySelector("#choix").innerHTML += `<p>${info2}</p>`
*/

//const marker = L.marker([43.6, 1.44]).addTo(mymap);



/*
const req = new XMLHttpRequest();
req.open("GET", "https://api.jcdecaux.com/vls/v1/stations?contract=toulouse&apiKey=034bd9ac4f75e74fe7ca15956aec17853c048759");
req.addEventListener("load", function () {
    if (req.status >= 200 && req.status < 400) { // Le serveur a réussi à traiter la requête
                } else {
                    // Affichage des informations sur l'échec du traitement de la requête
                    console.error(req.status + " " + req.statusText);
                }
            });
req.addEventListener("error", function () {
                    // La requête n'a pas réussi à atteindre le serveur
                    console.error("Erreur réseau?");
                });
                req.send(null);
                */
                
                /*
                GET https://api.jcdecaux.com/vls/v1/stations?contract=Bikeloc&apiKey=034bd9ac4f75e74fe7ca15956aec17853c048759
                */
                
                /*
const mainJs = {
                    slider: {
                    test: slider.lancerDiap()
            }
        }
        */
        
        /*
        
        - Station
        - Slider
        - Map
        - Reservation
*/