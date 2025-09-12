export interface ProductFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
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

export const products: Product[] = [
  {
    id: 3,
    title: 'Iman Collage',
    price: '€7 + envío',
    rating: '(4.7) • 956 reviews',
    ratingValue: 4.7,
    reviewCount: 956,
    stock: 15,
    description:
      'Diseño de collage creativo para expresión artística. Perfecto para contar una historia de forma innovadora.',
    mainImage: 'Collage-1.jpg',
    thumbnails: ['Collage-1.jpg', 'Collage-2.jpg'],
    features: [
      {
        icon: 'magnet',
        title: 'Imán Fuerte',
        description: 'Alta fuerza de adherencia',
      },
      {
        icon: 'image',
        title: 'Garantia 100 Años',
        description: 'Impresiones duraderas',
      },
      {
        icon: 'droplets',
        title: 'Resistente al Agua',
        description: 'Recubrimiento protector',
      },
      {
        icon: 'star',
        title: 'Estilo Artístico',
        description: 'Expresión creativa',
      },
    ],
    specifications: [
      {
        label: 'Medidas',
        value: '10 x 15 cm (4 x 6 pulgadas)',
      },
      {
        label: 'Impresión',
        value: 'Sublimación-Dye de transferencia térmica',
      },
      {
        label: 'Papel',
        value: 'Papel fotográfico Canon con recubrimiento de polímero',
      },
      {
        label: 'Imán',
        value: '19mils de grosor de alta adherencia',
      },
    ],
  },
  {
    id: 2,
    title: 'Iman Doble',
    price: '€6 + envío',
    rating: '(4.9) • 1,234 reviews',
    ratingValue: 4.9,
    reviewCount: 1234,
    stock: 8,
    description:
      'Doble fuerza magnética para mayor impacto. Si no puedes escoger solo una, regala dos!',
    mainImage: 'Doble-1.jpg',
    thumbnails: ['Doble-1.jpg', 'Doble-2.jpg'],
    features: [
      {
        icon: 'magnet',
        title: 'Doble Fuerza',
        description: 'Poder magnético mejorado',
      },
      {
        icon: 'image',
        title: 'Garantia 100 Años',
        description: 'Impresiones duraderas',
      },
      {
        icon: 'droplets',
        title: 'Resistente al Agua',
        description: 'Recubrimiento protector',
      },
      {
        icon: 'star',
        title: 'Diseño Premium',
        description: 'Doble funcionalidad',
      },
    ],
    specifications: [
      {
        label: 'Medidas',
        value: '10 x 15 cm (4 x 6 pulgadas)',
      },
      {
        label: 'Impresión',
        value: 'Sublimación-Dye de transferencia térmica',
      },
      {
        label: 'Papel',
        value: 'Papel fotográfico Canon con recubrimiento de polímero',
      },
      {
        label: 'Imán',
        value: '19mils de grosor de alta adherencia',
      },
    ],
  },
  {
    id: 1,
    title: 'Iman Individual',
    price: '€5 + envío',
    rating: '(4.8) • 2,847 reviews',
    ratingValue: 4.8,
    reviewCount: 2847,
    stock: 12,
    description:
      'Diseño magnético individual con estilo personalizado. Perfecto para expresar con una foto lo que sientes.',
    mainImage: 'Individual-1.jpg',
    thumbnails: ['Individual-1.jpg', 'iman-individual-2.jpg'],
    features: [
      {
        icon: 'magnet',
        title: 'Imán Fuerte',
        description: 'Alta fuerza de adherencia',
      },
      {
        icon: 'image',
        title: 'Garantia 100 Años',
        description: 'Impresiones duraderas',
      },
      {
        icon: 'droplets',
        title: 'Resistente al Agua',
        description: 'Recubrimiento protector',
      },
      {
        icon: 'star',
        title: 'Diseño Premium',
        description: 'Estilo individual',
      },
    ],
    specifications: [
      {
        label: 'Medidas',
        value: '10 x 15 cm (4 x 6 pulgadas)',
      },
      {
        label: 'Impresión',
        value: 'Sublimación-Dye de transferencia térmica',
      },
      {
        label: 'Papel',
        value: 'Papel fotográfico Canon con recubrimiento de polímero',
      },
      {
        label: 'Imán',
        value: '19mils de grosor de alta adherencia',
      },
    ],
  },
];
