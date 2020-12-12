// HEADER SCROLLING CHANGING COLOR
window.addEventListener('scroll', function () {
    var header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 0)
});

// SWIPER JS
// banner swiper
var swiper = new Swiper('.banner-swiper', {
    slidesPerView: 'auto',
    spaceBetween : 30,
    pagination   : {
        clickable: true,
    },
});

// recommended travel swiper
var swiper = new Swiper('.recommended-swiper', {
    slidesPerView: 'auto',
    spaceBetween : 30,
    navigation   : {
        nextEl: '.recommended-next',
        prevEl: '.recommended-prev',
      },
});