# CharacterCounter SPA

A modern, professional React single-page application for text analysis and character counting. Built with React, TailwindCSS, and Vite.

## Features

- **Real-time Text Analysis**: Character counting, word counting, sentence analysis
- **Advanced Metrics**: Reading time estimation, tone detection, readability scoring
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Modern UI**: B2B SaaS-style design with fresh cyan/mint color palette
- **Privacy-First**: All text processing happens in your browser
- **Multiple Pages**: Home, Analyzer, Dashboard, About, Contact

## Technology Stack

- **React 18.3**: Modern functional components with hooks
- **Vite 5.4**: Fast development server and optimized builds
- **TailwindCSS 3.4**: Utility-first CSS framework
- **React Router 6.26**: Client-side routing
- **ESLint**: Code quality and consistency

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm 7.x or higher

### Installation

1. Clone the repository and navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
frontend/
├── public/              # Static assets
│   └── favicon.svg      # Application favicon
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── FeatureCard.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── InsightCard.jsx
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   ├── SectionTitle.jsx
│   │   ├── StatPill.jsx
│   │   └── TextAnalyzer.jsx
│   ├── data/            # Mock data
│   │   └── mockData.js
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── Analyzer.jsx
│   │   ├── Dashboard.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.jsx          # Main app with routing
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles
├── index.html           # HTML entry point
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
└── .eslintrc.cjs        # ESLint configuration
```

## Design System

### Color Palette (Palette 3: Fresh Cyan/Mint)

- **Main Background**: `#020617` - Deep navy for base
- **Primary**: `#06B6D4` - Bright cyan for main actions
- **Accent**: `#22C55E` - Vibrant mint for highlights
- **Light Text**: `#E5E7EB` - Soft gray for readable text
- **Light Background**: `#F9FAFB` - Near-white for contrast

### Components

All components follow a consistent design pattern:
- Rounded corners (`rounded-lg`, `rounded-xl`)
- Soft shadows for depth
- Smooth transitions and hover effects
- Focus-visible states for accessibility
- Responsive breakpoints (sm, md, lg)

## Text Analysis Features

### Basic Metrics
- Character count (with and without spaces)
- Word count
- Sentence count
- Paragraph count
- Line count

### Advanced Metrics
- **Average Word Length**: Calculated from all words in text
- **Reading Time**: Estimated at 200 words per minute
- **Tone Detection**: Analyzes sentiment (Positive, Negative, Neutral, Technical)
- **Readability Score**: Uses Flesch Reading Ease algorithm

## Pages

### Home (`/`)
Landing page with hero section, feature cards, and call-to-action buttons.

### Analyzer (`/analyzer`)
Main text analysis workspace with real-time metrics display.

### Dashboard (`/dashboard`)
View analysis history, KPIs, and performance trends.

### About (`/about`)
Information about CharacterCounter, mission, and technology.

### Contact (`/contact`)
Contact form and ways to get in touch.

## Building for Production

1. Create a production build:
```bash
npm run build
```

2. The build output will be in the `dist/` directory

3. Preview the production build:
```bash
npm run preview
```

4. Deploy the `dist/` directory to your hosting service of choice

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility

The application follows web accessibility best practices:
- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support with focus-visible styles
- Sufficient color contrast ratios
- Responsive text sizing
- Mobile-friendly touch targets

## Privacy

All text processing happens locally in your browser. No data is sent to any server or stored remotely.

## License

© 2025 CharacterCounter. All rights reserved.
