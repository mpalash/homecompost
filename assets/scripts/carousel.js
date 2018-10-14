//Owl Carousel
jQuery(document).ready(function() {
  jQuery(".ktc-slider-wrapper").owlCarousel({
    nav: false,
    loop: true,
    navText: ["<i class='fa fa-chevron-circle-left'></i>", "<i class='fa fa-chevron-circle-right'></i>"],
    margin: 0,
    items: 1,
    autoHeight: false,
    responsiveRefreshRate: 0,
    responsiveClass: true,
    autoplay:true,
    autoplayTimeout:7000,
    autoplayHoverPause:true,
    smartSpeed:1000
  });//slider end
});//document ready end