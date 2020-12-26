    //owl carousel
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop:true,
        nav:false,
        margin:12,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },            
            960:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });
    owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY>0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });

    //owl carousel


    //slick slider

    $(document).ready(function(){
  $('.chobi').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplayspeed: 0,
    autoplay: true,
    cssEase: 'ease',
    easing: 'linear',
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    }
  ]
  });
});



// typing

var typed = new Typed('.type', {
    strings: [
      'am a student of Shikhbe Shobai',
      'am doing the full-stack web development course',
      'love software development and recommend this field to all of my friends',
      'hope that I could develop strong enough skills to get opportunities to work all over the world',
      'value strong communication, transparency and focus',
    ],
    stringsElement: null,
    typeSpeed: 100,
    startDelay: 0,
    backSpeed: 100,
    smartBackspace: true,
    shuffle: false,
    backDelay: 700,
    fadeOut: false,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 500,
    loop: false,
    loopCount: Infinity,
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true,
    attr: null,
    bindInputFocusEvents: false,
    contentType: 'html'
});



//AOS

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});