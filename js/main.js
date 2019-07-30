//anime button on slider

$(".jqButton").hide();

$("#slideImage").on("mouseover", function () {
    $(".jqButton").animate({
        height: "show"
    }, 500)
});

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