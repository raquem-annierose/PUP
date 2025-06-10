document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const iconTrigger = document.getElementById('iconTrigger');
    const menuContainer = document.querySelector('.menu-container');
    const icon = document.getElementById('icon');

    if (iconTrigger) {
        iconTrigger.addEventListener('click', function() {
            menuContainer.classList.toggle('hide');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Learn more button functionality
    const learnMoreButtons = document.querySelectorAll('.learn-more');
    learnMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const facilityInfo = this.closest('.facility-info');
            const facilityName = facilityInfo.querySelector('h3').textContent;
            alert(`More information about ${facilityName} will be available soon!`);
        });
    });

    // Add smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
