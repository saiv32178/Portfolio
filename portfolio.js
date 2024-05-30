document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');

            const targetSection = document.querySelector(this.getAttribute('href'));
            document.querySelectorAll('section').forEach(section => section.style.display = 'none');
            targetSection.style.display = 'block';
        });
    });

    document.querySelectorAll('section').forEach(section => section.style.display = 'none');
    document.querySelector('#home').style.display = 'block';
});
