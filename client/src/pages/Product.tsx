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
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-muted rounded w-1/4"></div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-3 space-y-4">
                <div className="h-80 bg-muted rounded-lg"></div>
                <div className="h-32 bg-muted rounded-lg"></div>
              </div>
              <div className="lg:col-span-6 space-y-4">
                <div className="h-40 bg-muted rounded-lg"></div>
                <div className="space-y-2">
                  <div className="h-20 bg-muted rounded-lg"></div>
                  <div className="h-20 bg-muted rounded-lg"></div>
                  <div className="h-20 bg-muted rounded-lg"></div>
                </div>
              </div>
              <div className="lg:col-span-3 space-y-4">
                <div className="h-60 bg-muted rounded-lg"></div>
                <div className="h-40 bg-muted rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Product not found</h1>
          <p className="text-muted-foreground mb-8">
            We couldn't find pricing information for "{query}"
          </p>
          <Button onClick={handleBack}>
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Search
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Button
          onClick={handleBack}
          variant="ghost"
          className="mb-6"
          data-testid="button-back"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Back to Search
        </Button>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
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
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-6">Price Statistics</h2>
          <PriceStatsBar priceStats={product.priceStats} />
        </div>
      </div>

      <StickyBottomCTA onCompare={handleNewSearch} onSetAlert={handleSetAlert} />
    </div>
  );
}