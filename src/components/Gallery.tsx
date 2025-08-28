import { useState } from 'react';
import Header from './Header';
import ProductCard from './ProductCard';
import ProductDetail from './ProductDetail';
import Footer from './Footer';
import { products } from '../products';
import type { Product } from '../products';

const Gallery = () => {
  const [currentView, setCurrentView] = useState<'gallery' | 'detail'>('gallery');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (productId: number) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      setSelectedProduct(product);
      setCurrentView('detail');
      window.scrollTo(0, 0);
    }
  };

  const handleBackToGallery = () => {
    setCurrentView('gallery');
    setSelectedProduct(null);
  };

  if (currentView === 'detail' && selectedProduct) {
    return (
      <>
        <ProductDetail 
          product={selectedProduct} 
          onBackToGallery={handleBackToGallery}
        />
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="min-h-screen p-4 md:p-8">
        <Header />
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onProductClick={handleProductClick}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;