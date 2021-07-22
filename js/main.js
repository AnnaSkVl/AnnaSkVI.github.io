$(function(){

    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"> <img src="images/arrow_left.svg" alt=""></button>',
       nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"> <img src="images/arrow_right.svg" alt=""></button>',
           responsive: [
               {
               breakpoint: 969,
               settings: {
                   arrows: false
               }
           }
    ]
    });

    $('.tab').on('click', function(e){
e.preventDefault();

        $('.tab').removeClass('tab--active');
        $('.tabs-content').removeClass
        ('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');
    });

    $('.product-item__favorite').on('click', function(){
        $('.product-item__favorite').toggleClass('product-item__favorite--active')
    });

    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1
    });

    $('.filter-style').styler();
    $('.filter__item-drop, .filter__extra').on('click', function(){
        $(this).toggleClass('filter__item-drop--active');
        $(this).next().slideToggle('200');
    });

    $('.js-range-slider').ionRangeSlider({
        type: "double",
        grid: false,
        min: 0,
        max: 10000,
    });

    $('.menu__btn').on('click', function(){
        $('.menu-mobile__list').toggleClass('menu-mobile__list--active')
    });

    $('.footer-top__title').on('click', function(){
        $(this).next().slideToggle();
    });
    
});