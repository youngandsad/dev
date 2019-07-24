$(function () {


// слайдер

    // массив данных

    let slidesArray = [
        ['slide-1', 'img/green-grass.jpg', 'Text', 'Text', 'google.com'],
        ['slide-2', 'img/grass.jpg', 'Text', 'Text', 'google.com'],
        ['slide-3', 'img/landscape-2.jpg', 'Text', 'Text', 'google.com'],
        ['slide-4', 'img/utes.jpg', 'Text', 'Text', 'google.com'],
        ['slide-5', 'img/landscape.jpeg', 'Text', 'Text', 'google.com'],
    ];


    // рендер информации из массива

    let arrLength = slidesArray.length;
    
    for (let i = 0; i < arrLength; i++) {
        $('.slide').append(
            '<li class="' + slidesArray[i][0] + '">' +
            '<div class="background-fix" style="background-image: url(' + slidesArray[i][1] + ')">' +
            '<div>' +
            '<div class="slider-text">' + slidesArray[i][2] + '</div> ' +
            '</div>' +
            '<div>' +
            '<a href="' + slidesArray[i][4] + '" target="_blank">' + slidesArray[i][3] + '</a>' +
            '</div>' +
            '</div>' +
            '</li>'
        )
    }

    // навигация

    var slides = $('.slide > li');
    var offset = Math.ceil($('.slider').scrollLeft());
    var slidesLength = slides.length;

    for (let j = 0; j < slidesLength; j++) {
        if (j === 0) {
            $('.navigation').append('<div class="dot active"></div>')
        } else {
            $('.navigation').append('<div class="dot"></div>');

        }

    }

    // переключение слайдов при помощи навигации

    var dots = $('.navigation .dot');
    offset = 0;
    slidesLength = 0;
    let slideWidth = parseInt($('.slider').width());


    $('body').on('click', '.navigation .dot', function () {
        $('.navigation .active').removeClass('active');
        $(this).addClass('active');
        slidesLength = $(this).index();
        offset = slidesLength * slideWidth;
        $('.slider').animate({scrollLeft: offset}, 1000);
    });


    let scroll = 1;

    // переключение слайдов + навигация

    $('.slider-next').on('click', function () {
        if (scroll == 1) {
            scroll = 0;
            let currOffset = Math.ceil($('.slider').scrollLeft());
            let slideWidth = parseInt($('.slider').width());
            let slideCount = $('.slide > li').length;

            if (currOffset + slideWidth >= slideWidth * slideCount) {
                slidesLength = 0;
                $('.slider').animate({scrollLeft: 0}, 1000);

                $('.dot.active').removeClass('active');
                $(dots[0]).addClass('active');

            } else {
                $('.slider').animate({scrollLeft: slideWidth + currOffset}, 1000);

                $('.dot.active').removeClass('active');
                $(dots[++slidesLength]).addClass('active');
            }

            setTimeout(function () {
                scroll = 1;
            }, 1000);

        }
    });


    $('.slider-prev').on('click', function () {
        if (scroll == 1) {
            scroll = 0;
            let currOffset = Math.ceil($('.slider').scrollLeft());
            let slideWidth = parseInt($('.slider').width());

            if (Math.ceil(currOffset - slideWidth) <= 0) {
                $('.slider').animate({scrollLeft: 0}, 1000);

                $('.dot.active').removeClass('active');
                $(dots[0]).addClass('active');
            } else {
                $('.slider').animate({scrollLeft: currOffset - slideWidth}, 1000);
                $('.dot.active').removeClass('active');
                $(dots[--slidesLength]).addClass('active');
            }
            setTimeout(function () {
                scroll = 1
            }, 1000);

        }
    });

});
