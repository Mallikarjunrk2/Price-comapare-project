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
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[28px] p-8 shadow-2xl hover:bg-white/[0.15] transition-all duration-500">
      <div className="space-y-8">
        {/* Product Image with premium styling */}
        <div className="aspect-square bg-white/5 rounded-[20px] flex items-center justify-center overflow-hidden border border-white/10">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-[20px]"
            data-testid="img-product"
          />
        </div>

        {/* Product Details with airy spacing */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-white leading-tight" data-testid="text-product-name">
              {product.name}
            </h2>
            <p className="text-white/70 text-lg leading-relaxed" data-testid="text-product-description">
              {product.short}
            </p>
          </div>

          {/* Rating and Reviews with modern styling */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                  key={star}
                  className={`h-5 w-5 ${star <= 4 ? 'text-[#FF8C2A] fill-current' : 'text-white/30'}`}
                />
              ))}
              <span className="text-white/80 ml-2 font-medium">4.0</span>
            </div>
            <span className="text-white/60" data-testid="text-review-count">
              (1,234 reviews)
            </span>
          </div>

          {/* Current Best Price with glass card */}
          <div className="bg-gradient-to-br from-[#FF8C2A]/20 to-green-500/20 backdrop-blur-sm border border-[#FF8C2A]/30 rounded-[24px] p-6">
            <div className="text-white/70 mb-2 font-medium">Best Price</div>
            <div className="text-4xl font-display font-black bg-gradient-to-r from-[#FF8C2A] to-green-400 bg-clip-text text-transparent" data-testid="text-best-price">
              {formatPrice(product.lowestPrice)}
            </div>
            <div className="mt-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white font-medium">
                Save ₹{(product.priceStats.highest - product.lowestPrice).toLocaleString('en-IN')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}