//anime button on slider

$(".jqButton").hide();

$("#slideImage").mouseover(function () {
    $(".jqButton").animate({
        height: "show"
    }, 800)
});
