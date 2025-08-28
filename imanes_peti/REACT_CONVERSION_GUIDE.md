# React Conversion Guide

This guide explains how to convert the structured HTML/CSS/JS code to a React project with Tailwind CSS.

## 📁 Project Structure

### Current Structure (HTML)
```
.superdesign/
├── styles/
│   └── theme.css              # CSS variables and utility classes
├── scripts/
│   ├── productData.js         # Product data and helpers
│   └── uiController.js        # State management logic
├── components/
│   ├── Header.html            # Header component template
│   ├── ProductCard.html       # Product card template
│   ├── ProductDetail.html     # Product detail template
│   ├── Footer.html            # Footer template
│   └── StickyHeader.html      # Navigation header template
├── gallery_product_structured.html  # Main structured HTML
└── REACT_CONVERSION_GUIDE.md  # This guide
```

### Proposed React Structure
```
src/
├── components/
│   ├── ui/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── StickyHeader.jsx
│   ├── product/
│   │   ├── ProductCard.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── ProductGallery.jsx
│   │   └── ImageGallery.jsx
│   └── layout/
│       └── Layout.jsx
├── hooks/
│   ├── useProducts.js
│   ├── useCart.js
│   └── useProductDetail.js
├── data/
│   └── products.js           # Converted from productData.js
├── styles/
│   ├── globals.css           # Tailwind imports + CSS variables
│   └── components.css        # Component-specific styles
├── pages/
│   ├── Gallery.jsx
│   └── ProductDetail.jsx
└── App.jsx
```

## 🔄 Conversion Steps

### 1. Setup React Project with Tailwind

```bash
npm create react-app imanes-peti
cd imanes-peti
npm install -D tailwindcss postcss autoprefixer @tailwindcss/typography
npx tailwindcss init -p
```

### 2. Configure Tailwind CSS

**tailwind.config.js:**
```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'champagne-pink': '#F7DFD4',
        'tea-rose': '#E8B4CB',
        'redwood': '#B85450',
        'violet': '#7209B7',
        'violet-jtc': '#5d2e46',
        'logo-teal': '#2d7a7a',
        'logo-orange': '#ff6b35',
      },
      fontFamily: {
        'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
```

### 3. Convert CSS Variables to Tailwind Config

The CSS variables from `theme.css` should be converted to Tailwind's theme configuration or used as CSS custom properties in `globals.css`.

### 4. Convert Data Layer

**src/data/products.js:**
```javascript
export const products = [
  {
    id: 1,
    title: "Iman Individual",
    price: "€5 + envío",
    // ... rest of product data
  },
  // ... other products
];

export const getProductById = (id) => products.find(p => p.id === id);
export const getAllProducts = () => products;
```

### 5. Convert Components

#### Header Component (src/components/ui/Header.jsx)
```jsx
import { Camera } from 'lucide-react';

const Header = ({ title = "photo_express", subtitle, description }) => {
  return (
    <header className="text-center mb-12 fade-in">
      <div className="flex items-start justify-center mb-4">
        <Camera className="w-16 h-16 text-logo-teal mr-2" />
        <div className="flex flex-col text-left">
          <div className="text-5xl md:text-7xl font-bold">
            <span className="text-logo-teal">photo</span>
            <span className="text-logo-orange">_</span>
          </div>
          <div className="text-5xl md:text-7xl font-bold">
            <span className="text-logo-teal">expr</span>
            <span className="text-logo-orange">ess</span>
          </div>
        </div>
      </div>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
        {description}
      </p>
    </header>
  );
};

export default Header;
```

#### Product Card Component (src/components/product/ProductCard.jsx)
```jsx
import { ArrowRight, Star } from 'lucide-react';

const ProductCard = ({ product, onProductClick }) => {
  return (
    <div className="product-card glass-effect rounded-2xl p-6 fade-in">
      <div 
        className="aspect-[2/3] mb-4 overflow-hidden rounded-xl cursor-pointer" 
        onClick={() => onProductClick(product.id)}
      >
        <img 
          src={product.mainImage} 
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <div className="flex justify-between items-center mb-4">
        <span className="text-2xl font-bold gradient-text">{product.price}</span>
        <div className="flex items-center">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm text-gray-600">{product.ratingValue}</span>
        </div>
      </div>
      <button 
        onClick={() => onProductClick(product.id)}
        className="w-full btn-primary py-3 px-4 rounded-xl font-semibold flex items-center justify-center space-x-2"
      >
        <span>ver más</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default ProductCard;
```

### 6. Convert State Management to React Hooks

**src/hooks/useProductDetail.js:**
```javascript
import { useState } from 'react';
import { getProductById } from '../data/products';

export const useProductDetail = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(null);

  const selectProduct = (productId) => {
    const product = getProductById(productId);
    setSelectedProduct(product);
    setCurrentImage(product?.mainImage);
    setQuantity(1);
  };

  const increaseQuantity = () => {
    setQuantity(prev => Math.min(prev + 1, 50));
  };

  const decreaseQuantity = () => {
    setQuantity(prev => Math.max(prev - 1, 1));
  };

  const changeMainImage = (imageSrc) => {
    setCurrentImage(imageSrc);
  };

  return {
    selectedProduct,
    quantity,
    currentImage,
    selectProduct,
    increaseQuantity,
    decreaseQuantity,
    changeMainImage,
  };
};
```

### 7. Convert Navigation to React Router

```bash
npm install react-router-dom
```

**src/App.jsx:**
```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './pages/Gallery';
import ProductDetail from './pages/ProductDetail';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
```

## 🎨 Styling Conversion

### CSS Variables → CSS-in-JS or Tailwind
- Convert CSS variables to Tailwind config
- Use CSS custom properties for complex gradients
- Maintain glass effect utility classes

### Animations
- Convert CSS animations to Tailwind animate classes
- Use Framer Motion for complex animations
- Maintain fade-in and hover effects

## 📦 Additional Dependencies

```bash
npm install lucide-react framer-motion
```

### Optional Enhancements
```bash
npm install @headlessui/react @tailwindcss/forms @tailwindcss/aspect-ratio
```

## 🔄 Migration Checklist

- [ ] Setup React project with Tailwind
- [ ] Convert CSS variables to Tailwind config
- [ ] Migrate product data to ES modules
- [ ] Convert HTML components to JSX
- [ ] Implement React hooks for state management
- [ ] Setup React Router for navigation
- [ ] Convert event handlers to React patterns
- [ ] Test responsive design
- [ ] Optimize images and loading states
- [ ] Add error boundaries
- [ ] Implement proper TypeScript types (optional)

## 🚀 Future Enhancements

- **State Management**: Add Redux Toolkit or Zustand for global state
- **Cart Functionality**: Implement shopping cart with persistence
- **API Integration**: Connect to backend for dynamic product data
- **SEO**: Add React Helmet for meta tags
- **Testing**: Add Jest and React Testing Library
- **Performance**: Implement code splitting and lazy loading
- **PWA**: Add service worker for offline functionality

This structured approach ensures a smooth migration from the current HTML/CSS/JS setup to a modern React application while maintaining all existing functionality and design patterns.