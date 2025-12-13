document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');

    toggleButton.addEventListener('click', () => {
        // Toggle the 'active' class on the nav element
        nav.classList.toggle('active');
        
        // Change the icon from Hamburger (☰) to Close (X)
        if (nav.classList.contains('active')) {
            toggleButton.textContent = '✕';
        } else {
            toggleButton.textContent = '☰';
        }
    });

    // Close menu when clicking a link (optional UX improvement)
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            toggleButton.textContent = '☰';
        });
    });
});