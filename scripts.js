document.addEventListener('DOMContentLoaded', () => {
    // Burger menu functionality
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Contact form submission handling
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Collect form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Send email using EmailJS
        emailjs.send("service_1n9c317", "template_5lfczpq", {
            from_name: name,
            from_email: email,
            message: message
        })
        .then((response) => {
            alert('Thank you for your message!');
            contactForm.reset();
        }, (error) => {
            alert('Failed to send the message, please try again later.');
        });
    });

    // Program slider functionality
    const slider = document.querySelector('.program-slider');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; // Adjust scroll speed if needed
        slider.scrollLeft = scrollLeft - walk;
    });

    // Optional: Add touch event handling for mobile devices
    slider.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('touchend', () => {
        isDown = false;
    });

    slider.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; // Adjust scroll speed if needed
        slider.scrollLeft = scrollLeft - walk;
    });
});
