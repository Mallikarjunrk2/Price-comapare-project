# Overview

This is a price comparison website built in the style of BuyHatke, designed to help users compare product prices across multiple online stores in India. The application allows users to search for products by name or paste product URLs and instantly see pricing information from various retailers like Amazon, Flipkart, Croma, and Reliance Digital. Key features include deal scoring, price statistics, price alerts, and a modern responsive interface with dark mode support.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing with two main pages (Home and Product)
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible design
- **Styling**: Tailwind CSS with custom design system based on BuyHatke aesthetics
- **State Management**: TanStack Query for server state and local React state for component-level data
- **Form Handling**: React Hook Form with Zod validation schemas

## Backend Architecture
- **Runtime**: Node.js with Express.js for HTTP server
- **Language**: TypeScript with ES modules
- **Architecture Pattern**: RESTful API design with modular route structure
- **Development**: Hot reload and development middleware via Vite integration
- **Error Handling**: Centralized error middleware with proper HTTP status codes

## Data Storage Solutions
- **Database**: PostgreSQL configured via Drizzle ORM
- **ORM**: Drizzle with schema-first approach for type safety
- **Migrations**: Drizzle Kit for database schema management
- **Connection**: Neon Database serverless PostgreSQL for cloud hosting
- **Fallback**: In-memory storage implementation for development/testing

## Design System
- **Color Palette**: Custom HSL-based color system with light/dark mode support
- **Typography**: Inter font family with multiple weights (300-900)
- **Components**: Glass morphism effects, rounded corners, and premium visual styling
- **Responsive**: Mobile-first design with breakpoint-based layouts
- **Theme**: Dark mode as default with toggle functionality

## Key Data Models
- **Product Schema**: Product information with name, image, pricing, and deal score
- **Store Offers**: Individual store listings with price, delivery info, and discounts
- **Price Statistics**: Historical pricing data including highest, lowest, average, and last sale prices
- **Search Queries**: Validation for product search functionality

# External Dependencies

## UI Framework Dependencies
- **@radix-ui/***: Complete suite of accessible React components for building the interface
- **@tanstack/react-query**: Server state management and caching for API calls
- **wouter**: Lightweight routing solution for single-page application navigation
- **react-hook-form**: Form state management with validation
- **@hookform/resolvers**: Integration between React Hook Form and Zod validation

## Styling and Theming
- **tailwindcss**: Utility-first CSS framework for rapid styling
- **class-variance-authority**: Type-safe variant API for component styling
- **clsx**: Utility for constructing className strings conditionally
- **tailwind-merge**: Merge Tailwind CSS classes without style conflicts

## Database and Validation
- **@neondatabase/serverless**: Serverless PostgreSQL database driver
- **drizzle-orm**: Type-safe SQL ORM with excellent TypeScript integration
- **drizzle-zod**: Integration between Drizzle schemas and Zod validation
- **zod**: Schema validation library for runtime type checking

## Development Tools
- **vite**: Fast build tool and development server
- **tsx**: TypeScript execution environment for Node.js
- **esbuild**: Fast JavaScript bundler for production builds
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Development tooling for Replit environment

## Utility Libraries
- **date-fns**: Date manipulation and formatting
- **nanoid**: URL-safe unique string ID generation
- **cmdk**: Command palette component for search functionality
- **embla-carousel-react**: Touch-friendly carousel component

## Fonts and Icons
- **Google Fonts**: Inter and Poppins font families loaded via CDN
- **lucide-react**: Consistent icon library for UI elements