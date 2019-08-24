// Reserve 

class reservation {
    constructor(btReserve) {
        this.btReserve = btReserve;

        this.bike = document.querySelector("#stationBikes");
        this.formul = document.querySelector("#formul");
        this.formulBt = document.querySelector("#formulBouton");

        //add regular expression
        this.regexId = /.+\w/;

        this.input = document.querySelector("#formulInput");

        this.nom = document.querySelector("#Nom");

        this.prenom = document.querySelector("#Prenom");

        this.helpId = document.getElementById("helpId");
        //work
        this.canvas = document.querySelector("#canvas");

        this.ctx = this.canvas.getContext("2d");

        this.painting = false;

        this.canvas.addEventListener("mousedown", this.signatureStart.bind(this));

        this.canvas.addEventListener("mouseup", this.signatureEnd.bind(this));

        this.canvas.addEventListener("mousemove", this.signatureDraw.bind(this));

        this.canvas.addEventListener("load", this.signatureDraw.bind(this));
        //work

        /* work on it
        // add signature pad API
        this.signature = new SignaturePad(this.canvas, {
            minWidth: 1,
            maxWidth: 1,
            penColor: "rgb(204, 159, 24)",
            backgroundColor: "rgba(52,41,34, 1)"
        })
        */

        this.canvasHead = document.querySelector("#canvasHead");

        this.addressData = document.querySelector("#addressData");

        this.reservationData = document.querySelector("#reservationData");
        this.nomData = document.querySelector("#nomData");

        this.nomValue = document.querySelector("#nomValue");

        this.prenomValue = document.querySelector("#prenomValue");

        this.btReserve.addEventListener("click", this.reserve.bind(this));

        this.btCanvas = document.querySelector("#boutonCanvas");

        this.btValid = document.querySelector("#btValid");
        this.btReset = document.querySelector("#btReset");

        this.btReset.addEventListener("click", this.clear.bind(this));

        this.btValid.addEventListener("click", this.empty.bind(this));

        this.btValid.addEventListener("click", this.valid.bind(this));

    }

    reserve() {

        if ((this.nom.validity.valueMissing) || (this.prenom.validity.valueMissing)) {
            this.helpId.innerHTML = "Id manquant !"
        } else if ((!this.regexId.test(this.nom.value)) || (!this.regexId.test(this.prenom.value))) {
            this.helpId.innerHTML = "Id invalide !"
        } else {
            //this.reservationData.style.opacity = "0";
            this.helpId.innerHTML = "";
            this.btReserve.style.opacity = "0";
            this.formul.style.opacity = "0";
            this.formul.style.zIndex = "-1";
            this.canvasHead.style.opacity = "1";
            localStorage.setItem("nomValue", this.nom.value);
            localStorage.setItem("prenomValue", this.prenom.value);
        }
    }

    signatureStart() {
        this.painting = true;
    }

    signatureEnd() {
        this.painting = false;
    }

    signatureDraw(e) {
        /*
        if (!this.painting) return;
        this.ctx.strokeStyle = "red";
        this.ctx.lineWidth = 10;
        this.ctx.lineCap = "round";
        this.ctx.lineTo(e.clientX, e.clientY);
        this.ctx.stroke();
        console.log(this.ctx.lineWWidth);
        */
    }
    clear() {
        this.signature.clear();
    }

    empty() {

    }

    valid() {
        if (this.signature.isEmpty()) {
            alert("Merci de signer s'il vous plait.")

        } else {
            this.reservationData.style.opacity = "1";
            this.canvas.style.opacity = "0";
            this.btCanvas.style.opacity = "0";
            this.nomData.innerHTML = localStorage.getItem("nom");
            this.addressData.innerHTML = localStorage.getItem("address");
            this.nomValue.innerHTML = localStorage.getItem("nomValue");
            this.prenomValue.innerHTML = localStorage.getItem("prenomValue");
        }

    }

}

const btReserve = document.querySelector("#formulBouton");

const reserve = new reservation(btReserve);