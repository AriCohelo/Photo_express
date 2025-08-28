# STYLING SYSTEM BACKUP

## Current CSS/Tailwind Mixed Architecture

### Overview
The project is currently using a hybrid approach with both Tailwind CSS and custom CSS classes defined in `src/index.css`. This creates confusion and maintenance issues.

### Current Color Palette (CSS Variables)
```css
:root {
  /* Brand Colors */
  --champagne-pink: #F7DFD4;
  --tea-rose: #E8B4CB;
  --redwood: #B85450;
  --violet: #7209B7;
  --violet-jtc: #5d2e46;
  --logo-teal: #2d7a7a;
  --logo-orange: #ff6b35;
  
  /* UI Colors */
  --background: linear-gradient(135deg, var(--champagne-pink) 0%, var(--tea-rose) 50%, var(--redwood) 100%);
  --glass-background: rgba(255, 255, 255, 0.25);
  --glass-border: rgba(255, 255, 255, 0.18);
  --glass-hover: rgba(255, 255, 255, 0.3);
  --feature-card-background: rgba(255, 255, 255, 0.3);
  
  /* Transitions */
  --transition-fast: 0.15s ease;
  --transition-normal: 0.3s ease;
  --transition-slow: 0.6s ease;
}
```

### Current Custom Classes
- `.glass-effect` - Glassmorphism background with backdrop blur
- `.glass-hover` - Hover state for glass elements
- `.gradient-text` - Text gradient from redwood to violet
- `.logo-text` - Teal color for logo text
- `.logo-accent` - Orange color for logo accent
- `.logo-icon` - Teal color for logo icons
- `.fade-in` - Fade in animation
- `.product-card` - Product card hover effects
- `.thumbnail` - Thumbnail hover effects and active state
- `.feature-card` - Feature card styling and hover
- `.btn-primary` - Primary button with gradient background
- `.btn-secondary` - Secondary button with border and hover

### Components Using Mixed Approach
Based on the codebase, components are using both:
- Custom CSS classes (like `glass-effect`, `gradient-text`, `btn-primary`)
- Tailwind utilities (like `px-4`, `py-3`, `rounded-xl`, `flex`)

### Current Body Styling
```css
body {
  font-family: 'Roboto Condensed', 'Inter', sans-serif;
  background: var(--background);
  min-height: 100vh;
  margin: 0;
  padding: 0;
}
```

### Issues Identified
1. Mixing custom CSS with Tailwind creates inconsistency
2. Some effects like glassmorphism and gradients are hard to replicate with pure Tailwind
3. Color palette is defined in CSS variables but could be in Tailwind config
4. Custom animations and transitions could be converted to Tailwind utilities

### Rollback Plan
If styling conversion fails, restore this exact `index.css` file and ensure all components continue using the mixed approach with these exact class names and CSS variable references.