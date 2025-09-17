import { Badge } from "@/components/ui/badge";
import { StarIcon } from "lucide-react";
import { Product } from "@shared/schema";

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  return (
    <div className="bg-gradient-to-br from-card via-card to-muted/20 border border-card-border/50 rounded-lg p-6 shadow-lg">
      <div className="space-y-6">
        {/* Product Image */}
        <div className="aspect-square bg-muted rounded-lg flex items-center justify-center overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            data-testid="img-product"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-card-foreground mb-2" data-testid="text-product-name">
              {product.name}
            </h2>
            <p className="text-muted-foreground" data-testid="text-product-description">
              {product.short}
            </p>
          </div>

          {/* Rating and Reviews */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                  key={star}
                  className={`h-4 w-4 ${star <= 4 ? 'text-yellow-400 fill-current' : 'text-muted-foreground'}`}
                />
              ))}
              <span className="text-sm text-muted-foreground ml-2">4.0</span>
            </div>
            <span className="text-sm text-muted-foreground" data-testid="text-review-count">
              (1,234 reviews)
            </span>
          </div>

          {/* Current Best Price */}
          <div className="bg-gradient-to-br from-chart-1/20 via-chart-1/10 to-green-500/10 border-2 border-chart-1/20 rounded-lg p-4 shadow-inner">
            <div className="text-sm text-muted-foreground mb-1">Best Price</div>
            <div className="text-3xl font-bold bg-gradient-to-r from-chart-1 to-green-500 bg-clip-text text-transparent" data-testid="text-best-price">
              {formatPrice(product.lowestPrice)}
            </div>
            <Badge variant="secondary" className="mt-2">
              Save ₹{(product.priceStats.highest - product.lowestPrice).toLocaleString('en-IN')}
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}