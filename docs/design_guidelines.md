# BuyHatke-Style Price Comparison Website Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern e-commerce and comparison platforms like BuyHatke, PriceGrabber, and Shopzilla. The design prioritizes visual appeal and user engagement while maintaining utility for price comparison functionality.

## Core Design Elements

### A. Color Palette
**Light Mode:**
- Primary Brand: 25 85% 55% (vibrant orange)
- Background: 0 0% 98% (warm white)
- Card Background: 35 100% 97% (cream)
- Text Primary: 0 0% 15% (dark gray)
- Text Secondary: 0 0% 45% (medium gray)
- Success/Best Price: 142 76% 36% (green)
- Border: 0 0% 90% (light gray)

**Dark Mode:**
- Primary Brand: 25 85% 60% (lighter orange)
- Background: 0 0% 8% (dark)
- Card Background: 25 15% 12% (dark warm)
- Text Primary: 0 0% 95% (light)
- Text Secondary: 0 0% 70% (medium light)
- Success/Best Price: 142 76% 45% (lighter green)
- Border: 0 0% 20% (dark gray)

### B. Typography
- Primary Font: Inter (Google Fonts)
- Headings: 600-700 weight
- Body Text: 400-500 weight
- Price Text: 600-700 weight for emphasis
- Font scales: text-sm to text-4xl with generous line-height

### C. Layout System
**Spacing Units**: Primarily use Tailwind units of 2, 4, 6, 8, and 12 for consistent spacing (p-4, m-6, gap-8, etc.)
- Container max-width: max-w-7xl with mx-auto
- Grid system: 3-column layout for comparison (product info, prices, deal score)
- Consistent 6-8 unit padding/margins throughout

### D. Component Library

**Navigation**: Clean header with logo, search bar, and minimal navigation links

**Hero Section**: Centered search functionality with gradient background overlay, prominent search input with rounded corners

**Product Cards**: Cream-colored cards (light mode) with subtle shadows, rounded corners (rounded-lg), featuring product images, titles, and key price information

**Price Comparison Table**: Clean table design with store logos, highlighting lowest prices with success color background, delivery information displayed subtly

**Deal Score Gauge**: Circular progress indicator (0-100 scale) with color coding:
- 80-100: Success green
- 60-79: Warning yellow
- Below 60: Neutral gray

**Price Statistics Bar**: Horizontal layout showing highest, average, lowest, and last sale prices with clear visual separation

**FAQ Accordion**: Rounded cream cards with smooth expand/collapse animations, using subtle borders

**Sticky CTA Bar**: Fixed bottom position with comparison action buttons and subtle background blur

### E. Animations
Minimal, purposeful animations only:
- Smooth accordion expand/collapse
- Subtle hover states on cards and buttons
- Loading states for price fetching

## Images
**Hero Background**: Large hero image featuring shopping/comparison theme (people comparing prices on devices, shopping bags, or abstract commerce patterns) with dark gradient overlay for text readability
**Store Logos**: Small, consistent-sized logos in price comparison tables
**Product Images**: Square aspect ratio thumbnails in comparison cards
**No additional decorative images** - focus on functional imagery that supports the price comparison workflow

## Key Design Principles
1. **Clarity First**: Price information must be immediately scannable
2. **Trust Building**: Clean, professional aesthetic builds user confidence
3. **Comparison Focus**: Visual hierarchy emphasizes price differences and deals
4. **Mobile Responsive**: Touch-friendly interface with appropriate sizing
5. **Performance**: Optimized for fast loading with price data priority