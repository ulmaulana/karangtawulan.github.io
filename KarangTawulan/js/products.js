// Product filtering functionality
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const productItems = document.querySelectorAll('.product-item');
  const searchInput = document.getElementById('searchProduct');
  const priceRange = document.getElementById('priceRange');
  const priceValue = document.getElementById('priceValue');
  
  if (!filterButtons.length || !productItems.length) return;
  
  let currentCategory = 'all';
  let currentSearch = '';
  let currentMaxPrice = 300000;
  
  // Helper untuk ambil harga terendah dari string harga
  function getMinPrice(priceStr) {
    // Ambil angka pertama dari string harga
    const match = priceStr.replace(/\./g, '').match(/\d+/g);
    if (!match) return 0;
    return parseInt(match[0], 10);
  }
  
  function filterProducts() {
    productItems.forEach(item => {
      const itemCategory = item.dataset.category;
      const name = item.querySelector('h3').textContent.toLowerCase();
      const priceText = item.querySelector('.product-price').textContent;
      const minPrice = getMinPrice(priceText);
      // Filter kategori
      const matchCategory = (currentCategory === 'all' || itemCategory === currentCategory);
      // Filter nama
      const matchSearch = name.includes(currentSearch);
      // Filter harga
      const matchPrice = minPrice <= currentMaxPrice;
      if (matchCategory && matchSearch && matchPrice) {
        item.classList.remove('hide');
        item.style.animation = 'fadeIn 0.5s ease forwards';
      } else {
        item.classList.add('hide');
      }
    });
  }
  
  // Event listeners untuk filter kategori
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      currentCategory = this.dataset.category;
      filterProducts();
    });
  });
  
  // Event listener untuk pencarian
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      currentSearch = this.value.toLowerCase();
      filterProducts();
    });
  }
  
  // Event listener untuk filter harga
  if (priceRange && priceValue) {
    priceRange.addEventListener('input', function() {
      currentMaxPrice = parseInt(this.value, 10);
      priceValue.textContent = 'Rp ' + currentMaxPrice.toLocaleString('id-ID');
      filterProducts();
    });
  }
});