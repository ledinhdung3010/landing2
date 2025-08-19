// Video Js 
document.addEventListener("DOMContentLoaded", function() {
  const containers = document.querySelectorAll('.slide');
  const videos = document.querySelectorAll('video');
  const buttons = document.querySelectorAll('.mute-btn');

  containers.forEach((container, idx) => {
    const video = container.querySelector('video');
    const btn = container.querySelector('.mute-btn');
    const icon = btn ? btn.querySelector('i') : null;

    // Safety check: Ignore if not found
    if (!video || !btn || !icon) return;

    btn.addEventListener('click', function() {
      if (video.muted) {
        // Mute ALL videos first
        videos.forEach((v, i) => {
          v.muted = true;
          // Check button and icon exist
          if (buttons[i]) {
            const btnIcon = buttons[i].querySelector('i');
            if (btnIcon) {
              btnIcon.classList.remove('fa-volume-up');
              btnIcon.classList.add('fa-volume-mute');
            }
          }
        });
        // UNMUTE only this video & update icon
        video.muted = false;
        icon.classList.remove('fa-volume-mute');
        icon.classList.add('fa-volume-up');
      } else {
        // MUTE itself
        video.muted = true;
        icon.classList.remove('fa-volume-up');
        icon.classList.add('fa-volume-mute');
      }
    });
  });
});





/* JavaScript Document */
$(window).on("load", function () {
    "use strict";
    // .mySwiper
    if ($(".mySwiper").length > 0) {
        var swiper = new Swiper(".mySwiper", {
        slidesPerView: 5,
        spaceBetween: 30,
        centeredSlides: true,
        speed: 900,
        grabCursor: true,
        loop: true,
        autoplay: {
            delay: 2500,
        },
        on: {
            slideChangeTransitionStart: function () {
            requestAnimationFrame(updateSlideClasses);
            },
            slideChangeTransitionEnd: function () {
            requestAnimationFrame(updateSlideClasses);
            },
        },
        breakpoints: {
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
        },
        });

        function updateSlideClasses() {
        $(".mySwiper .swiper-slide").each(function () {
            if ($(this).hasClass("swiper-slide-active")) {
            $(this).prev().addClass("slide-2");
            $(this).prev().prev().addClass("slide-1");
            $(this).next().addClass("slide-3");
            $(this).next().next().addClass("slide-4");
            } else {
            $(this).prev().removeClass("slide-2");
            $(this).prev().prev().removeClass("slide-1");
            $(this).next().removeClass("slide-3");
            $(this).next().next().removeClass("slide-4");
            }
        });
        }

        swiper.on("slideChange", function () {
        setTimeout(() => {
            updateSlideClasses();
        }, 1000);
        });
    }

    // .mySwiper1
    if ($(".mySwiper1").length > 0) {
        var swiper = new Swiper(".mySwiper1", {
        spaceBetween: 30,
        centeredSlides: true,
        speed: 850,
        grabCursor: true,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
            1320: { slidesPerView: 5 },
        },
        });
        const sliderEl = document.querySelector('.mySwiper1');
        sliderEl.addEventListener('mouseenter', function() {
          swiper.autoplay.stop();
        });
        sliderEl.addEventListener('mouseleave', function() {
          swiper.autoplay.start();
        });
    }

    // .mySwiper2
    if ($(".mySwiper2").length > 0) {
        var swiper = new Swiper(".mySwiper2", {
        spaceBetween: 30,
        speed: 900,
        grabCursor: true,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".right",
            prevEl: ".left",
        },
        breakpoints: {
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
            1800: { slidesPerView: 4 },
        },
        });
    }

    
});
