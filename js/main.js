//anime button on slider

$(".jqButton").hide();

$("#slideImage").on("mouseover", function () {
    $(".jqButton").animate({
        height: "show"
    }, 800)
});

//anime canvas pop

$("#formulBouton").on("click", function () {
    $("#formul").add("#formulBouton").animate({
        opacity: "hide"
    }, 800)
});
