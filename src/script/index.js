const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');

hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('header__mobile-menu--active');

    hamburgerBtn.classList.toggle('header__hamburger--active');
});

document.addEventListener('click', (event) => {
    const isClickInside =
        hamburgerBtn.contains(event.target) ||
        mobileMenu.contains(event.target);

    if (!isClickInside) {
        mobileMenu.classList.remove('header__mobile-menu--active');
        hamburgerBtn.classList.remove('header__hamburger--active');
    }
});
