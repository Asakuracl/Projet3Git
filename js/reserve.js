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

        // canvas configuration
        this.canvas = document.querySelector("#canvas");
        this.ctx = this.canvas.getContext("2d");
        this.draw = 0;
        this.painting = false;

        // canvas listener

        //mouse
        this.canvas.addEventListener("mousedown", this.signatureStart.bind(this));

        this.canvas.addEventListener("mouseup", this.signatureEnd.bind(this));

        this.canvas.addEventListener("mousemove", this.signatureDraw.bind(this));

        //touch
        this.canvas.addEventListener("touchstart", this.signatureTouchStart.bind(this));

        this.canvas.addEventListener("touchend", this.signatureTouchEnd.bind(this));

        this.canvas.addEventListener("touchmove", this.signatureTouchDraw.bind(this));

        this.canvas.addEventListener("load", this.signatureDraw.bind(this));

        this.canvas.addEventListener("load", this.signatureTouchDraw.bind(this));

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

        this.btValid.addEventListener("click", this.valid.bind(this));
    }

    reserve() {
        if ((this.nom.validity.valueMissing) || (this.prenom.validity.valueMissing)) {
            this.helpId.innerHTML = "Identifiant manquant!"
        } else if ((!this.regexId.test(this.nom.value)) || (!this.regexId.test(this.prenom.value))) {
            this.helpId.innerHTML = "Id invalide !"
        } else {
            this.helpId.innerHTML = "";
            this.btReserve.style.opacity = "0";
            this.formul.style.opacity = "0";
            this.formul.style.zIndex = "-1";
            this.canvasHead.style.opacity = "1";
            localStorage.setItem("nomValue", this.nom.value);
            localStorage.setItem("prenomValue", this.prenom.value);
        }
    }

    //mouse
    signatureStart() {
        this.ctx.beginPath();
        this.painting = true;
    }

    signatureEnd() {
        this.painting = false;
    }

    signatureDraw(e) {
        if (!this.painting) return;
        this.ctx.strokeStyle = "#cc9f18";
        this.ctx.lineWidth = 4;
        this.ctx.lineCap = "round";
        this.ctx.lineTo(e.offsetX, e.offsetY);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(e.offsetX, e.offsetY);
        this.draw++
    }

    //touch
    signatureTouchStart() {
        this.ctx.beginPath();
        console.log("so ?")
        this.painting = true;
    }

    signatureTouchEnd() {
        this.painting = false;
    }

    signatureTouchDraw(e) {
        if (!this.painting) return;
        this.ctx.strokeStyle = "#cc9f18";
        this.ctx.lineWidth = 4;
        this.ctx.lineCap = "round";
        this.ctx.lineTo(e.touches['0'].clientX, e.touches['0'].clientY);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(e.touches['0'].clientX, e.touches['0'].clientY);
        this.draw++
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.draw = 0;
    }

    valid() {
        if (this.draw < 20) {
            alert("Merci de signer s'il vous plait.");
            this.draw = 0;
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