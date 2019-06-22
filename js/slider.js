//Slider

class sliderShow {
    constructor(images, container) {
        this.images = images;
        this.container = container;
        this.variable = 0;
        this.dist = -900;
        this.temps = 5000;
        this.interv = null;
        this.demarre = false;

        //bouton

        this.buttonLeft = document.querySelector("#leftArrow");
        this.buttonLeft.addEventListener("click", this.buttonPrev.bind(this));

        this.buttonRight = document.querySelector("#rightArrow");
        this.buttonRight.addEventListener("click", this.buttonNext.bind(this));

        this.buttonPaus = document.querySelector("#buttonPaus");
        this.buttonPaus.addEventListener("click", this.buttonStop.bind(this));

        //keyboard
        document.addEventListener("keydown", this.keyboard.bind(this));

    }

    // Changement d'image auto
    sliderAuto() {

        /* pas possible ?
        for (this.variable < this.images.length - 1; this.variable++;) {
            this.container.style.marginLeft = (this.variable * this.dist) + "px";
        }
        */

        if (this.variable > this.images.length - 1) {
            this.variable = 0;
        }
        this.container.style.marginLeft = (this.variable * this.dist) + "px";
        this.variable++;

    }

    // Change image with whith click on button
    buttonNext() {

        if (this.variable > this.images.length - 1) {
            this.variable = 0;
        }
        this.container.style.marginLeft = (this.variable * this.dist) + "px";
        this.variable++;
    }

    buttonPrev() {

        if (this.variable < 0) {
            this.variable = this.images.length - 1;
        }

        this.container.style.marginLeft = (this.variable * this.dist) + "px";
        this.variable--;
    }

    buttonStop() {
        if (this.demarre) {
            this.interv = setInterval(this.sliderAuto.bind(this), this.temps);

        } else {
            clearInterval(this.interv);
        }
        this.demarre = !this.demarre;
    }

    // Change image with keyboard
    keyboard(e) {
        if (e.keyCode === 39) {
            this.buttonNext();
        } else if (e.keyCode === 37) {
            this.buttonPrev();
        }
    };


    //activer interval
    lancerDiap() {
        this.interv = setInterval(this.sliderAuto.bind(this), this.temps);
    }

}


const images = document.querySelectorAll("li");

let container = document.querySelector("ul");

const slider = new sliderShow(images, container);


//Pour lancer le sliderAuto, enlever commentaire
slider.lancerDiap();