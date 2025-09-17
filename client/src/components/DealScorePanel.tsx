import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BellIcon, TrendingUpIcon, TrendingDownIcon } from "lucide-react";
import { Product } from "@shared/schema";

interface DealScorePanelProps {
  product: Product;
  onSetAlert: () => void;
}

export default function DealScorePanel({ product, onSetAlert }: DealScorePanelProps) {
  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-chart-1';
    if (score >= 60) return 'text-yellow-500';
    return 'text-muted-foreground';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return 'Excellent Deal';
    if (score >= 60) return 'Good Deal';
    if (score >= 40) return 'Average Deal';
    return 'Poor Deal';
  };

  const getDealVerdict = (currentPrice: number, lastSale: number, allTimeLow: number) => {
    if (currentPrice <= allTimeLow * 1.05) return 'Best Deal Ever!';
    if (currentPrice <= lastSale * 0.9) return 'Better than Last Sale';
    if (currentPrice <= lastSale * 1.1) return 'Similar to Last Sale';
    return 'Higher than Last Sale';
  };

  return (
    <div className="space-y-8">
      {/* Deal Score Gauge with premium glass effect */}
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[28px] p-8 text-center space-y-6 shadow-2xl">
        <h3 className="text-2xl font-display font-bold text-white">Deal Score</h3>
        
        {/* Circular Progress with enhanced gradient */}
        <div className="relative w-40 h-40 mx-auto">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FF8C2A]/30 to-green-500/30 blur-lg"></div>
          <svg className="w-full h-full transform -rotate-90 relative z-10" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={product.dealScore >= 80 ? '#10b981' : product.dealScore >= 60 ? '#FF8C2A' : '#6b7280'} />
                <stop offset="100%" stopColor={product.dealScore >= 80 ? '#22c55e' : product.dealScore >= 60 ? '#f59e0b' : '#9ca3af'} />
              </linearGradient>
            </defs>
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="8"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="url(#scoreGradient)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${product.dealScore * 2.51} 251`}
              className="drop-shadow-lg"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className={`text-4xl font-display font-black ${getScoreColor(product.dealScore) === 'text-chart-1' ? 'text-green-400' : getScoreColor(product.dealScore) === 'text-yellow-500' ? 'text-[#FF8C2A]' : 'text-white/60'}`} data-testid="text-deal-score">
                {product.dealScore}
              </div>
              <div className="text-white/60 font-medium mt-1">out of 100</div>
            </div>
          </div>
        </div>

        <div className={`inline-flex items-center px-6 py-3 rounded-full font-bold ${
          product.dealScore >= 80 ? 'bg-green-500/20 border border-green-500/30 text-green-300' : 
          product.dealScore >= 60 ? 'bg-[#FF8C2A]/20 border border-[#FF8C2A]/30 text-[#FF8C2A]' : 
          'bg-white/10 border border-white/20 text-white/70'
        }`} data-testid="badge-deal-label">
          {getScoreLabel(product.dealScore)}
        </div>

        <p className="text-white/80 font-medium text-lg" data-testid="text-deal-verdict">
          {getDealVerdict(product.lowestPrice, product.priceStats.lastSale, product.priceStats.lowest)}
        </p>
      </div>

      {/* Price Statistics with glass cards */}
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[28px] p-8 space-y-6 shadow-2xl">
        <h3 className="text-2xl font-display font-bold text-white">Price Breakdown</h3>
        
        <div className="space-y-6">
          <div className="flex justify-between items-center py-3 border-b border-white/10">
            <span className="text-white/70 font-medium">All-time Low</span>
            <div className="flex items-center space-x-3">
              <TrendingDownIcon className="h-5 w-5 text-green-400" />
              <span className="font-bold text-green-400 text-xl" data-testid="text-all-time-low">
                {formatPrice(product.priceStats.lowest)}
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-white/10">
            <span className="text-white/70 font-medium">Last Sale Price</span>
            <span className="font-bold text-white text-xl" data-testid="text-last-sale">
              {formatPrice(product.priceStats.lastSale)}
            </span>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-white/10">
            <span className="text-white/70 font-medium">Average Price</span>
            <span className="font-bold text-white text-xl" data-testid="text-average-price">
              {formatPrice(product.priceStats.average)}
            </span>
          </div>

          <div className="flex justify-between items-center py-3">
            <span className="text-white/70 font-medium">Highest Price</span>
            <div className="flex items-center space-x-3">
              <TrendingUpIcon className="h-5 w-5 text-red-400" />
              <span className="font-bold text-red-400 text-xl" data-testid="text-highest-price">
                {formatPrice(product.priceStats.highest)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Price Alert with pill button */}
      <Button
        onClick={onSetAlert}
        className="w-full h-16 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-white font-bold text-lg rounded-2xl transition-all duration-300 hover:scale-[1.02]"
        data-testid="button-set-alert"
      >
        <BellIcon className="h-5 w-5 mr-3" />
        Set Price Alert
      </Button>
    </div>
  );
}