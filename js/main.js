$(function () {

    $("#rateYo").rateYo({
    });
    var mixer = mixitup('.blog__list');

    // $('.testimonials__slider').slick({
    //     arrows: false,
    //     dots: true,
    // })
    // $('.testimonials__prev').on('click', function (e) {
    //     e.preventDefault()
    //     $('.testimonials__slider').slick('slickPrev')
    // })
    // $('testimonials__next').on('click', function (e) {
    //     e.prevenDefault()
    //     $('.testimonials__slider').slick('slickNext')
    // })

    $('.questions__acc-link').on('click', function (e) {
        e.preventDefault()
        $(this).toggleClass('questions__acc-link--active')
        $(this).children('.questions__acc-text').slideToggle()
    })

    setInterval(() =>{
        if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
            $('.burger').addClass('burger--follow')
        } else {
            $('.burger').removeClass('.burger--follow')
        }
    })
    $('.burger').on('click', function(e) {
        e.preventDefault()
        $('.header__top').toggleClass('header__top--open')
        $('.overlay').toggleClass('overlay--show')
    })

});