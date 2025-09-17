import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ExternalLinkIcon, TruckIcon } from "lucide-react";
import { Product } from "@shared/schema";

interface ComparisonTableProps {
  product: Product;
}

export default function ComparisonTable({ product }: ComparisonTableProps) {
  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  const getStoreIcon = (storeName: string) => {
    // In a real app, you'd have actual store logos
    const storeColors: { [key: string]: string } = {
      'Amazon': 'bg-orange-500',
      'Flipkart': 'bg-blue-500',
      'Croma': 'bg-red-500',
      'Reliance': 'bg-green-500'
    };
    
    return storeColors[storeName] || 'bg-muted';
  };

  const lowestPrice = Math.min(...product.stores.map(store => store.price));

  return (
    <div className="space-y-8">
      {/* Summary with glass effect */}
      <div className="bg-gradient-to-br from-[#FF8C2A]/20 to-green-500/20 backdrop-blur-xl border border-white/20 rounded-[28px] p-8 text-center space-y-4 shadow-2xl">
        <h3 className="text-2xl font-display font-bold text-white">
          Best Deal Found
        </h3>
        <div className="text-5xl font-display font-black bg-gradient-to-r from-[#FF8C2A] to-green-400 bg-clip-text text-transparent">
          {formatPrice(lowestPrice)}
        </div>
        <p className="text-white/70 text-lg">
          Compared across {product.stores.length} stores
        </p>
      </div>

      {/* Store Listings with airy spacing */}
      <div className="space-y-6">
        <h3 className="text-2xl font-display font-bold text-white mb-8">
          Store Prices
        </h3>
        
        {product.stores.map((store, index) => (
          <div 
            key={index} 
            className={`group bg-white/10 backdrop-blur-xl border border-white/20 rounded-[24px] p-6 transition-all duration-500 hover:bg-white/[0.15] hover:scale-[1.02] ${store.price === lowestPrice ? 'border-[#FF8C2A]/50 bg-gradient-to-r from-[#FF8C2A]/10 to-green-500/10' : ''}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                {/* Store Logo with modern styling */}
                <div className={`w-16 h-16 rounded-[16px] ${getStoreIcon(store.store)} flex items-center justify-center shadow-lg`}>
                  <span className="text-white font-bold text-lg">
                    {store.store.charAt(0)}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-xl font-display font-bold text-white" data-testid={`text-store-${index}`}>
                    {store.store}
                  </h4>
                  <div className="flex items-center space-x-3 text-white/60">
                    <TruckIcon className="h-5 w-5" />
                    <span className="font-medium" data-testid={`text-delivery-${index}`}>{store.delivery} Delivery</span>
                  </div>
                </div>
              </div>

              <div className="text-right space-y-4">
                <div className="flex items-center justify-end space-x-4">
                  <div>
                    <div className="text-3xl font-display font-black text-white" data-testid={`text-price-${index}`}>
                      {formatPrice(store.price)}
                    </div>
                    {store.discount && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-300 text-sm font-medium mt-1">
                        {store.discount}% OFF
                      </span>
                    )}
                  </div>
                  
                  {store.price === lowestPrice && (
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#FF8C2A]/30 border border-[#FF8C2A]/50 text-[#FF8C2A] font-bold">
                      Best Price
                    </span>
                  )}
                </div>

                <Button
                  onClick={() => window.open(store.link, '_blank')}
                  className="bg-[#FF8C2A] hover:bg-[#FF8C2A]/90 text-white font-bold px-6 py-3 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg"
                  data-testid={`button-buy-${index}`}
                >
                  <ExternalLinkIcon className="h-4 w-4 mr-2" />
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {product.stores.length > 4 && (
        <Button 
          variant="ghost" 
          className="w-full py-4 text-white/70 hover:text-white hover:bg-white/10 rounded-2xl text-lg font-medium transition-all duration-300" 
          data-testid="button-view-more"
        >
          View More Prices
        </Button>
      )}
    </div>
  );
}