document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');

    if (toggleButton && nav) {
        toggleButton.addEventListener('click', () => {
            nav.classList.toggle('active');

            if (nav.classList.contains('active')) {
                toggleButton.textContent = '✕';
            } else {
                toggleButton.textContent = '☰';
            }
        });

        const navLinks = document.querySelectorAll('.nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                toggleButton.textContent = '☰';
            });
        });
    }
});
