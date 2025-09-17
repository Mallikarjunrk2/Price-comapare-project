import ComparisonTable from '../ComparisonTable';
import { Product } from '@shared/schema';

export default function ComparisonTableExample() {
  //todo: remove mock functionality
  const mockProduct: Product = {
    id: "1",
    name: "SanDisk 1TB Extreme Portable SSD",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=400&fit=crop",
    short: "Portable SSD 1050MB/s, IP55 Water & Dust Resistant",
    lowestPrice: 8254,
    stores: [
      { 
        store: "Flipkart", 
        price: 8254, 
        link: "https://flipkart.com/sandisk-ssd", 
        delivery: "Free", 
        discount: 24 
      },
      { 
        store: "Amazon", 
        price: 10799, 
        link: "https://amazon.in/sandisk-ssd", 
        delivery: "Free", 
        discount: 4 
      },
      { 
        store: "Croma", 
        price: 11299, 
        link: "https://croma.com/sandisk-ssd", 
        delivery: "₹50" 
      },
      { 
        store: "Reliance", 
        price: 10999, 
        link: "https://reliancedigital.in/sandisk-ssd", 
        delivery: "Free", 
        discount: 8 
      }
    ],
    priceStats: {
      highest: 11299,
      average: 10320.08,
      lowest: 8473,
      lastSale: 8999
    },
    dealScore: 85
  };

  return <ComparisonTable product={mockProduct} />;
}