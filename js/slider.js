//Slider

class sliderShow {
    constructor(container, images) {
        this.container = container;
        this.images = images;
        this.variable = 0;
        this.dist = -100;
        this.temps = 5000;
        this.interv = null;
        this.demarre = false;

        //listener on click bouton

        this.buttonLeft = document.querySelector("#leftArrow");
        this.buttonLeft.addEventListener("click", this.buttonPrev.bind(this));

        this.buttonRight = document.querySelector("#rightArrow");
        this.buttonRight.addEventListener("click", this.buttonNext.bind(this));

        this.buttonPaus = document.querySelector("#buttonPaus");
        this.buttonPaus.addEventListener("click", this.buttonStop.bind(this));

        //listener on keyboard
        document.addEventListener("keydown", this.keyboard.bind(this));

    }

    // Change image with click on button
    buttonNext() {
        this.variable++;
        if (this.variable > this.container.length - 1) {
            this.variable = 0;
        }
        for (let image of this.images) {
            image.style.marginLeft = -Math.abs((this.variable * this.dist)) + "%";
        }

    }

    buttonPrev() {
        this.variable--;
        if (this.variable < 0) {
            this.variable = this.container.length - 1;
        }
        for (let image of this.images) {
            image.style.marginLeft = -Math.abs((this.variable * this.dist)) + "%";
        }
    }

    buttonStop() {
        if (this.demarre) {
            this.interv = setInterval(this.buttonNext.bind(this), this.temps);

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

    //change image auto with interval 
    lancerDiap() {
        this.interv = setInterval(this.buttonNext.bind(this), this.temps);
    }

}


const container = document.querySelectorAll(".slideImg");

const images = document.querySelector(".defaultJs");

const slider = new sliderShow(container, images);


//to start the auto slide, remove the comment below
//slider.lancerDiap();