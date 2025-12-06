# ITG Website Redesign

A modern redesign concept for the International Trumpet Guild website, transforming the current Joomla-based site into a clean, responsive, and user-friendly experience.

## Project Goals
- Modernize the visual design with a clean, professional aesthetic
- Improve navigation and information architecture
- Create a mobile-first, fully responsive experience
- Maintain brand identity while updating for 2025

## Design Decisions

**Color Palette:**
- Brand Orange (#f57e0b) - Primary CTAs and accents
- White/Light Gray backgrounds - Modern, clean aesthetic
- Dark text (#111827) - Readability and professionalism

**Key Improvements:**
- Simplified navigation (moved secondary items to footer/menu)
- Increased white space for better readability
- Card-based layouts for content organization
- Sticky header for easy navigation
- Mobile-responsive hamburger menu

## Tech Stack
- **React** - Component-based UI
- **React Router** - Multi-page navigation
- **Tailwind CSS** - utility-first styling
- **Lucide React** - Modern icon library

## Project Structure
```
src/
├── components/
│   ├── Header.jsx      # Navigation bar
│   ├── Hero.jsx        # Hero section
│   ├── Footer.jsx      # Footer component
│   └── (more to come)
├── pages/
│   ├── Home.jsx        # Homepage
│   ├── Events.jsx      # Events listing
│   ├── Resources.jsx   # Resources page
│   └── Login.jsx       # Login page
└── App.js              # Main app with routing
```

## Current Progress

**Day 1:**
- [x] Project setup with React & Tailwind
- [x] Custom color system implementation
- [x] Header component with mobile menu
- [x] Hero section with CTAs
- [x] Basic homepage layout
- [x] Footer component

**Day 2:**
- [x] Built reusable EventCard and NewsCard components
- [x] Improved hero section with better copy and gradient
- [x] Added "Why Join ITG" benefits section
- [x] Implemented smooth scroll animations (AOS)
- [x] Updated navigation to match ITG structure (News, Journal, Resources Events, Membership, Conference)
- [x] Enhanced footer with secondary links (Give, Store, Network, Contact)
- [x] Added My Account and social media links
- [x] Polished desktop and mobile layouts

**Day 3:** Complete
- [x] Built complete Events page with filtering and search
- [x] Built Resources page with organized categories
- [x] Built Login page with form validation
- [x] Connected all navigation flows
- [x] Sticky filter bars and search functionality
- [x] Category-based resource organization
- [x] Professional authentication UI


## Running Locally
```bash
npm install
npm start
```

Opens on `http://localhost:3000`

## Screenshots

### Day 2 Progress - Homepage Complete
![Homepage Full](screenshots/day2-homepage.png)

### Day 3 Progress - Events, Resources, and Login Pages Complete

**Events Page**
![Events Page](screenshots/day3-eventspage.png)

**Resources Page**
![Resources Page](screenshots/day3-resourcespage1.png)
![Resources Page](screenshots/day3-resourcespage2.png)

**Login Page**
![Login Page](screenshots/day3-loginpage.png)

## About This Project

This redesign was created as part of a portfolio project demonstrating:
- Modern web design principles
- React component architecture
- Responsive design best practices
- Understanding of organizational website needs

---

**Current Status:** Day 3 - Events, Resources, and Login Pages Complete