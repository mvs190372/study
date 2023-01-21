new Splide( '.splide' ).mount( window.splide.Extensions );

const splide = new Splide( '.splide', {
    type   : 'loop',
    drag   : 'free',
    focus  : 'center',
    arrows : false,
    perPage: 1,
    autoScroll: {
      speed: 1,
    },
  } );
  
splide.mount();

