
//Slider JS
const swiper = new Swiper('.swiper', {

    // Optional parameters
    centeredSlides: false, //Erstes eingefügtes Elment is ganz links
    slidesPerView: 3, //angezeigte Elemente
    spaceBetween: 30,
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})
