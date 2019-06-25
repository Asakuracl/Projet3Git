//anime button on slider

$("#leftArrow").hide();

$("#slideImage").mouseover(function () {
    $("#leftArrow").show().animate({
        height: "toggle"
    })
});
