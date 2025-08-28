// Product data structure - easily convertible to React state/props
const productData = {
  1: {
    id: 1,
    title: "Iman Individual",
    price: "€5 + envío",
    rating: "(4.8) • 2,847 reviews",
    ratingValue: 4.8,
    reviewCount: 2847,
    stock: 12,
    description: "Elegant individual magnetic design crafted for personal style and functionality. Perfect for everyday use with premium materials and sophisticated aesthetics.",
    mainImage: "Iman Individual.jpg",
    thumbnails: [
      "Iman Individual.jpg",
      "Iman Individual 2.jpg"
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
        value: "Sublimación-Dye de<br>transferencia térmica" 
      },
      { 
        label: "Papel", 
        value: "Papel fotográfico Canon con<br>recubrimiento de polímero" 
      },
      { 
        label: "Imán", 
        value: "19mils de grosor de alta<br>adherencia" 
      }
    ]
  },
  2: {
    id: 2,
    title: "Iman Doble",
    price: "€6 + envío",
    rating: "(4.9) • 1,234 reviews",
    ratingValue: 4.9,
    reviewCount: 1234,
    stock: 8,
    description: "Double magnetic strength for enhanced functionality. Expertly crafted with premium materials for superior performance and durability.",
    mainImage: "Iman Doble.jpg",
    thumbnails: [
      "Iman Doble.jpg",
      "Iman Doble 2.jpg"
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
        value: "Sublimación-Dye de<br>transferencia térmica" 
      },
      { 
        label: "Papel", 
        value: "Papel fotográfico Canon con<br>recubrimiento de polímero" 
      },
      { 
        label: "Imán", 
        value: "19mils de grosor de alta<br>adherencia" 
      }
    ]
  },
  3: {
    id: 3,
    title: "Iman Collage",
    price: "€7 + envío",
    rating: "(4.7) • 956 reviews",
    ratingValue: 4.7,
    reviewCount: 956,
    stock: 15,
    description: "Creative collage design for artistic expression. Perfect for those who appreciate unique aesthetics and innovative magnetic functionality.",
    mainImage: "Iman Collage.jpg",
    thumbnails: [
      "Iman Collage.jpg",
      "Iman Collage 2.jpg"
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
        value: "Sublimación-Dye de<br>transferencia térmica" 
      },
      { 
        label: "Papel", 
        value: "Papel fotográfico Canon con<br>recubrimiento de polímero" 
      },
      { 
        label: "Imán", 
        value: "19mils de grosor de alta<br>adherencia" 
      }
    ]
  }
};

// Helper functions for product data
const ProductDataHelpers = {
  getAllProducts: () => Object.values(productData),
  getProductById: (id) => productData[id],
  getProductCount: () => Object.keys(productData).length
};

// Export for potential module usage (React)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { productData, ProductDataHelpers };
}