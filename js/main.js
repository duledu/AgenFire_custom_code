



// $(window).on('scroll', function() {
//   $(".section2").each(function() {
//     if (isScrolledIntoView($(this))) {
//       $(this).find(".aios-scroll-id-hp-33").addClass("nav-active-section");
//
//     }
//   });
// });
//
// function isScrolledIntoView(elem) {
//     var docViewTop = $(window).scrollTop();
//     var docViewBottom = docViewTop + $(window).height();
//
//     var elemTop = $(elem).offset().top;
//     var elemBottom = elemTop + $(elem).height();
//
//     return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
// }


function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function () {
    $('.aios-scroll-id-hp-33').each(function () {
        if (isScrolledIntoView('.section2') === true) {
            $(this).addClass('nav-active-section');
        }
    });

});
