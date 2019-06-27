// Reserve 

class reservation {
    constructor(btReserve) {
        this.btReserve = btReserve;
        this.bike = document.querySelector("#stationBikes");
        this.canvasHead = document.querySelector("#canvasHead");
        //
        this.btReserve.addEventListener("click", this.reserve.bind(this));
        //
    }

    //
    reserve() {
        this.bike.innerHTML -= 1;
        this.canvasHead.display = "block";
    }
    //
}

const btReserve = document.querySelector("#formulBouton");

const reserve = new reservation(btReserve);