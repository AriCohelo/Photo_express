import { ArrowRight, Star } from 'lucide-react';
import type { Product } from '../products';

interface ProductCardProps {
  product: Product;
  onProductClick: (productId: number) => void;
}

const ProductCard = ({ product, onProductClick }: ProductCardProps) => {
  return (
    <div className="bg-white/25 backdrop-blur-[10px] border border-white/[0.18] rounded-2xl p-6 animate-in fade-in slide-in-from-bottom-5 duration-[600ms] ease-out transition-all cursor-pointer hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
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
        <span className="text-2xl font-bold bg-gradient-to-br from-[#B85450] to-[#7209B7] bg-clip-text text-transparent">
          {product.price}
        </span>
        <div className="flex items-center">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm text-gray-600">
            {product.ratingValue}
          </span>
        </div>
      </div>
      <button
        onClick={() => onProductClick(product.id)}
        className="w-full bg-gradient-to-br from-[#B85450] to-[#7209B7] text-white border-none font-semibold uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_30px_rgba(184,84,80,0.4)] hover:bg-gradient-to-br hover:from-[#c44440] hover:to-[#8a0ba7] py-3 px-4 rounded-xl flex items-center justify-center space-x-2 cursor-pointer"
      >
        <span>ver más</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default ProductCard;
