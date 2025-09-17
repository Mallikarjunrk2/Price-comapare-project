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
    <div className="space-y-6">
      {/* Summary */}
      <Card className="p-6">
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold text-card-foreground">
            Best Deal Found
          </h3>
          <div className="text-3xl font-bold text-chart-1">
            {formatPrice(lowestPrice)}
          </div>
          <p className="text-sm text-muted-foreground">
            Compared across {product.stores.length} stores
          </p>
        </div>
      </Card>

      {/* Store Listings */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">
          Store Prices
        </h3>
        
        {product.stores.map((store, index) => (
          <Card key={index} className={`p-4 hover-elevate ${store.price === lowestPrice ? 'border-chart-1 bg-chart-1/5' : ''}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {/* Store Logo */}
                <div className={`w-12 h-12 rounded-lg ${getStoreIcon(store.store)} flex items-center justify-center`}>
                  <span className="text-white font-bold text-sm">
                    {store.store.charAt(0)}
                  </span>
                </div>
                
                <div>
                  <h4 className="font-semibold text-card-foreground" data-testid={`text-store-${index}`}>
                    {store.store}
                  </h4>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <TruckIcon className="h-4 w-4" />
                    <span data-testid={`text-delivery-${index}`}>{store.delivery} Delivery</span>
                  </div>
                </div>
              </div>

              <div className="text-right space-y-2">
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="text-2xl font-bold text-card-foreground" data-testid={`text-price-${index}`}>
                      {formatPrice(store.price)}
                    </div>
                    {store.discount && (
                      <Badge variant="destructive" className="text-xs">
                        {store.discount}% OFF
                      </Badge>
                    )}
                  </div>
                  
                  {store.price === lowestPrice && (
                    <Badge className="bg-chart-1 text-white">
                      Best Price
                    </Badge>
                  )}
                </div>

                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => window.open(store.link, '_blank')}
                  data-testid={`button-buy-${index}`}
                >
                  <ExternalLinkIcon className="h-4 w-4 mr-1" />
                  Buy Now
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {product.stores.length > 4 && (
        <Button variant="ghost" className="w-full" data-testid="button-view-more">
          View More Prices
        </Button>
      )}
    </div>
  );
}