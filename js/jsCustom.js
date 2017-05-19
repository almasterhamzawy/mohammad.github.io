//this function is make type writer effect

document.addEventListener('DOMContentLoaded', function(){
    Typed.new('.element', {
        strings: ["HI"],
        typeSpeed: 0
    });
    Typed.new('.element-1', {
        strings: ["I Am Mohammad Hamza <br> PHP Developer <br> My Pleasure to wrok with you :)"],
        typeSpeed: 0,
        startDelay:1500
    });
});
// firing smooth scroll
$(function(){

    "use strict";
    smoothScroll.init();

    // firing wow scroll

    new WOW().init();

});

$(document).ready(function() {
    $("html").niceScroll();
});

$(function() {
    $(".loading").fadeOut(3000, function() {
    });
});
