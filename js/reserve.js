// Reserve 

class reservation {
    constructor(btReserve) {
        this.btReserve = btReserve;
        this.bike = document.querySelector("#stationBikes");
        this.formul = document.querySelector("#formul");
        this.regexId = /a/;

        this.input = document.querySelector("#formulInput");

        this.nom = document.querySelector("#Nom");

        this.pnom = document.querySelector("#Pnom");

        this.helpId = document.getElementById("helpId");


        this.canvasHead = document.querySelector("#canvasHead");
        //
        this.btReserve.addEventListener("click", this.reserve.bind(this));


    }

    //

    reserve() {
        //enlever commentaire une fois prog ok

        if ((this.nom.validity.valueMissing) || (this.pnom.validity.valueMissing)) {
            this.helpId.innerHTML = "Id manquant !"
        } else if ((!this.regexId.test(this.nom.value)) || (!this.regexId.test(this.pnom.value))) {
            this.helpId.innerHTML = "Id invalide !"
        } else {
            localStorage.setItem("Nom", this.nom.value);
            localStorage.setItem("Pnom", this.pnom.value);
            this.helpId.innerHTML = "";
            /*
            this.formul.style.zIndex = "-1";
            this.formul.style.opacity = "0";
            this.btReserve.style.opacity = "0";
            */
        }
    }


}


const btReserve = document.querySelector("#formulBouton");

const reserve = new reservation(btReserve);