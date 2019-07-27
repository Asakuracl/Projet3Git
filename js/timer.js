// timer
class countdown {
    constructor(btValid) {
        this.btValid = btValid;
        this.tempsData = document.querySelector("#tempsData");

        this.textData = document.querySelector("#textData");

        this.btReserve = document.querySelector("#formulBouton");

        this.btReserve.addEventListener("click", this.clean.bind(this));

        this.addressData = document.querySelector("#addressData");

        this.textData = document.querySelector("#textData");
        this.nomData = document.querySelector("#nomData");

        this.nomValue = document.querySelector("#nomValue");

        this.prenomValue = document.querySelector("#prenomValue");

        //minute configuration
        this.addMin = 20;

        //add the time with +20min
        this.countdownTimer = new Date().getTime() + this.addMin * 60000;

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
            this.tempsData.innerHTML = "écoulé !"
        }

    }

    timerOn() {
        //to clear to sessionstorage, remove below
        //sessionStorage.removeItem("timerDistance");
        //sessionStorage.clear()

        if (sessionStorage.getItem("timerDistance") > 0) {

            this.textData.style.opacity = "1";
            this.nomData.innerHTML = localStorage.getItem("nom");
            this.addressData.innerHTML = localStorage.getItem("address");
            this.nomValue.innerHTML = localStorage.getItem("nomValue");
            this.prenomValue.innerHTML = localStorage.getItem("prenomValue");

            this.countdownTimer = sessionStorage.getItem("saveTimer");

            this.start();

        }
    }

    //add clean on reserved
    clean() {

        //sessionStorage.removeItem("timerDistance");
        sessionStorage.clear()
        //clearInterval(this.count);
    }


    start() {
        this.count = setInterval(this.timer.bind(this), 1000);
    }

}

const btValid = document.querySelector("#btValid");

const timer = new countdown(btValid);