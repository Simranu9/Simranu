// Contact form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.querySelector('input[placeholder="Your Name"]').value;
    let email = document.querySelector('input[placeholder="Your Email"]').value;
    let message = document.querySelector('textarea[placeholder="Your Message"]').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields');
    } else {
        alert('Message sent successfully!');
    }
});