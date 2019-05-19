document.body.onload = function () {
   setTimeout(function () {
      let preloader = document.getElementById('preloader');
      if (!preloader.classList.contains('preloader-done')) {
         preloader.classList.add('preloader-done');
      }
   }, 1000);
};


ymaps.ready(init);
function init() {
   var map = new ymaps.Map("map", {
      center: [54.75265930, 56.00293226],
      zoom: 16.5,
      controls: ['zoomControl']
   });
   var placemark = new ymaps.Placemark([54.75265557, 56.00205250], {
      iconCaption: 'проспект Октября, 46'
   },{
      preset: 'islands#circleDotIcon',
      iconColor: '#1e98ff',
   });
   map.geoObjects.add(placemark);
   map.behaviors.disable('scrollZoom');
}
let modal = $('#modal-window')[0];
let dark = $('#dark-window')[0];
$('#modal-show').on( "click", function() {
   modal.style.zIndex = '9999999';
   dark.style.zIndex = '99999';
   modal.style.opacity = '1';
   dark.style.opacity = '0.5';
   return false;
});
$('#modal-exit').on( "click", function() {
   modal.style.zIndex = '-100';
   dark.style.zIndex = '-100';
   modal.style.opacity = '0';
   dark.style.opacity = '0';
   return false;
});
$('#dark-window').on( "click", function() {
   modal.style.zIndex = '-100';
   dark.style.zIndex = '-100';
   modal.style.opacity = '0';
   dark.style.opacity = '0';
   return false;
});
$(document).ready(function () {
   $('.production-slider').slick({
      arrows: false,
      asNavFor: '.production-navslider',
      responsive: [{
         breakpoint: 991.98,
         settings: {
            arrows: true,
         }
      }],
   });
   $('.production-navslider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      asNavFor: '.production-slider',
      focusOnSelect: true,
      responsive: [{
         breakpoint: 1199.98,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
         }
      }, ],
   });
   $('.slider').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      prevArrow: "<img src='img/feedback/arrowLeft.png' class='arrow prev' alt=''>",
      nextArrow: "<img src='img/feedback/arrowRight.png' class='arrow next' alt=''>",
      responsive: [{
            breakpoint: 1199.98,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 767.98,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,

            }
         },
         {}
      ]

   });
   $('.input-phone').mask('+7 (999) 99-99-999')
   let menu = $("#my-menu")
   menu.mmenu({
      extensions: [
         "theme-white"
      ]
   });
   
   let dataMmenu = $('#my-menu').data("mmenu");
   dataMmenu.bind('open:finish', function () {
      $('.hamburger').addClass('is-active');
   }).bind('close:finish', function () {
      $('.hamburger').removeClass('is-active');
   });
   $('.go_to').click(function () {
      var scroll_el = $(this).attr('href'); 
      if ($(scroll_el).length != 0) { 
         $('html, body').animate({
            scrollTop: $(scroll_el).offset().top - 80
         }, 900); 
      }
      dataMmenu.close()
      return false; 
   });
});