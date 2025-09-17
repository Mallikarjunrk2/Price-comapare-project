import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import ProductInfo from "@/components/ProductInfo";
import ComparisonTable from "@/components/ComparisonTable";
import DealScorePanel from "@/components/DealScorePanel";
import PriceStatsBar from "@/components/PriceStatsBar";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import { Product } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";

export default function ProductPage() {
  const [location, setLocation] = useLocation();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  // Get search query from URL
  const urlParams = new URLSearchParams(location.split('?')[1] || '');
  const query = urlParams.get('q') || '';

  useEffect(() => {
    // Simulate API call
    const fetchProduct = async () => {
      setLoading(true);
      
      // todo: remove mock functionality - replace with real API call
      setTimeout(() => {
        const mockProduct: Product = {
          id: "1",
          name: query.includes('SanDisk') || query.includes('SSD') ? 
                "SanDisk 1TB Extreme Portable SSD" : 
                `${query} - Premium Electronics`,
          image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=400&fit=crop",
          short: "Portable SSD 1050MB/s, IP55 Water & Dust Resistant, USB-C 3.2 Gen 2",
          lowestPrice: 8254,
          stores: [
            { 
              store: "Flipkart", 
              price: 8254, 
              link: "https://flipkart.com/sandisk-ssd", 
              delivery: "Free", 
              discount: 24 
            },
            { 
              store: "Amazon", 
              price: 10799, 
              link: "https://amazon.in/sandisk-ssd", 
              delivery: "Free", 
              discount: 4 
            },
            { 
              store: "Croma", 
              price: 11299, 
              link: "https://croma.com/sandisk-ssd", 
              delivery: "₹50" 
            },
            { 
              store: "Reliance", 
              price: 10999, 
              link: "https://reliancedigital.in/sandisk-ssd", 
              delivery: "Free", 
              discount: 8 
            }
          ],
          priceStats: {
            highest: 11299,
            average: 10320.08,
            lowest: 8473,
            lastSale: 8999
          },
          dealScore: 85
        };
        
        setProduct(mockProduct);
        setLoading(false);
      }, 1000);
    };

    if (query) {
      fetchProduct();
    }
  }, [query]);

  const handleBack = () => {
    setLocation('/');
  };

  const handleSetAlert = () => {
    console.log('Setting price alert for:', product?.name);
  };

  const handleNewSearch = () => {
    setLocation('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        <Header />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="animate-pulse space-y-12">
            <div className="h-12 bg-white/10 rounded-2xl w-1/4"></div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-3 space-y-6">
                <div className="h-96 bg-white/10 rounded-[28px]"></div>
                <div className="h-48 bg-white/10 rounded-[28px]"></div>
              </div>
              <div className="lg:col-span-6 space-y-6">
                <div className="h-56 bg-white/10 rounded-[28px]"></div>
                <div className="space-y-4">
                  <div className="h-32 bg-white/10 rounded-[24px]"></div>
                  <div className="h-32 bg-white/10 rounded-[24px]"></div>
                  <div className="h-32 bg-white/10 rounded-[24px]"></div>
                </div>
              </div>
              <div className="lg:col-span-3 space-y-6">
                <div className="h-80 bg-white/10 rounded-[28px]"></div>
                <div className="h-56 bg-white/10 rounded-[28px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        <Header />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
          <h1 className="text-4xl font-display font-bold text-white mb-6">Product not found</h1>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            We couldn't find pricing information for "{query}"
          </p>
          <Button 
            onClick={handleBack}
            className="bg-[#FF8C2A] hover:bg-[#FF8C2A]/90 text-white font-bold px-8 py-4 rounded-2xl text-lg"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-3" />
            Back to Search
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pb-32">
      <Header />
      
      <div className="max-w-8xl mx-auto px-6 lg:px-8 py-32">
        {/* Back Button */}
        <Button
          onClick={handleBack}
          className="mb-12 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-white font-medium px-6 py-3 rounded-2xl transition-all duration-300"
          data-testid="button-back"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-3" />
          Back to Search
        </Button>

        {/* Three Column Layout with premium spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Left Column - Product Info */}
          <div className="lg:col-span-3">
            <ProductInfo product={product} />
          </div>

          {/* Center Column - Comparison */}
          <div className="lg:col-span-6">
            <ComparisonTable product={product} />
          </div>

          {/* Right Column - Deal Score */}
          <div className="lg:col-span-3">
            <DealScorePanel product={product} onSetAlert={handleSetAlert} />
          </div>
        </div>

        {/* Price Statistics Bar */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-white mb-12">Price Statistics</h2>
          <PriceStatsBar priceStats={product.priceStats} />
        </div>
      </div>

      <StickyBottomCTA onCompare={handleNewSearch} onSetAlert={handleSetAlert} />
    </div>
  );
}