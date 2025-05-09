// Testimonial carousel
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  if (!slides.length || !dots.length) return;
  
  let currentIndex = 0;
  const slideCount = slides.length;
  
  function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => {
      slide.classList.remove('active');
    });
    
    // Show current slide
    slides[index].classList.add('active');
    
    // Update dots
    dots.forEach(dot => {
      dot.classList.remove('active');
    });
    dots[index].classList.add('active');
  }
  
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    showSlide(currentIndex);
  }
  
  function prevSlide() {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    showSlide(currentIndex);
  }
  
  // Event listeners
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  
  // Dot navigation
  dots.forEach(dot => {
    dot.addEventListener('click', function() {
      const slideIndex = parseInt(this.dataset.index);
      currentIndex = slideIndex;
      showSlide(currentIndex);
    });
  });
  
  // Auto slide
  let slideInterval = setInterval(nextSlide, 5000);
  
  // Pause on hover
  const testimonialSlider = document.getElementById('testimonialSlider');
  if (testimonialSlider) {
    testimonialSlider.addEventListener('mouseenter', () => {
      clearInterval(slideInterval);
    });
    
    testimonialSlider.addEventListener('mouseleave', () => {
      slideInterval = setInterval(nextSlide, 5000);
    });
  }
});

// Animate elements when they come into view
document.addEventListener('DOMContentLoaded', function() {
  // Function to check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  }
  
  // Elements to animate
  const animateElements = [
    ...document.querySelectorAll('.destination-card'),
    ...document.querySelectorAll('.package-card'),
    ...document.querySelectorAll('.product-card'),
    document.querySelector('.intro-content'),
    document.querySelector('.intro-image')
  ].filter(el => el !== null);
  
  // Add initial classes
  animateElements.forEach(el => {
    el.classList.add('animate-on-scroll');
    if (!isInViewport(el)) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
    }
  });
  
  // Animation on scroll
  function animateOnScroll() {
    animateElements.forEach(el => {
      if (isInViewport(el) && el.style.opacity === '0') {
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    });
  }
  
  // Run once on page load
  animateOnScroll();
  
  // Run on scroll
  window.addEventListener('scroll', animateOnScroll);
});