console.log($.browser);
$(document).ready(function () {
    var active_item = Number($(".pagination__active").text()),
        max_item = Number($(".pagination").text().substring(6));
    
    //Стрелка влево
    $(document).on("click", ".content__arrow-left", function() {
        if (active_item > 1) {active_item--;}
        else {active_item = max_item;}
        $(".pagination__active").text("0" + active_item);        
        $("body").css("background-image", "url('img/title-image_" + active_item + ".png')");
    });

    //Стрелвка враво
    $(document).on("click", ".content__arrow-right", function() {
        if (active_item < max_item) {active_item++;}
        else {active_item = 1;}
        $(".pagination__active").text("0" + active_item);
        $("body").css("background-image", "url('img/title-image_" + active_item + ".png')");
    });

    //Игрушки с ховером
    $(".header__menu li a").hover( function(event) {
        for (var i = 0; i < $(".header__menu li a").length; i++) {
            if ($(".header__menu li a").get(i) == event.target) {
                var widthText = $(".header__menu li:nth-child(" + (i + 1) + ") a").width();
                $(".slider-menu").get(0).style.width = widthText + "px";
            }
            $(".slider-menu").get(0).style.left = event.target.offsetLeft + "px";
        }
    });
    $(".header__menu li a").mouseout( function(event) {
        $(".slider-menu").get(0).style.width = "6px";
        $(".slider-menu").get(0).style.left = $(".active_menu").get(0).offsetLeft + "px";
    });
   
    
   
});

