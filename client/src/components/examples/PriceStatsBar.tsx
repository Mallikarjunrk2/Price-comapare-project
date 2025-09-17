import PriceStatsBar from '../PriceStatsBar';
import { PriceStats } from '@shared/schema';

export default function PriceStatsBarExample() {
  //todo: remove mock functionality
  const mockPriceStats: PriceStats = {
    highest: 11299,
    average: 10320.08,
    lowest: 8473,
    lastSale: 8999
  };

  return <PriceStatsBar priceStats={mockPriceStats} />;
}