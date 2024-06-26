const menuBody = document.querySelector('.menu__body');
const promoBurgerBtn = document.querySelector('.promo__burger-icon');
const menuIcon = document.querySelector('.menu__icon');
const promoContainer = document.querySelector('.promo__container');

const body = document.body;

if (menuBody && promoBurgerBtn) {
    promoBurgerBtn.addEventListener('click', () => {
        menuBody.classList.toggle('active');
        promoContainer.classList.toggle('overlay');
        body.classList.toggle('lock');
    });

    menuBody.querySelectorAll('menu__link').forEach(link => {
        link.addEventListener('click', () => {
            menuBody.classList.remove('active');
            promoContainer.classList.remove('overlay');
            body.classList.remove('lock');
        })
    });

    menuIcon.addEventListener('click', () => {
        menuBody.classList.remove('active');
        promoContainer.classList.remove('overlay');
        body.classList.remove('lock');
    })
}

menuBody.addEventListener('click', event => {
    event._isClickWithInMenu = true;
})

promoBurgerBtn.addEventListener('click', event => {
    event._isClickWithInMenu = true;
})

body.addEventListener('click', event => {
    if (event._isClickWithInMenu) return;
    menuBody.classList.remove('active');
    promoContainer.classList.remove('overlay');
})