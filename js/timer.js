// timer
class countdown {
    constructor(btValid, minNow) {
        this.btValid = btValid;
        this.minNow = minNow;
        console.log(minNow)
        this.btValid.addEventListener("click", this.start.bind(this));

    }

    start() {
        this.x = setInterval(function () {
            this.now = new Date().getTime();

            this.distance =
                this.minutes = Math.floor
        })
    }
}

const btValid = document.querySelector("#btValid");
const minNow = new Date().getMinutes();


const timer = new countdown(btValid, minNow);