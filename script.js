// Custom JavaScript for InnovateTech Solutions

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Close the navbar toggler on small screens after clicking a link
            const navbarToggler = document.querySelector('.navbar-toggler');
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarToggler && navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });

    // Add a class to the navbar on scroll for visual effect (optional)
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // Adjust scroll threshold as needed
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // Add some simple form validation (client-side)
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            if (!nameInput.value.trim()) {
                alert('Please enter your name.');
                nameInput.focus();
                event.preventDefault();
                return;
            }

            if (!emailInput.value.trim() || !/\S+@\S+\.\S+/.test(emailInput.value)) {
                alert('Please enter a valid email address.');
                emailInput.focus();
                event.preventDefault();
                return;
            }

            if (!messageInput.value.trim()) {
                alert('Please enter your message.');
                messageInput.focus();
                event.preventDefault();
                return;
            }

            // If all validation passes, you could send the form data (e.g., via AJAX)
            // For this simple example, we'll just show a success message.
            alert('Message sent successfully! We will get back to you soon.');
            // Optionally, clear the form
            this.reset();
            event.preventDefault(); // Prevent actual form submission for this example
        });
    }
});