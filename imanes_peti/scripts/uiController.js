// UI Controller - State management functions that can be easily converted to React hooks
class UIController {
  constructor() {
    this.currentView = 'gallery';
    this.selectedProduct = null;
    this.quantity = 1;
  }

  // View Management
  showGallery() {
    this.currentView = 'gallery';
    this.hideElement('productDetailView');
    this.showElement('galleryView');
  }

  showProductDetail(productId) {
    this.currentView = 'productDetail';
    this.selectedProduct = ProductDataHelpers.getProductById(productId);
    this.quantity = 1;
    
    this.updateProductDetailView();
    this.hideElement('galleryView');
    this.showElement('productDetailView');
  }

  // Product Detail Updates
  updateProductDetailView() {
    if (!this.selectedProduct) return;

    this.updateElement('productTitle', this.selectedProduct.title);
    this.updateElement('currentPrice', this.selectedProduct.price);
    this.updateElement('productRating', this.selectedProduct.rating);
    this.updateElement('stockInfo', `${this.selectedProduct.stock} in stock`);
    this.updateElement('productDescription', this.selectedProduct.description);
    this.updateElement('quantity', this.quantity.toString());
    
    this.updateMainImage(this.selectedProduct.mainImage);
    this.updateThumbnails();
    this.updateFeatures();
    this.updateSpecifications();
    
    // Reinitialize icons after content update
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }

  // Image Management
  updateMainImage(imageSrc) {
    const mainImage = document.getElementById('mainProductImage');
    if (mainImage) {
      mainImage.src = imageSrc;
    }
  }

  changeMainImage(thumbnail, imageSrc) {
    this.updateMainImage(imageSrc);
    this.setActiveThumbnail(thumbnail);
  }

  setActiveThumbnail(activeThumbnail) {
    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
    activeThumbnail.classList.add('active');
  }

  // Thumbnails Generation
  updateThumbnails() {
    if (!this.selectedProduct) return;
    
    const thumbnailGallery = document.getElementById('thumbnailGallery');
    if (!thumbnailGallery) return;

    thumbnailGallery.innerHTML = this.selectedProduct.thumbnails.map((thumb, index) => 
      `<div class="thumbnail ${index === 0 ? 'active' : ''} aspect-[2/3] overflow-hidden rounded-xl glass-effect" onclick="uiController.changeMainImage(this, '${thumb}')">
        <img src="${thumb}" alt="View ${index + 1}" class="w-full h-full object-cover">
      </div>`
    ).join('');
  }

  // Features Generation
  updateFeatures() {
    if (!this.selectedProduct) return;
    
    const featuresContainer = document.getElementById('productFeatures');
    if (!featuresContainer) return;

    featuresContainer.innerHTML = this.selectedProduct.features.map(feature => 
      `<div class="feature-card p-4 rounded-xl">
        <div class="flex items-center gap-3 mb-2">
          <i data-lucide="${feature.icon}" class="w-6 h-6" style="color: var(--redwood);"></i>
          <h4 class="font-semibold" style="color: var(--violet-jtc);">${feature.title}</h4>
        </div>
        <p class="text-gray-600 text-sm">${feature.description}</p>
      </div>`
    ).join('');
  }

  // Specifications Generation
  updateSpecifications() {
    if (!this.selectedProduct) return;
    
    const specsContainer = document.getElementById('productSpecs');
    if (!specsContainer) return;

    specsContainer.innerHTML = this.selectedProduct.specifications.map(spec => 
      `<div class="flex justify-between">
        <span class="text-gray-600">${spec.label}</span>
        <span class="font-medium text-right">${spec.value}</span>
      </div>`
    ).join('');
  }

  // Quantity Management
  increaseQuantity() {
    if (this.quantity < 50) {
      this.quantity++;
      this.updateElement('quantity', this.quantity.toString());
    }
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
      this.updateElement('quantity', this.quantity.toString());
    }
  }

  // Utility Methods
  hideElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      element.classList.add('hidden');
    }
  }

  showElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      element.classList.remove('hidden');
    }
  }

  updateElement(elementId, content) {
    const element = document.getElementById(elementId);
    if (element) {
      element.textContent = content;
    }
  }

  // Cart Management (placeholder for future implementation)
  addToCart() {
    console.log(`Adding ${this.quantity} of product ${this.selectedProduct.id} to cart`);
    // Future implementation: dispatch to cart state manager
  }

  buyNow() {
    console.log(`Buy now: ${this.quantity} of product ${this.selectedProduct.id}`);
    // Future implementation: navigate to checkout
  }
}

// Create global instance
const uiController = new UIController();

// Global functions for backward compatibility (will be replaced by React event handlers)
function showProductDetail(productId) {
  uiController.showProductDetail(productId);
}

function showGallery() {
  uiController.showGallery();
}

function changeMainImage(thumbnail, imageSrc) {
  uiController.changeMainImage(thumbnail, imageSrc);
}

function increaseQuantity() {
  uiController.increaseQuantity();
}

function decreaseQuantity() {
  uiController.decreaseQuantity();
}

// Export for potential module usage (React)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { UIController, uiController };
}