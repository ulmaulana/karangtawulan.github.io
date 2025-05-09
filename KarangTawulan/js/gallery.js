// Gallery lightbox functionality
document.addEventListener('DOMContentLoaded', function() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const closeLightbox = document.getElementById('closeLightbox');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  
  if (!galleryItems.length || !lightbox) return;
  
  let currentIndex = 0;
  
  // Show lightbox with image
  function openLightbox(index) {
    const item = galleryItems[index];
    const img = item.querySelector('img');
    const caption = item.querySelector('.gallery-caption');
    
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    lightboxCaption.textContent = caption ? caption.textContent : '';
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
    
    currentIndex = index;
  }
  
  // Close lightbox
  function closeGalleryLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
  }
  
  // Navigate to previous image
  function prevImage() {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    openLightbox(currentIndex);
  }
  
  // Navigate to next image
  function nextImage() {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    openLightbox(currentIndex);
  }
  
  // Event listeners
  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => openLightbox(index));
  });
  
  if (closeLightbox) {
    closeLightbox.addEventListener('click', closeGalleryLightbox);
  }
  
  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', prevImage);
  }
  
  if (lightboxNext) {
    lightboxNext.addEventListener('click', nextImage);
  }
  
  // Close lightbox when clicking outside of content
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
      closeGalleryLightbox();
    }
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
      closeGalleryLightbox();
    } else if (e.key === 'ArrowLeft') {
      prevImage();
    } else if (e.key === 'ArrowRight') {
      nextImage();
    }
  });
  
  // Add masonry-like layout
  function adjustGalleryLayout() {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;
    
    const items = Array.from(grid.children);
    const gridGap = 16; // Match CSS gap
    
    // Randomize heights for masonry effect
    items.forEach((item, index) => {
      const heightMultiplier = (index % 3 === 0) ? 1.2 : (index % 3 === 1) ? 0.9 : 1;
      item.style.height = `${250 * heightMultiplier}px`;
    });
  }
  
  // Run once on page load
  adjustGalleryLayout();
  
  // Run on window resize
  window.addEventListener('resize', adjustGalleryLayout);
});