// Reserve 

class reservation {
    constructor(btReserve) {
        this.btReserve = btReserve;

        this.bike = document.querySelector("#stationBikes");
        this.formul = document.querySelector("#formul");
        this.formulBt = document.querySelector("#formulBouton");
        this.regexId = /.+\w/;

        this.input = document.querySelector("#formulInput");

        this.nom = document.querySelector("#Nom");

        this.pnom = document.querySelector("#Pnom");

        this.helpId = document.getElementById("helpId");

        /*
                this.signature = new SignaturePad(this.canvas);
        
                //this.signature.backgroundColor = "rgb(255,255,255)";
                this.signature.minWidth = 1;
                this.signature.maxWidth = 4;
                this.signature.penColor = "rgb(204, 159, 24)";
        */
        this.canvas = document.querySelector("#canvas");
        this.canvas.style.opacity = "0";

        this.signature = new SignaturePad(this.canvas, {
            minWidth: 1,
            maxWidth: 1,
            penColor: "rgb(204, 159, 24)",
            backgroundColor: "rgba(52,41,34, 1)"
        })

        this.canvasHead = document.querySelector("#canvasHead");
        //
        this.btReserve.addEventListener("click", this.reserve.bind(this));

        this.btValid = document.querySelector("#btValid");
        this.btReset = document.querySelector("#btReset");
        this.btReset.addEventListener("click", this.clear.bind(this))
    }

    //

    reserve() {
        //enlever commentaire une fois prog ok

        if ((this.nom.validity.valueMissing) || (this.pnom.validity.valueMissing)) {
            this.helpId.innerHTML = "Id manquant !"
        } else if ((!this.regexId.test(this.nom.value)) || (!this.regexId.test(this.pnom.value))) {
            this.helpId.innerHTML = "Id invalide !"
        } else {
            //localStorage.setItem("Nom", this.nom.value);
            //localStorage.setItem("Pnom", this.pnom.value);
            this.helpId.innerHTML = "";
            this.btReserve.style.opacity = "0";
            this.formul.style.opacity = "0";
            this.formul.style.zIndex = "-1";
            this.canvas.style.opacity = "1";
            this.
        }
    }

    clear() {
        this.signature.clear();
    }


}


const btReserve = document.querySelector("#formulBouton");

const reserve = new reservation(btReserve);