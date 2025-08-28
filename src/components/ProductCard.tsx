import { ArrowRight, Star } from 'lucide-react';

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

interface ProductCardProps {
  product: Product;
  onProductClick: (productId: number) => void;
}

const ProductCard = ({ product, onProductClick }: ProductCardProps) => {
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