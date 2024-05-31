// import anime from 'animejs/lib/anime.es.js';

let path = anime.path('#train-path path');

anime({
    targets: '#train',
    translateX: path('x'),
    translateY: path('y'),
    easing: 'linear',
    duration: 20000,
    loop: true
})