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
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-[24px] p-8 text-center space-y-4 shadow-2xl hover:bg-white/[0.15] hover:scale-105 transition-all duration-500">
          <div className="flex justify-center">
            <stat.icon className={`h-8 w-8 ${stat.color === 'text-destructive' ? 'text-red-400' : stat.color === 'text-chart-1' ? 'text-green-400' : stat.color === 'text-primary' ? 'text-[#FF8C2A]' : 'text-white/60'}`} />
          </div>
          <div className="space-y-2">
            <div className="text-sm text-white/70 font-medium">
              {stat.label}
            </div>
            <div className={`text-2xl font-display font-black ${
              stat.color === 'text-destructive' ? 'text-red-400' : 
              stat.color === 'text-chart-1' ? 'text-green-400' : 
              stat.color === 'text-primary' ? 'text-[#FF8C2A]' : 
              'text-white'
            }`} data-testid={stat.testId}>
              {stat.value}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}