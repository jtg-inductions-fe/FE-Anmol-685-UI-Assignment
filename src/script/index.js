import './swiper';

const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburgerBtn && mobileMenu) {
    function toggleMenu() {
        const isMenuOpen = mobileMenu.classList.toggle(
            'header__mobile-menu--active',
        );
        hamburgerBtn.classList.toggle('header__hamburger--active');
        hamburgerBtn.setAttribute('aria-expanded', isMenuOpen);
        mobileMenu.setAttribute('aria-hidden', !isMenuOpen);
    }

    function closeMenu() {
        mobileMenu.classList.remove('header__mobile-menu--active');
        hamburgerBtn.classList.remove('header__hamburger--active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
    }

    hamburgerBtn.addEventListener('click', toggleMenu);

    hamburgerBtn.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleMenu();
        }
    });

    document.addEventListener('click', (event) => {
        const isClickInside =
            hamburgerBtn.contains(event.target) ||
            mobileMenu.contains(event.target);
        if (
            !isClickInside &&
            mobileMenu.classList.contains('header__mobile-menu--active')
        ) {
            closeMenu();
        }
    });
}
