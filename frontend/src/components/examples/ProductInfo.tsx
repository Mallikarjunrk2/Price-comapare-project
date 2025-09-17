import ProductInfo from '../ProductInfo';
import { Product } from '@shared/schema';

export default function ProductInfoExample() {
  //todo: remove mock functionality
  const mockProduct: Product = {
    id: "1",
    name: "SanDisk 1TB Extreme Portable SSD",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=400&fit=crop",
    short: "Portable SSD 1050MB/s, IP55 Water & Dust Resistant",
    lowestPrice: 8254,
    stores: [],
    priceStats: {
      highest: 11299,
      average: 10320.08,
      lowest: 8473,
      lastSale: 8999
    },
    dealScore: 85
  };

  return <ProductInfo product={mockProduct} />;
}