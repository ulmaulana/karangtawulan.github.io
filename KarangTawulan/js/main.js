// Navigation toggle
document.addEventListener('DOMContentLoaded', function() {
  const header = document.getElementById('header');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  // Toggle mobile navigation
  function toggleNav() {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  }

  // Change header background on scroll
  function handleScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  // Event listeners
  if (navToggle) {
    navToggle.addEventListener('click', toggleNav);
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
});

// Create SVG icons
document.addEventListener('DOMContentLoaded', function() {
  const loadSvgIcons = () => {
    // Adventure icon for tour packages
    const adventureIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#0077b6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5v2"/><path d="M15 11v2"/><path d="M15 17v2"/><path d="M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"/></svg>`;
    
    // Fishing icon for tour packages
    const fishingIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#0077b6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 9V7m0 0L8 3l-4 8c0 2 1 4 3 4l11-4m0-4l4 3-4 1"/><circle cx="6" cy="15" r="1"/></svg>`;
    
    // Camera icon for tour packages
    const cameraIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#0077b6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>`;
    
    // Add icons to their containers
    const iconContainers = document.querySelectorAll('.package-icon img');
    if (iconContainers.length > 0) {
      iconContainers.forEach(container => {
        if (container.alt === 'Adventure Icon') {
          container.insertAdjacentHTML('afterend', adventureIcon);
          container.remove();
        } else if (container.alt === 'Fishing Icon') {
          container.insertAdjacentHTML('afterend', fishingIcon);
          container.remove();
        } else if (container.alt === 'Camera Icon') {
          container.insertAdjacentHTML('afterend', cameraIcon);
          container.remove();
        }
      });
    }
  };

  loadSvgIcons();
});

// FAQ toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all FAQs
      faqItems.forEach(faqItem => {
        faqItem.classList.remove('active');
      });
      
      // Open the clicked FAQ if it wasn't active
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
});

// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // Basic validation
      if (!name || !email || !subject || !message) {
        alert('Silakan lengkapi semua kolom form.');
        return;
      }
      
      // In a real application, you would send this data to a server
      // For now, just show a success message
      alert('Terima kasih! Pesan Anda telah terkirim. Kami akan menghubungi Anda segera.');
      
      // Reset form
      contactForm.reset();
    });
  }
});

// Testimonial slider
document.addEventListener('DOMContentLoaded', function() {
  const slider = document.getElementById('testimonialSlider');
  if (slider) {
    const slides = slider.querySelectorAll('.testimonial-slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dots = document.querySelectorAll('.dot');
    let current = 0;

    function showSlide(idx) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === idx);
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === idx);
      });
      current = idx;
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function() {
        let idx = current - 1;
        if (idx < 0) idx = slides.length - 1;
        showSlide(idx);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', function() {
        let idx = current + 1;
        if (idx >= slides.length) idx = 0;
        showSlide(idx);
      });
    }
    dots.forEach((dot, i) => {
      dot.addEventListener('click', function() {
        showSlide(i);
      });
    });
    showSlide(0);
  }
});