// timer
class countdown {
    constructor(btValid) {
        this.btValid = btValid;
        this.tempsData = document.querySelector("#tempsData");

        this.addMin = 20;

        this.countDownDate = new Date().getTime() + this.addMin * 60000;

        this.btValid.addEventListener("click", this.start.bind(this));

    }

    timer() {
        this.countDown = this.countDownDate

        this.now = new Date().getTime();

        this.distance = this.countDown - this.now;
        console.log(this.distance)

        this.minutes = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));
        console.log(this.minutes)

        this.seconds = Math.floor((this.distance % (1000 * 60)) / 1000);
        console.log(this.seconds)

        this.tempsData.innerHTML = this.minutes + "m" + this.seconds + "s";
        // ajouter un if si inf à 0
    }

    start() {
        this.count = setInterval(this.timer.bind(this), 1000);
    }
}

const btValid = document.querySelector("#btValid");

const timer = new countdown(btValid);