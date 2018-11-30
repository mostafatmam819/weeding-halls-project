$(document).ready( function () {

    'use strict';

    /* start slider */

    // customize slider height
    var windowHeight = $(window).height(),
        upperHeight  = $('.upper-bar').innerHeight(),
        navHeight    = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(windowHeight - (upperHeight + navHeight) );

    $(window).resize(function () {
        var windowHeight = $(window).height(),
            upperHeight  = $('.upper-bar').innerHeight(),
            navHeight    = $('.navbar').innerHeight();
        $('.slider, .carousel-item').height(windowHeight - (upperHeight + navHeight) );
    });

    /* end slider */

    /* start our-feature */

    // customize hover
    /*$('.our-feature .img-cont').mouseover(function () {
        var item = this.className+' .over-lay';
        $(item).show();
    });*/

    // customize shuffel
    $('.shuffel').click(function () {
        var dataTarget = $(this).attr('data-target');
        if(dataTarget != "all"){
            $('.img-cont').css('opacity','.1');
            $('.img-cont.' + dataTarget ).css('opacity','1');
        }else{
            $('.img-cont').css('opacity','1');
        }
        $(this).addClass('active').siblings().removeClass('active');
    });

    /* end our-feature */

    /* start testimonials */

    // customize center
    var captionHeigh = $('.carousel-caption').innerHeight();
    $('.carousel-caption').css('marginTop',-(captionHeigh/2));
    $(window).resize(function () {
        console.log('resize');
        $('.carousel-caption').css('marginTop',-(captionHeigh/2));
    });

    // customize shuffel
    $('.dir-control').click(function () {
        if(!$(this).hasClass('active')){
            $('.dir-control').removeClass('active');
            $(this).addClass('active');
        }
    });

    /* end testimonials */

    /* start why-choose-us */

    //customize height
    var h = $('.why-choose-us .description').innerHeight();
    $('.why-choose-us .image').height(h);
    $(window).resize(function () {
        var h = $('.why-choose-us .description').innerHeight();
        $('.why-choose-us .image').height(h);
    });

    /* end why-choose-us */

});