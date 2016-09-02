var $langFR = $("body").find(".langFR");
var $langEN = $("body").find(".langEN");

$langFR.on("click",function(){
    $langFR.addClass("selected");
    $langEN.removeClass("selected");
    $("body").addClass("text_langFR");
    $("body").removeClass("text_langEN");
});

$langEN.on("click",function(){
    $langEN.addClass("selected");
    $langFR.removeClass("selected");
    $("body").removeClass("text_langFR");
    $("body").addClass("text_langEN");
});
