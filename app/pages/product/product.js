import './product.scss';

import base from '../../components/base/base';

document.addEventListener('DOMContentLoaded', function () {


    let slider = document.querySelector('.slider');
    let slides = document.querySelectorAll('.slider__item');
    let slideWidth = slides[0].offsetWidth;


    if (!slides.length) {
        return false;
    }

    let data = {
        startX: 0,
        isDown: false,
        position: 0
    };


    function down(e) {

        let target = e.target;

        if (target.closest('.slider')) {

            data.isDown = true;

            // X cord mobile || desktop
            if ('changedTouches' in e) {
                data.startX = e.changedTouches[0].clientX
            } else {
                data.startX = e.clientX;
            }

        }
    }

    function up(e) {


        if (e.type === "mouseleave" && !data.isDown) {
            return false;
        }

        data.isDown = false;


        // X cord mobile || desktop
        if ('changedTouches' in e) {
            let a = (e.changedTouches[0].clientX - data.startX) * 2;
            data.position = data.position + a;
        } else {
            let a = (e.clientX - data.startX) * 2;
            data.position = data.position + a;
        }

        //Нет слайдов с лева
        if (data.position > 0) {
            data.position = 0;
        }

        //Нет слайдов с права
        else if (data.position < -(slideWidth * (slides.length - 1))) {
            data.position = -(slideWidth * (slides.length - 1));
        }

        data.position = slideWidth * Math.round(data.position / slideWidth);

        moveSlides(data.position);
    }

    function move(e) {

        let moveX;

        // X cord mobile || desktop
        if ('changedTouches' in e) {
            moveX = e.changedTouches[0].clientX;
        } else {
            moveX = e.clientX;
            e.preventDefault();
        }

        if (data.isDown) {
            let a = (moveX - data.startX) * 2;
            moveSlides(data.position + a);
        }
    }

    function moveSlides(px) {

        slides.forEach(function (element) {
            element.style.transform = "translateX(" + px + "px)";
        })

    }


    // DESKTOP
    slider.addEventListener('mousedown', down);

    slider.addEventListener('mouseup', up);

    slider.addEventListener('mouseleave', up);

    window.addEventListener('mousemove', move);


    //MOBILE
    slider.addEventListener('touchstart', down, false);

    slider.addEventListener('touchend', up, false);

    window.addEventListener('touchmove', move, false);


    // RESIZE MOBILE && DESKTOP
    window.addEventListener('resize', function () {

        slideWidth = slides[0].offsetWidth;

        if (document.body.offsetWidth >= 781) {
            moveSlides(0)
        }
    });


    // BTN & PRICE STICK
    (function () {

        let btn = document.querySelector('.product__order');
        let btn_top = btn.offsetTop;

        let title = document.querySelector('.product__title');
        let title_top = title.offsetTop;

        window.addEventListener('scroll', function () {
            window.scrollY > title_top ? title.classList.add('is-sticky') : title.classList.remove('is-sticky');
            window.scrollY + 58 > btn_top ? btn.classList.add('is-sticky') : btn.classList.remove('is-sticky');
        });
    })();


});

