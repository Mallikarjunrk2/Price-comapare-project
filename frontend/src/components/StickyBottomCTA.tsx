import { Button } from "@/components/ui/button";
import { SearchIcon, BellIcon } from "lucide-react";

interface StickyBottomCTAProps {
  onCompare: () => void;
  onSetAlert: () => void;
}

export default function StickyBottomCTA({ onCompare, onSetAlert }: StickyBottomCTAProps) {
  return (
    <div className="fixed bottom-8 left-8 right-8 z-50">
      <div className="max-w-2xl mx-auto">
        <div className="bg-black/40 backdrop-blur-2xl border border-white/20 rounded-[28px] px-8 py-6 shadow-2xl">
          <div className="flex justify-center space-x-6">
            <Button
              onClick={onCompare}
              className="px-8 py-4 bg-[#FF8C2A] hover:bg-[#FF8C2A]/90 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg"
              data-testid="button-sticky-compare"
            >
              <SearchIcon className="h-5 w-5 mr-3" />
              Compare Now
            </Button>
            <Button
              onClick={onSetAlert}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/30 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg"
              data-testid="button-sticky-alert"
            >
              <BellIcon className="h-5 w-5 mr-3" />
              Set Alert
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}