// Reserve 

class reservation {
    constructor(btReserve) {
        this.btReserve = btReserve;
        this.bike = document.querySelector("#stationBikes");
        this.formul = document.querySelector("#formul");

        this.input = document.querySelector("#formulInput");

        this.nom = document.querySelector("#Nom");

        this.pnom = document.querySelector("#Pnom");

        this.helpId = document.getElementById("helpId");


        this.canvasHead = document.querySelector("#canvasHead");
        //
        this.btReserve.addEventListener("click", this.reserve.bind(this));

        this.input.addEventListener("input", this.checkName.bind(this));

    }

    //

    reserve() {
        //enlever commentaire une fois prog ok

        //this.formul.style.zIndex = "-1";
        //this.formul.style.opacity = "0";
        //this.btReserve.style.opacity = "0";
        //

        //this.name.addEventListener("blur", this.checkInput);


    }

    checkName(e) {
        this.regexId = /a/;
        if ((this.nom.validity.valueMissing) || (this.pnom.validity.valueMissing)) {
            this.helpId.innerHTML = "Id manquant !"
        } else if (!this.regexId.test(e.target.value)) {
            this.helpId.innerHTML = "Id invalide !"
        } else {
            localStorage.setItem("Nom", this.nom.value);
            localStorage.setItem("Pnom", this.pnom.value);
            this.helpId.innerHTML = "";
            this.btReserve.style.display = "block";
        }

    }


}


const btReserve = document.querySelector("#formulBouton");

const reserve = new reservation(btReserve);