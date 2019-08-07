// timer
class countdown {
    constructor(btValid) {
        this.btValid = btValid;
        this.tempsData = document.querySelector("#tempsData");

        this.reservationData = document.querySelector("#reservationData");

        this.addressData = document.querySelector("#addressData");

        this.nomData = document.querySelector("#nomData");

        this.nomValue = document.querySelector("#nomValue");

        this.prenomValue = document.querySelector("#prenomValue");

        this.btCancelReservation = document.querySelector("#btCancelReservation");

        this.formulBouton = document.querySelector("#formulBouton");

        this.formulBouton.addEventListener("click", this.reset.bind(this));

        this.btCancelReservation.addEventListener("click", this.reset.bind(this));

        //minute configuration
        this.addMin = 20;

        this.btValid.addEventListener("click", this.start.bind(this));

        this.timerOn();
    }

    timer() {
        this.now = new Date().getTime();

        this.distance = this.countdownTimer - this.now;

        this.minutes = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));

        this.seconds = Math.floor((this.distance % (1000 * 60)) / 1000);

        this.tempsData.innerHTML = this.minutes + "m" + this.seconds + "s";

        this.timerDistance = sessionStorage.setItem("timerDistance", this.distance);

        this.saveTimer = sessionStorage.setItem("saveTimer", this.countdownTimer);

        if (this.distance < 0) {
            clearInterval(this.count);
            sessionStorage.clear();
            this.tempsData.innerHTML = "écoulé !"
        }
    }

    timerOn() {
        if (sessionStorage.getItem("timerDistance") > 0) {
            this.reservationData.style.opacity = "1";
            this.nomData.innerHTML = localStorage.getItem("nom");
            this.addressData.innerHTML = localStorage.getItem("address");
            this.nomValue.innerHTML = localStorage.getItem("nomValue");
            this.prenomValue.innerHTML = localStorage.getItem("prenomValue");
            this.start();
        }
    }

    cancel() {
        //to clear the sessionstorage
        clearInterval(this.count);
        sessionStorage.clear();
        this.tempsData.innerHTML = "Votre réservation est annulé !";
    }

    start() {
        //add the time with +20min
        this.countdownTimer = new Date().getTime() + Math.floor(this.addMin * 60000);

        //get savetimer on refresh
        if (sessionStorage.getItem("timerDistance") > 0) {
            this.countdownTimer = sessionStorage.getItem("saveTimer");
        }
        this.count = setInterval(this.timer.bind(this), 1000);
    }
}

const btValid = document.querySelector("#btValid");

const timer = new countdown(btValid);