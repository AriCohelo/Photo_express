import { useState } from 'react';
import Header from './Header';
import ProductCard from './ProductCard';
import ProductDetail from './ProductDetail';
import Footer from './Footer';

interface ProductFeature {
  icon: string;
  title: string;
  description: string;
}

interface ProductSpecification {
  label: string;
  value: string;
}

interface Product {
  id: number;
  title: string;
  price: string;
  rating: string;
  ratingValue: number;
  reviewCount: number;
  stock: number;
  description: string;
  mainImage: string;
  thumbnails: string[];
  features: ProductFeature[];
  specifications: ProductSpecification[];
}

const products: Product[] = [
  {
    id: 1,
    title: "Iman Individual",
    price: "€5 + envío",
    rating: "(4.8) • 2,847 reviews",
    ratingValue: 4.8,
    reviewCount: 2847,
    stock: 12,
    description: "Elegant individual magnetic design crafted for personal style and functionality. Perfect for everyday use with premium materials and sophisticated aesthetics.",
    mainImage: "iman-individual.jpg",
    thumbnails: [
      "iman-individual.jpg",
      "iman-individual-2.jpg"
    ],
    features: [
      { 
        icon: "magnet", 
        title: "Strong Magnet", 
        description: "High adherence strength" 
      },
      { 
        icon: "image", 
        title: "Photo Quality", 
        description: "Professional printing" 
      },
      { 
        icon: "droplets", 
        title: "Water Resistant", 
        description: "Protective coating" 
      },
      { 
        icon: "star", 
        title: "Premium Design", 
        description: "Individual style" 
      }
    ],
    specifications: [
      { 
        label: "Medidas", 
        value: "10 x 15 cm (4 x 6 inches)" 
      },
      { 
        label: "Impresión", 
        value: "Sublimación-Dye de transferencia térmica" 
      },
      { 
        label: "Papel", 
        value: "Papel fotográfico Canon con recubrimiento de polímero" 
      },
      { 
        label: "Imán", 
        value: "19mils de grosor de alta adherencia" 
      }
    ]
  },
  {
    id: 2,
    title: "Iman Doble",
    price: "€6 + envío",
    rating: "(4.9) • 1,234 reviews",
    ratingValue: 4.9,
    reviewCount: 1234,
    stock: 8,
    description: "Double magnetic strength for enhanced functionality. Expertly crafted with premium materials for superior performance and durability.",
    mainImage: "iman-doble.jpg",
    thumbnails: [
      "iman-doble.jpg",
      "iman-doble-2.jpg"
    ],
    features: [
      { 
        icon: "magnet", 
        title: "Double Strength", 
        description: "Enhanced magnetic power" 
      },
      { 
        icon: "image", 
        title: "Photo Quality", 
        description: "Professional printing" 
      },
      { 
        icon: "droplets", 
        title: "Water Resistant", 
        description: "Protective coating" 
      },
      { 
        icon: "star", 
        title: "Premium Design", 
        description: "Double functionality" 
      }
    ],
    specifications: [
      { 
        label: "Medidas", 
        value: "10 x 15 cm (4 x 6 inches)" 
      },
      { 
        label: "Impresión", 
        value: "Sublimación-Dye de transferencia térmica" 
      },
      { 
        label: "Papel", 
        value: "Papel fotográfico Canon con recubrimiento de polímero" 
      },
      { 
        label: "Imán", 
        value: "19mils de grosor de alta adherencia" 
      }
    ]
  },
  {
    id: 3,
    title: "Iman Collage",
    price: "€7 + envío",
    rating: "(4.7) • 956 reviews",
    ratingValue: 4.7,
    reviewCount: 956,
    stock: 15,
    description: "Creative collage design for artistic expression. Perfect for those who appreciate unique aesthetics and innovative magnetic functionality.",
    mainImage: "iman-collage.jpg",
    thumbnails: [
      "iman-collage.jpg",
      "iman-collage-2.jpg"
    ],
    features: [
      { 
        icon: "magnet", 
        title: "Strong Magnet", 
        description: "High adherence strength" 
      },
      { 
        icon: "image", 
        title: "Collage Design", 
        description: "Creative composition" 
      },
      { 
        icon: "droplets", 
        title: "Water Resistant", 
        description: "Protective coating" 
      },
      { 
        icon: "star", 
        title: "Artistic Style", 
        description: "Creative expression" 
      }
    ],
    specifications: [
      { 
        label: "Medidas", 
        value: "10 x 15 cm (4 x 6 inches)" 
      },
      { 
        label: "Impresión", 
        value: "Sublimación-Dye de transferencia térmica" 
      },
      { 
        label: "Papel", 
        value: "Papel fotográfico Canon con recubrimiento de polímero" 
      },
      { 
        label: "Imán", 
        value: "19mils de grosor de alta adherencia" 
      }
    ]
  }
];

const Gallery = () => {
  const [currentView, setCurrentView] = useState<'gallery' | 'detail'>('gallery');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (productId: number) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      setSelectedProduct(product);
      setCurrentView('detail');
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