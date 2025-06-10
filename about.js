document.addEventListener('DOMContentLoaded', function() {
  // Add animation to stats when they come into view
  const stats = document.querySelectorAll('.stat-number');
  
  // Check if IntersectionObserver is available
  if ('IntersectionObserver' in window) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateStat(entry.target);
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    stats.forEach(stat => {
      statsObserver.observe(stat);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    stats.forEach(stat => {
      animateStat(stat);
    });
  }
  
  // Animation function for counting up stats
  function animateStat(statElement) {
    const targetValue = parseInt(statElement.textContent);
    const duration = 2000; // 2 seconds
    const startTime = Date.now();
    let currentValue = 0;
    
    function updateValue() {
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime < duration) {
        currentValue = Math.round((elapsedTime / duration) * targetValue);
        statElement.textContent = currentValue + (statElement.textContent.includes('%') ? '%' : '+');
        requestAnimationFrame(updateValue);
      } else {
        statElement.textContent = targetValue + (statElement.textContent.includes('%') ? '%' : '+');
      }
    }
    
    updateValue();
  }
  
  // New code for building image animation
  const buildingImage = document.querySelector('.about-image');
  
  if (buildingImage && 'IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          console.log('Building image animation triggered');
          imageObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3, rootMargin: '0px 0px -50px 0px' });
    
    imageObserver.observe(buildingImage);
  }
  
  // Make CTA button functional - can be customized
  const ctaButton = document.querySelector('.cta-button');
  if (ctaButton) {
    ctaButton.addEventListener('click', function() {
      window.location.href = 'contact.html';
    });
  }
});
