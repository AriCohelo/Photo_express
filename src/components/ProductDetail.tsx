import { useState } from 'react';
import { ArrowLeft, Star, Minus, Plus, Magnet, Image, Droplets } from 'lucide-react';
import type { Product } from '../products';

interface ProductDetailProps {
  product: Product;
  onBackToGallery: () => void;
}

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className={`w-5 h-5 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
    ))}
  </div>
);

const ProductDetail = ({ product, onBackToGallery }: ProductDetailProps) => {
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(product.mainImage);

  const increaseQuantity = () => {
    setQuantity((prev) => Math.min(prev + 1, 50));
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
  };

  const changeMainImage = (imageSrc: string) => {
    setCurrentImage(imageSrc);
  };

  // TODO: Uncomment when cart functionality is ready
  // const addToCart = () => {
  //   console.log(`Adding ${quantity} of product ${product.id} to cart`);
  // };

  // const buyNow = () => {
  //   console.log(`Buy now: ${quantity} of product ${product.id}`);
  // };

  return (
    <>
      <header className="sticky top-0 z-50 w-full glass-effect backdrop-blur-md py-3 px-4">
        <div className="flex items-center justify-between">
          <button
            onClick={onBackToGallery}
            className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium text-sm cursor-pointer">
              Volver a la Galería
            </span>
          </button>
        </div>
      </header>
      <div className="min-h-screen p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images Section */}
            <div>
              {/* Main Image */}
              <div className="aspect-[2/3] mb-6 overflow-hidden rounded-2xl glass-effect">
                <img
                  src={currentImage}
                  alt={product.title}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-2 gap-4">
                {product.thumbnails.map((thumb, index) => (
                  <div
                    key={index}
                    className={`thumbnail aspect-[2/3] overflow-hidden rounded-xl glass-effect cursor-pointer ${
                      currentImage === thumb ? 'active' : ''
                    }`}
                    onClick={() => changeMainImage(thumb)}
                  >
                    <img
                      src={thumb}
                      alt={`View ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Information Section */}
            <div>
              <div className="glass-effect rounded-2xl p-8">
                <h1 className="text-4xl font-bold mb-4 gradient-text">
                  {product.title}
                </h1>

                {/* Rating */}
                <div className="flex items-center mb-6">
                  <StarRating rating={product.ratingValue} />
                  <span className="ml-2 text-gray-600">{product.rating}</span>
                </div>

                {/* Price */}
                <div className="flex items-center mb-6">
                  <span className="text-4xl font-bold gradient-text mr-4">
                    {product.price}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-8 leading-relaxed">
                  {product.description}
                </p>

                {/* Quantity Selector */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">Cantidad</h3>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={decreaseQuantity}
                      className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-xl font-semibold min-w-[2rem] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={increaseQuantity}
                      className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                    <span className="text-sm text-gray-600 ml-4">
                      {product.stock} en stock
                    </span>
                  </div>
                </div>

                {/* Action Buttons - TODO: Uncomment when cart functionality is ready */}
                {/* 
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button
                    onClick={addToCart}
                    className="btn-primary w-full py-4 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>añadir a la cesta</span>
                  </button>
                </div>
                */}

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {product.features.map((feature, index) => {
                    const iconMap = { magnet: Magnet, image: Image, droplets: Droplets, star: Star };
                    const IconComponent = iconMap[feature.icon as keyof typeof iconMap] || Star;

                    return (
                      <div key={index} className="feature-card p-4 rounded-xl">
                        <div className="flex items-center gap-3 mb-2">
                          <IconComponent className="w-6 h-6 text-red-600" />
                          <h4 className="font-semibold text-violet-800">{feature.title}</h4>
                        </div>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Specifications */}
                <div className="glass-effect rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Especificaciones
                  </h3>
                  <div className="space-y-3">
                    {product.specifications.map((spec, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-gray-600">{spec.label}</span>
                        <span
                          className="font-medium text-right"
                          dangerouslySetInnerHTML={{ __html: spec.value }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
