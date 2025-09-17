import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useState } from "react";
import heroImage from "@assets/generated_images/E-commerce_price_comparison_hero_7791bdff.png";

interface HeroProps {
  onSearch: (query: string) => void;
}

export default function Hero({ onSearch }: HeroProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      console.log('Search triggered for:', searchQuery);
      onSearch(searchQuery.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-background to-muted min-h-[70vh] flex items-center">
      {/* Background image with dark overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Compare prices instantly across
            <span className="text-primary"> Amazon, Flipkart, Croma </span>
            and more
          </h1>
          
          <p className="text-xl text-gray-200 mb-8">
            Find the best deals on electronics, appliances, and gadgets with our smart price comparison tool
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="Paste product link or type product name (e.g., SanDisk SSD 1TB)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="pl-12 h-14 text-lg bg-white/95 border-0 focus-visible:ring-2 focus-visible:ring-primary"
                data-testid="input-search"
              />
              <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
            <Button
              onClick={handleSearch}
              size="lg"
              className="h-14 px-8 text-lg font-semibold"
              data-testid="button-compare"
            >
              Compare Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}