// timer
class countdown {
    constructor(btValid) {
        this.btValid = btValid;
        this.tempsData = document.querySelector("#tempsData");

        this.addMin = 20;

        //this.count = null;

        this.countDownDate = new Date().getTime() + this.addMin * 60000;

        this.btValid.addEventListener("click", this.start.bind(this));

    }

    timer() {
        this.countDown = this.countDownDate

        this.now = new Date().getTime();

        this.distance = this.countDown - this.now;


        this.minutes = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));


        this.seconds = Math.floor((this.distance % (1000 * 60)) / 1000);

        this.tempsData.innerHTML = this.minutes + "m" + this.seconds + "s";

        sessionStorage.setItem("timer", this.distance);

        if (this.distance < 0) {
            clearInterval(this.count);
            this.tempsData.innerHTML = "écoulé !"
        }

        //add a if on sessionstorage timer check p3
    }

    start() {
        this.count = setInterval(this.timer.bind(this), 1000);
    }
}

const btValid = document.querySelector("#btValid");

const timer = new countdown(btValid);