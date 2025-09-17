import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import { useLocation } from "wouter";

export default function Home() {
  const [, setLocation] = useLocation();

  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
    // Navigate to product page with query
    setLocation(`/product?q=${encodeURIComponent(query)}`);
  };

  const handleCompare = () => {
    // Scroll to hero section for new search
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSetAlert = () => {
    console.log('Set alert clicked');
    // In a real app, this would open a price alert modal
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Header />
      <Hero onSearch={handleSearch} />
      <FAQ />
      <StickyBottomCTA onCompare={handleCompare} onSetAlert={handleSetAlert} />
    </div>
  );
}