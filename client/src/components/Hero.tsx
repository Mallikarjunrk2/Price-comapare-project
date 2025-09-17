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
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-muted/50 min-h-[80vh] flex items-center overflow-hidden">
      {/* Background image with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 blur-[0.5px]"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-orange-600/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
            Compare prices instantly across
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent"> Amazon, Flipkart, Croma </span>
            and more
          </h1>
          
          <p className="text-xl text-white/90 mb-8 drop-shadow-lg">
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
                className="pl-12 h-14 text-lg bg-white/95 backdrop-blur-sm border-0 focus-visible:ring-2 focus-visible:ring-primary shadow-2xl"
                data-testid="input-search"
              />
              <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
            <Button
              onClick={handleSearch}
              size="lg"
              className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-primary to-orange-600 hover:from-primary/90 hover:to-orange-600/90 border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
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