

var swiper = new Swiper('.swiper-container', {
    centeredSlides: true,
    autoplay: {
        delay: 2800,
        disableOnInteraction: false,
    },
    speed:1200,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});  

