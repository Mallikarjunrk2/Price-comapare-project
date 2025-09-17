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
    <div className="space-y-6">
      {/* Deal Score Gauge */}
      <Card className="p-6 text-center space-y-4 bg-gradient-to-br from-card to-muted/30 border-2 border-primary/10 shadow-xl">
        <h3 className="text-lg font-semibold text-card-foreground">Deal Score</h3>
        
        {/* Circular Progress with Gradient */}
        <div className="relative w-32 h-32 mx-auto">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-orange-500/20 blur-md"></div>
          <svg className="w-full h-full transform -rotate-90 relative z-10" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" className={product.dealScore >= 80 ? 'text-chart-1' : product.dealScore >= 60 ? 'text-yellow-400' : 'text-muted-foreground'} stopColor="currentColor" />
                <stop offset="100%" className={product.dealScore >= 80 ? 'text-green-400' : product.dealScore >= 60 ? 'text-orange-400' : 'text-gray-400'} stopColor="currentColor" />
              </linearGradient>
            </defs>
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              className="text-muted/30"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#scoreGradient)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${product.dealScore * 2.83} 283`}
              className="drop-shadow-md"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className={`text-3xl font-bold ${getScoreColor(product.dealScore)}`} data-testid="text-deal-score">
                {product.dealScore}
              </div>
              <div className="text-xs text-muted-foreground">out of 100</div>
            </div>
          </div>
        </div>

        <Badge 
          variant={product.dealScore >= 80 ? "default" : product.dealScore >= 60 ? "secondary" : "outline"}
          className="text-sm"
          data-testid="badge-deal-label"
        >
          {getScoreLabel(product.dealScore)}
        </Badge>

        <p className="text-sm text-muted-foreground font-medium" data-testid="text-deal-verdict">
          {getDealVerdict(product.lowestPrice, product.priceStats.lastSale, product.priceStats.lowest)}
        </p>
      </Card>

      {/* Price Statistics */}
      <Card className="p-6 space-y-4 bg-gradient-to-br from-card via-card to-muted/20 border border-card-border/50 shadow-lg">
        <h3 className="text-lg font-semibold text-card-foreground">Price Breakdown</h3>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">All-time Low</span>
            <div className="flex items-center space-x-2">
              <TrendingDownIcon className="h-4 w-4 text-chart-1" />
              <span className="font-semibold text-chart-1" data-testid="text-all-time-low">
                {formatPrice(product.priceStats.lowest)}
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Last Sale Price</span>
            <span className="font-medium" data-testid="text-last-sale">
              {formatPrice(product.priceStats.lastSale)}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Average Price</span>
            <span className="font-medium" data-testid="text-average-price">
              {formatPrice(product.priceStats.average)}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Highest Price</span>
            <div className="flex items-center space-x-2">
              <TrendingUpIcon className="h-4 w-4 text-destructive" />
              <span className="font-semibold text-destructive" data-testid="text-highest-price">
                {formatPrice(product.priceStats.highest)}
              </span>
            </div>
          </div>
        </div>
      </Card>

      {/* Price Alert */}
      <Button
        onClick={onSetAlert}
        className="w-full"
        variant="outline"
        data-testid="button-set-alert"
      >
        <BellIcon className="h-4 w-4 mr-2" />
        Set Price Alert
      </Button>
    </div>
  );
}