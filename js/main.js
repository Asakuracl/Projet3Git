//anime button on slider
$(".jqButton").hide();

$("#containerSlideshow").on("mouseover", function () {
    $(".jqButton").animate({
        height: "show"
    }, 500)
});

// for burger menu
$("#buttonMenu").on("click", function () {
    $("#myLinks").animate({
        height: "toggle"
    }, 370, "swing")
});

