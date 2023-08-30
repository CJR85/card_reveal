'use strict';
document.addEventListener('DOMContentLoaded', function () {
  const drawer = document.querySelector('.drawer'),
    close = document.querySelector('.close'),
    cardsContainer = document.querySelector('.cards');

  const tl = gsap.timeline({
    paused: true,
    reversed: true,
    onStart: function () {
      cardsContainer.computedStyleMap.pointerEvents = 'all';
    },
    onReverseComplete: function () {
      cardsContainer.style.pointerEvents = 'none';
    },
  });

  tl.from('.cards .card', 1.5, {
    y: 1000,
    stagger: {
      amount: 0.3,
    },
    ease: 'power4.inOut',
  }),
    from(
      '.close',
      0.5,
      {
        scale: 0,
        delay: 1,
      },
      '<'
    );
  from('.footer', 0.5, {
    opacity: 0,
  });

  drawer.addEventListener('click', function () {
    if (tl.reversed()) {
      tl.play();
    } else {
      tl.reverse();
    }
  });

  close.addEventListener('click', function () {
    tl.reverse();
  });
});
