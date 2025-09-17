import { Card } from "@/components/ui/card";
import { TrendingUpIcon, TrendingDownIcon, BarChartIcon, ClockIcon } from "lucide-react";
import { PriceStats } from "@shared/schema";

interface PriceStatsBarProps {
  priceStats: PriceStats;
}

export default function PriceStatsBar({ priceStats }: PriceStatsBarProps) {
  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  const stats = [
    {
      label: "Highest Price",
      value: formatPrice(priceStats.highest),
      icon: TrendingUpIcon,
      color: "text-destructive",
      testId: "stat-highest"
    },
    {
      label: "Average Price", 
      value: formatPrice(priceStats.average),
      icon: BarChartIcon,
      color: "text-muted-foreground",
      testId: "stat-average"
    },
    {
      label: "Lowest Price",
      value: formatPrice(priceStats.lowest),
      icon: TrendingDownIcon,
      color: "text-chart-1",
      testId: "stat-lowest"
    },
    {
      label: "Last Sale Price",
      value: formatPrice(priceStats.lastSale),
      icon: ClockIcon,
      color: "text-primary",
      testId: "stat-last-sale"
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="p-4 text-center space-y-3 hover-elevate">
          <div className="flex justify-center">
            <stat.icon className={`h-6 w-6 ${stat.color}`} />
          </div>
          <div>
            <div className="text-xs text-muted-foreground font-medium mb-1">
              {stat.label}
            </div>
            <div className={`text-lg font-bold ${stat.color}`} data-testid={stat.testId}>
              {stat.value}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}