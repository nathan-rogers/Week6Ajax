
$(document).ready(function () {
    $("body").on("click", ".nav-pills li", function (event) {
        $(".nav-pills li").removeClass("active");
        $(this).addClass("active");
    });
    //nav pills ajax, no new url
    $("body").on("click", ".nav-pills li a", function (event) {
        var url = $(this).attr("href");

        event.preventDefault();

        $.get(url, function (data) {
            $("#page-content").html(data);

        });
    });

    $("body").on("click", ".tabs li", function (event) {
        
        var thing = $(this).data("link");
        alert(thing);
        $.get(thing, function (data) {
            $(".tab-content").html(data);
        });       
    
    });

    //form submission
    $("body").on("submit", ".contact-form", function (event) {
        even.preventDefault;
        var url = $(this).attr("action");

        $.post(url, $(this).serialize(), function (data) {
            $("#page-content").html("Thanks for submitting, " + data.first());
        });
    });




});