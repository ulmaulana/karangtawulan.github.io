// About page animations
document.addEventListener('DOMContentLoaded', function() {
  // Animation for timeline items and sections
  function animateSections() {
    const sections = [
      document.querySelector('.about-intro'),
      document.querySelector('.vision-mission'),
      document.querySelector('.community'),
      document.querySelector('.location'),
      document.querySelector('.faq')
    ].filter(el => el !== null);
    
    // Check if element is in viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
      );
    }
    
    // Animate sections when scrolled into view
    function animateOnScroll() {
      sections.forEach(section => {
        if (isInViewport(section) && !section.classList.contains('animated')) {
          section.classList.add('animated');
          section.style.animation = 'fadeIn 0.8s ease forwards';
        }
      });
    }
    
    // Initial state
    sections.forEach(section => {
      section.style.opacity = '0';
    });
    
    // Run once on page load
    animateOnScroll();
    
    // Listen for scroll
    window.addEventListener('scroll', animateOnScroll);
  }
  
  animateSections();
});