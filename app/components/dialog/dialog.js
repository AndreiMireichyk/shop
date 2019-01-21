import './dialog.scss';

document.addEventListener('DOMContentLoaded', function () {

    window.addEventListener('click', function (e) {

        let target = e.target;

        // Open dialog
        let toggle = target.closest('[data-toggle=dialog]');

        if(toggle){

            let id = toggle.getAttribute('data-target');

            let dialog = document.querySelector(id);

            dialog.classList.toggle('is-show');

            document.body.style.overflow = dialog.classList.contains('is-show') ? 'hidden' : 'auto';

        }

        // Close dialog
        if(target.closest('[data-dismiss=dialog]') || target.getAttribute('data-dismiss') === 'dialog'){
            target.closest('.dialog').classList.remove('is-show');
            document.body.style.overflow = 'auto';
        }

        else if(target.closest('.dialog__content') || target.classList.contains('dialog__content')){
            return false;
        }

        else if(target.closest('.dialog')){
            target.closest('.dialog').classList.remove('is-show');
            document.body.style.overflow = 'auto';
        }

    });
});