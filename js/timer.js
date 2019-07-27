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

        this.addMin = 20;

        this.countDownDate = new Date().getTime() + this.addMin * 60000;

        this.btValid.addEventListener("click", this.start.bind(this));

        this.timerOn();

    }

    timer() {

        this.now = new Date().getTime();

        this.distance = this.countDownDate - this.now;

        this.minutes = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));


        this.seconds = Math.floor((this.distance % (1000 * 60)) / 1000);

        this.tempsData.innerHTML = this.minutes + "m" + this.seconds + "s";

        this.getTimer = sessionStorage.setItem("getTimer", this.distance);

        this.saveTimer = sessionStorage.setItem("saveTimer", this.countDownDate);


        if (this.distance < 0) {
            clearInterval(this.count);
            this.tempsData.innerHTML = "écoulé !"
        }

    }

    //add a if on sessionstorage timer check p3

    timerOn() {

        //sessionStorage.removeItem("getTimer");
        //sessionStorage.clear()

        if (sessionStorage.getItem("getTimer") > 0) {

            this.textData.style.opacity = "1";
            this.nomData.innerHTML = localStorage.getItem("nom");
            this.addressData.innerHTML = localStorage.getItem("address");
            this.nomValue.innerHTML = localStorage.getItem("nomValue");
            this.prenomValue.innerHTML = localStorage.getItem("prenomValue");

            this.countDownDate = sessionStorage.getItem("saveTimer");

            this.start();

        }
    }

    //add clean on reserved
    clean() {

        //sessionStorage.removeItem("getTimer");
        sessionStorage.clear()

        //clearInterval(this.count);

    }


    start() {
        this.count = setInterval(this.timer.bind(this), 1000);
    }

}

const btValid = document.querySelector("#btValid");

const timer = new countdown(btValid);