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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background image with premium gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      {/* Warm orange-to-purple gradient overlay as requested */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF8C2A]/80 via-orange-500/70 to-purple-800/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Big gradient headline as requested */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-[0.9] tracking-tight">
              <span className="block bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                Compare prices
              </span>
              <span className="block bg-gradient-to-r from-[#FF8C2A] via-orange-300 to-yellow-200 bg-clip-text text-transparent drop-shadow-2xl">
                instantly
              </span>
              <span className="block text-white/90 drop-shadow-2xl text-4xl md:text-5xl lg:text-6xl font-medium mt-4">
                across top stores
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-lg">
              Find the best deals on electronics, appliances, and gadgets with our smart price comparison tool
            </p>
          </div>

          {/* Glass-style search card */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="relative flex-1">
                  <Input
                    type="text"
                    placeholder="Paste product link or search product name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="pl-14 h-16 text-lg bg-white/90 backdrop-blur-sm border-0 rounded-2xl focus-visible:ring-2 focus-visible:ring-[#FF8C2A] shadow-lg font-medium placeholder:text-gray-500"
                    data-testid="input-search"
                  />
                  <SearchIcon className="absolute left-5 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-500" />
                </div>
                {/* Large pill-shaped CTA in accent orange as requested */}
                <Button
                  onClick={handleSearch}
                  className="h-16 px-10 text-lg font-bold bg-[#FF8C2A] hover:bg-[#FF8C2A]/90 text-white border-0 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] whitespace-nowrap"
                  data-testid="button-compare"
                >
                  Compare Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}