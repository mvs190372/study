  $(".slider1").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true,
    centerPadding: "10px"
  });
  

  $(".slider2").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    slide: "div",
    cssEase: "linear"
  });