$(document).ready(function ($) {
    $('.product-slider .slider').slick({
        dots: false,
        arrow: true,
        infinite: true,
        useTransform: true,
        fade: true,
        // cssEase: 'cubic-bezier(.14,.46,.72,-0.1)',
        // cssEase: 'fadeIn',
        prevArrow: '<button type="button" id="nextBtn" class="slick-prev slick-arrow"></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow"></button>'
    });
    
    $('.coctail-slider .slider').slick({
        dots: false,
        arrow: true,
        infinite: true,
        useTransform: true,
        fade: true,
        // cssEase: 'cubic-bezier(.14,.46,.72,-0.1)',
        // cssEase: 'fadeIn',
        prevArrow: '<button type="button" id="nextBtn" class="slick-prev slick-arrow"></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow"></button>'
    });
    
    $('.news__wrap--mobile').slick({
        dots: false,
        arrow: true,
        infinite: true,
        fade: true,
        // cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        prevArrow: '<button type="button" id="nextBtn" class="slick-prev slick-arrow"></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow"></button>'
    });
    
    
    var countSlider = function () {
        var count = $('.product-slider .slider-item').length;
        $('.product-slider .slider-item__all').text(count);
        $('.product-slider .slider-item').each(function () {
            $(this).find('.slider-item__now').text(parseInt($(this).attr('data-slick-index')) + 1);
        });
        var count1 = $('.coctail-slider .slider-item').length;
        $('.coctail-slider .slider-item__all').text(count1);
        $('.coctail-slider .slider-item').each(function () {
            $(this).find('.slider-item__now').text(parseInt($(this).attr('data-slick-index')) + 1);
        });
    };
    countSlider();
    var banner = $('.banner__nav'),
        imageWrap = $('.banner__image'),
        image = $('.banner__image img'),
        bannerItems = $('.banner__icon-image'),
        head = $('h1');
    bannerItems.each(function () {
        $(this).mouseover(function () {
            var attr = $(this).find('.banner__nav--static').attr('data-src'),
                name = $(this).find('.banner__nav--static').attr('data-header');
            console.log(attr, image.attr('src'));
            image.hide();
            image.css("animation", "none");
            image.innerHeight();
            image.css("animation", "bannerImg 20s infinite linear");
            image.attr('src', attr);
            console.log(image.attr('src'));
            image.fadeIn();
    
            head.animate({
                opacity: 0
            }, 0);
            head.html(name);
            head.animate({
                opacity: 1
            }, 100);
        });
        $(this).mouseleave(function () {
            head.html('<span>Joia fine</span> wines & spirits');
    
            image.hide();
            image.css("animation", "none");
            image.innerHeight();
            image.css("animation", "bannerImg 20s infinite linear");
            image.attr('src', '/images/del/banner-img.png');
            image.fadeIn();
        })
    });
    $(window).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function (event) {
        var delta = parseInt(event.originalEvent.wheelDelta || -event.originalEvent.detail),
            heightBot = $('.header__bot').innerHeight();
        if (delta <= 0) {
            // $('.header__bot').removeClass('sticky');
            $('.header__bot').css('opacity', '0');
            $('.main-content').css("margin-top", "0");
        } else {
            $('.header__bot').addClass('sticky');
            $('.header__bot').css('opacity', '1');
            $('.main-content').css("margin-top", heightBot + "px");
        }
        if ($(window).scrollTop() <= $('.header__top').innerHeight() + 160) {
            $('.header__bot').removeClass('sticky');
            $('.main-content').css("margin-top", "0");
        }
    
        // sideBarScroll(event);
    });
    var news = $('.news__info'),
        newsItem = $('.news-item__name'),
        imageNews = $('.news__pictures img'),
        link = $('.news__pictures a');
    newsItem.each(function () {
        $(this).mouseover(function () {
            if ($(window).width() > 767) {
                var attr = $(this).attr('data-image'),
                    href = $(this).attr('data-href');
    
                imageNews.fadeOut(300);
                imageNews.attr('src', attr);
                imageNews.fadeIn(400);
                link.attr('href', href);
            }
        });
    });
    var countSlider = function () {
        var count2 = $('.detail-slider .detail-item').length;
        $('.detail-slider__nav .detail-slider__all').text(count2);
    };
    countSlider();
    
    
    $('.detail-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        $('.detail-slider__counter').find('.detail-slider__now').text(parseInt($('.detail-slider .slick-active').attr('data-slick-index')) + 1);
    });
    $('.detail-slider').slick({
        dots: false,
        arrow: true,
        infinite: true,
        fade: true,
        // cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        prevArrow: '<button type="button" id="nextBtn" class="slick-prev slick-arrow"></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow"></button>'
    });
});
var addProduct = function () {
    var counterProd = this.parentElement,
        priceProd = this.parentElement.parentElement
            .previousElementSibling.querySelector('span')
            .textContent.split(' ').join('');
    if (counterProd !== null) {
        this.previousElementSibling.value = Number(this.previousElementSibling.value) + 1;
        this.parentElement.parentElement
            .nextElementSibling.querySelector('span').textContent = this.previousElementSibling.value * Number(priceProd);
    } else {
        return false;
    }
};

var removeProduct = function () {
    var counterProd = this.parentElement,
        sumProd = this.parentElement.parentElement
            .nextElementSibling.querySelector('span')
            .textContent.split(' ').join(''),
        priceProd = this.parentElement.parentElement
            .previousElementSibling.querySelector('span')
            .textContent.split(' ').join('');
    if (counterProd !== null) {
        if (this.nextElementSibling.value > 1) {
            this.nextElementSibling.value = Number(this.nextElementSibling.value) - 1;
            this.parentElement.parentElement
                .nextElementSibling.querySelector('span').textContent = Number(sumProd) - Number(priceProd);
        }
    } else {
        return false;
    }
};

var totalProd = function() {
    var counterTotal = document.querySelectorAll('.counter-product'),
        sumTotal = 0;
    counterTotal.forEach(function(element) {
        sumTotal += Number(element.querySelector('input').value);
    });
    document.querySelector('.js_count-total').textContent = sumTotal;
};
totalProd();

// Добавление/удаление товаров
document.querySelectorAll('.js_counter-plus').forEach(function (elem) {
    elem.onclick = addProduct;
    return false;
});
document.querySelectorAll('.js_counter-minus').forEach(function (elem) {
    elem.onclick = removeProduct;
    return false;
});


// Фильтр
var filterProduct = function () {
    var filterLink = this.parentElement.parentElement.querySelector('a');
    var menuDropdown = this.parentElement;
    filterLink.textContent = this.textContent;
    menuDropdown.style.display = "none";
    return false;
};

document.querySelector('.favorite__filter')
    .querySelector('a').onclick = function () {
    if (this !== null) {
        var menuDropdown = this.parentElement.querySelector('.favorite__dropdown');
        menuDropdown.style.display = "block";
    }
};

document.querySelector('.favorite__dropdown')
    .querySelectorAll('li').forEach(function (elem) {
    if (elem !== null) {
        elem.onclick = filterProduct;
    }
    return false;
});
var images = document.querySelectorAll('img');
images.forEach(function (elem) {
    elem.oncontextmenu = function () {
        return false;
    };
});
// AOS.init();
new WOW().init();
var elem = document.querySelector(".brand-list"),
    wrapPositionLeft = document.querySelector(".brand-list").getBoundingClientRect().left;
var scrollBrands = function (e) {
    if (elem.addEventListener) {
        if ('onwheel' in document) {
            // IE9+, FF17+, Ch31+
            elem.addEventListener("wheel", onWheel);
        } else if ('onmousewheel' in document) {
            // устаревший вариант события
            elem.addEventListener("mousewheel", onWheel);
        } else {
            // Firefox < 17
            elem.addEventListener("MozMousePixelScroll", onWheel);
        }
    } else { // IE8-
        elem.attachEvent("onmousewheel", onWheel);
    }
};


var onWheel = function (e) {
    e = e || window.event;
    // wheelDelta не дает возможность узнать количество пикселей
    var delta = e.deltaX || e.detail || e.wheelDelta;
    var brand = document.querySelector('.js_brand-list'),
        brandItem = document.querySelector(".brand-list__item"),
        position = document.querySelector('.js_brand-list').getBoundingClientRect().left,
        positionLeft = brand.clientWidth - Math.abs(position + wrapPositionLeft);

    if (document.body.clientWidth < 992) {

        if (delta > 0) {
            if (position >= wrapPositionLeft - brandItem.clientWidth) {
                brand.style.left = wrapPositionLeft + "px";
            } else {
                brand.style.left = position + brandItem.clientWidth + "px";
            }
        } else {
            if (positionLeft <= elem.clientWidth + brandItem.clientWidth) {
                brand.style.left = -brand.clientWidth + elem.clientWidth + "px";
            } else {
                brand.style.left = position - brandItem.clientWidth + "px";
            }
        }
        e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    }
};


var touchScroll = function () {
    window.addEventListener('load', function(){
        if (document.body.clientWidth < 992) {

            var startx = 0,
                brand = document.querySelector('.js_brand-list'),
                brandItem = document.querySelector(".brand-list__item"),
                position = document.querySelector('.js_brand-list').getBoundingClientRect().left;

            document.querySelector('.brand-list').addEventListener('touchstart', function (e) {
                var touchobj = e.changedTouches[0]; // первая точка прикосновения
                startx = parseInt(touchobj.clientX); // положение точки касания по x, относительно левого края браузера
                e.preventDefault()
            }, false);

            document.querySelector('.brand-list').addEventListener('touchmove', function (e) {
                var touchobj = e.changedTouches[0]; // первая точка прикосновения для данного события
                var dist = parseInt(touchobj.clientX) - startx;
                var startPosition = document.querySelector('.js_brand-list').getBoundingClientRect().left,
                    positionLeft = brand.clientWidth - Math.abs(startPosition + wrapPositionLeft);

                if (dist > 0) {
                    if (position >= wrapPositionLeft - brandItem.clientWidth) {
                        brand.style.left = wrapPositionLeft + "px";
                    } else {
                        brand.style.left = startPosition + dist + "px";
                    }
                } else {
                    if (positionLeft <= elem.clientWidth + brandItem.clientWidth) {
                        brand.style.left = -brand.clientWidth + elem.clientWidth + "px";
                    } else {
                        brand.style.left = startPosition + dist + "px";
                    }
                }
                e.preventDefault();
            }, false);

            document.querySelector('.brand-list').addEventListener('touchend', function (e) {
                var touchobj = e.changedTouches[0]; // первая точка прикосновения для данного события
                e.preventDefault();
            }, false);
        }

    }, false);
};

scrollBrands();
touchScroll();

window.onresize = function () {
    // scrollBrands();
    // touchScroll();
    document.querySelector('.js_brand-list').style.left = '0px';
};