'use strict';

import './header.scss';


document.addEventListener('DOMContentLoaded', function () {

    //Contacts dropdown
    let target = document.querySelector('.contact-dropdown');

    window.addEventListener('click', function (e) {

        if (e.target.closest(".contact-dropdown")) {
            target.classList.toggle('show');
        } else {
            target.classList.remove('show');
        }
    });


    //Search list
    let searchBlock = document.querySelector('.search');

    window.addEventListener('click', function (e) {

        if (e.target.closest(".search") && e.target.tagName === 'INPUT') {
            searchBlock.classList.add('show');
        }
        else if (e.target.classList.contains('search__toggle')) {
            searchBlock.classList.add('show');
            document.querySelector('.search__input input').focus();
        }
        else {
            searchBlock.classList.remove('show');
        }

    });

});
