document.addEventListener('DOMContentLoaded', function() {
  const stats = document.querySelectorAll('.stat-number');
  
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
    stats.forEach(stat => {
      animateStat(stat);
    });
  }
  
  function animateStat(statElement) {
    const targetValue = parseInt(statElement.textContent);
    const duration = 2000;
    const startTime = Date.now();
    let currentValue = 0;
    
    function updateValue() {
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime < duration) {
        currentValue = Math.round((elapsedTime / duration) * targetValue);
        statElement.textContent = 
          currentValue + (statElement.textContent.includes('%') ? '%' : '+');
        requestAnimationFrame(updateValue);
      } else {
        statElement.textContent = 
          targetValue + (statElement.textContent.includes('%') ? '%' : '+');
      }
    }
    
    updateValue();
  }
  
  const ctaButton = document.querySelector('.cta-button');
  if (ctaButton) {
    ctaButton.addEventListener('click', function() {
      window.location.href = 'contact.html';
    });
  }
});
