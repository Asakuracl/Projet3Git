// timer
class countdown {
    constructor(btValid, minNow) {
        this.btValid = btValid;
        this.minNow = minNow;
        this.tempsData = document.querySelector("#tempsData");
        this.btValid.addEventListener("click", this.start.bind(this));

    }

    start() {
        this.x = setInterval(function () {
            this.now = new Date().getMinutes() + 20;
            this.nowTest = new Date().getMinutes()

            //this.distance = this.minNow - this.now;
            this.distance = this.now - this.nowTest;
            console.log(this.distance)

            this.minutes = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));
            console.log(this.minutes)
            this.seconds = Math.floor((this.distance % (1000 * 60)) / (1000));
            console.log(this.seconds)
            this.tempsData.innerHTML = this.minutes + "m" + this.seconds + "s";
        }, 1000);
    }
}

const btValid = document.querySelector("#btValid");
const minNow = new Date().getMinutes();


const timer = new countdown(btValid, minNow);