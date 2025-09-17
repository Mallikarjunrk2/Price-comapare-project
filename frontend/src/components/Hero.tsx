import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon, ShoppingCartIcon, CreditCardIcon, SmartphoneIcon, LaptopIcon, TruckIcon, TagIcon } from "lucide-react";
import { useState } from "react";

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
      {/* Dark gradient background as specified */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0c0620 0%, #24003b 100%)' }} />
      
      {/* Floating ecommerce icons with glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Shopping Cart - top left */}
        <div className="absolute top-20 left-20 opacity-30 blur-[0.5px]" style={{ filter: 'drop-shadow(0 0 20px rgba(147, 51, 234, 0.4))' }}>
          <ShoppingCartIcon className="w-16 h-16 text-purple-300" />
        </div>
        
        {/* Credit Card - top right */}
        <div className="absolute top-32 right-24 opacity-25 blur-[0.5px]" style={{ filter: 'drop-shadow(0 0 25px rgba(59, 130, 246, 0.3))' }}>
          <CreditCardIcon className="w-20 h-20 text-blue-300" />
        </div>
        
        {/* Smartphone - middle left */}
        <div className="absolute top-1/2 left-32 transform -translate-y-1/2 opacity-20 blur-[0.5px]" style={{ filter: 'drop-shadow(0 0 15px rgba(168, 85, 247, 0.4))' }}>
          <SmartphoneIcon className="w-14 h-14 text-purple-400" />
        </div>
        
        {/* Laptop - middle right */}
        <div className="absolute top-1/2 right-20 transform -translate-y-1/2 opacity-35 blur-[0.5px]" style={{ filter: 'drop-shadow(0 0 30px rgba(99, 102, 241, 0.3))' }}>
          <LaptopIcon className="w-18 h-18 text-indigo-300" />
        </div>
        
        {/* Truck - bottom left */}
        <div className="absolute bottom-32 left-16 opacity-25 blur-[0.5px]" style={{ filter: 'drop-shadow(0 0 18px rgba(196, 181, 253, 0.4))' }}>
          <TruckIcon className="w-16 h-16 text-violet-300" />
        </div>
        
        {/* Discount Tag - bottom right */}
        <div className="absolute bottom-24 right-32 opacity-30 blur-[0.5px]" style={{ filter: 'drop-shadow(0 0 22px rgba(124, 58, 237, 0.5))' }}>
          <TagIcon className="w-14 h-14 text-purple-300" />
        </div>
      </div>
      
      {/* Radial glow behind central content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[600px] bg-gradient-radial from-purple-500/10 via-indigo-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Premium headline with white-to-purple gradient */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-[0.9] tracking-tight">
              <span className="block bg-gradient-to-r from-white to-[#d4d4ff] bg-clip-text text-transparent drop-shadow-2xl">
                Compare prices
              </span>
              <span className="block bg-gradient-to-r from-white to-[#d4d4ff] bg-clip-text text-transparent drop-shadow-2xl">
                instantly
              </span>
              <span className="block bg-gradient-to-r from-white to-[#d4d4ff] bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl font-medium mt-4">
                across top stores
              </span>
            </h1>
            
            {/* Muted white subheadline */}
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Find the best deals on electronics, appliances, and gadgets with our smart price comparison tool
            </p>
          </div>

          {/* Pill-shaped search bar with glass effect */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full p-3 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="relative flex-1">
                  <Input
                    type="text"
                    placeholder="Search for any product..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="pl-14 h-14 text-lg bg-white/10 backdrop-blur-sm border-0 rounded-full focus-visible:ring-2 focus-visible:ring-[#FF8C2A]/50 shadow-lg font-medium placeholder:text-white/50 text-white"
                    data-testid="input-search"
                  />
                  <SearchIcon className="absolute left-5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50" />
                </div>
                {/* Bright orange CTA with hover glow */}
                <Button
                  onClick={handleSearch}
                  className="h-14 px-8 text-lg font-bold bg-[#FF8C2A] hover:bg-[#FF8C2A]/90 text-white border-0 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 whitespace-nowrap"
                  style={{
                    boxShadow: '0 0 30px rgba(255, 140, 42, 0.3)'
                  }}
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