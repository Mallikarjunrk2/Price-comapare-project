import { Button } from "@/components/ui/button";
import { SearchIcon, BellIcon } from "lucide-react";

interface StickyBottomCTAProps {
  onCompare: () => void;
  onSetAlert: () => void;
}

export default function StickyBottomCTA({ onCompare, onSetAlert }: StickyBottomCTAProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-center space-x-4">
          <Button
            onClick={onCompare}
            className="px-6 py-2"
            data-testid="button-sticky-compare"
          >
            <SearchIcon className="h-4 w-4 mr-2" />
            Compare Now
          </Button>
          <Button
            onClick={onSetAlert}
            variant="outline"
            className="px-6 py-2"
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