document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name.trim() === '' || email.trim() === '' ||
                message.trim() === '') {
                alert('Please fill in all required fields.');
                return;
            }
            
            console.log('Form submitted:', { 
                name, 
                email, 
                subject: document.getElementById('subject').value, 
                message 
            });
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
});
