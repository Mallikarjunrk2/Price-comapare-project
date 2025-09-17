import { Button } from "@/components/ui/button";
import { SearchIcon, BellIcon } from "lucide-react";

interface StickyBottomCTAProps {
  onCompare: () => void;
  onSetAlert: () => void;
}

export default function StickyBottomCTA({ onCompare, onSetAlert }: StickyBottomCTAProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-background/95 via-background/90 to-background/80 backdrop-blur-md border-t border-border/50 z-50 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-center space-x-4">
          <Button
            onClick={onCompare}
            className="px-6 py-2 bg-gradient-to-r from-primary to-orange-600 hover:from-primary/90 hover:to-orange-600/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            data-testid="button-sticky-compare"
          >
            <SearchIcon className="h-4 w-4 mr-2" />
            Compare Now
          </Button>
          <Button
            onClick={onSetAlert}
            variant="outline"
            className="px-6 py-2 bg-gradient-to-r from-card to-muted/50 border-2 border-primary/30 hover:border-primary/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            data-testid="button-sticky-alert"
          >
            <BellIcon className="h-4 w-4 mr-2" />
            Set Alert
          </Button>
        </div>
      </div>
    </div>
  );
}