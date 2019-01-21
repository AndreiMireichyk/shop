import './products.scss'

import base from '../../components/base/base'

document.addEventListener('DOMContentLoaded', function () {

    window.addEventListener('click', function (e) {
        let target = e.target;

        //collapse filter submenu
        if (target.classList.contains('filter__title')) {

            let item = target.closest('.filter__item');
            item.classList.toggle('is-show');

        }

        //Open mobile menu filter
        if(target.classList.contains('filter__toggle')){

            let filter = document.querySelector('.filter');

            document.body.style.overflow = filter.classList.contains('is-show') ? 'auto' :'hidden';

            filter.classList.toggle('is-show');

        }

        //Open mobile menu sort
        if(target.classList.contains('sort__toggle')){

            let sort = document.querySelector('.sort');

            document.body.style.overflow = sort.classList.contains('is-show') ? 'auto' :'hidden';

            sort.classList.toggle('is-show');

        }
    });

});
