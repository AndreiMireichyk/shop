import "./category_nav.scss";

document.addEventListener('DOMContentLoaded', function () {

    // Mobile Open/Close category menu
    window.addEventListener('click', function (e) {

        let target = e.target;

        let category = document.querySelector('.category');

        if (target.closest('.header__toggler')) {
            category.classList.toggle('show')
        }

        else if (!target.closest('.category')) {
            category.classList.remove('show')
        }
    });

    // Click open sub menu
    window.addEventListener('click', function (e) {

        let target = e.target;

        if (target.classList.contains('category__item')) {
            cleanActiveClass();
            target.classList.toggle('active');
            e.stopPropagation();

            if(document.body.offsetWidth <= 780){
                e.preventDefault();
            }
        }
    });

    // Mouse open/close sub menu
    window.addEventListener('mousemove', function (e) {

        if (document.body.clientWidth < 780) return;

        let target = e.target;

        if (target.classList.contains('category__item')) {

            cleanActiveClass();
            target.classList.add('active');

        } else if (!target.closest('.category')) {

            cleanActiveClass();

        }
    });


    // Clear active class
    function cleanActiveClass() {

        let elements = document.querySelectorAll('.category .active');

        elements.forEach(function (elem) {
            elem.classList.remove('active');
        });

    }
});
