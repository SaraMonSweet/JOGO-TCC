document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const navContainer = document.getElementById('nav-container');
    const menuIcon = document.getElementById('menu-icon');

    menuBtn.addEventListener('click', () => {
        navContainer.classList.toggle('open');
        if (navContainer.classList.contains('open')) {
            menuIcon.setAttribute('name', 'close-outline');
        } else {
            menuIcon.setAttribute('name', 'menu-outline');
        }
    });
});
