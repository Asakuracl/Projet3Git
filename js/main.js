//anime button on slider

$(".jqButton").hide();

$("#slideImage").on("mouseover", function () {
    $(".jqButton").animate({
        height: "show"
    }, 500)
});

// for burger menu
$("#buttonMenu").on("click", function () {
    $("#myLinks").animate({
        height: "toggle"
    }, 600, "swing")
});


/*
this.buttonMenu = document.querySelector("#buttonMenu");

if (this.buttonMenu.addEventListener) {
    this.buttonMenu.addEventListener("click", myFunction)
}

function myFunction() {
    const x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }

}
*/

//anime canvas pop

/* casse le code !
$("#formulBouton").on("click", function () {
    $("#formul").add("#formulBouton").animate({
        opacity: "hide"
    }, 800)
});
*/
/*
$("#formulBouton").on("click", function () {
    $("#canvas").animate({
        opacity: "1"
    }, 1000)
});
*/