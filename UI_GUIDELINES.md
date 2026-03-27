# Impact Sphere UI Guidelines

## Design System Overview

Impact Sphere uses a cohesive design system built on a purple-pink color palette with modern, rounded aesthetics and smooth animations.

## Color Palette

### Primary Colors
- **Deep Purple**: `#3E2A8A` - Primary brand color, headings, logo
- **Primary Purple**: `#55125B` - Secondary headings, important text
- **Secondary Purple**: `#8E3189` - Accents, highlights
- **Accent Purple**: `#A05799` - Navigation links, subtle accents

### Secondary Colors
- **Accent Blue**: `#4652A7` - Buttons, CTAs, interactive elements
- **Light Blue**: `#61A2DF` - Backgrounds, glass effects
- **Text Blue**: `#708ADE` - Body text, descriptions

### Background Colors
- **Primary Background**: `#ECD5E8` - Main page background (light pink/lavender)
- **Card Pink**: `rgba(244, 219, 240, 0.94)` - Card backgrounds
- **Glass Blue**: `rgba(97, 162, 223, 0.8)` - Navigation, section backgrounds
- **Card Purple**: `rgba(142, 49, 137, 0.3)` - Overlay backgrounds

### Text Colors
- **Primary Text**: `#55125B` - Main body text
- **Secondary Text**: `#A05799` - Navigation, links
- **Muted Text**: `#708ADE` - Descriptions, secondary content
- **White**: `#FFFFFF` - Text on dark/colored backgrounds
- **Light Pink**: `#F4DBF0` - Button text on dark backgrounds

## Typography

### Font Families
- **Display/Headings**: Poppins (weights: 300, 400, 500, 600, 700)
- **Serif/Quotes**: Cormorant Garamond (weights: 300, 400, 500, 600)
- **Accent/Decorative**: Playfair Display (weights: 400, 500, 600, 700)

### Type Scale

| Element | Mobile | Tablet | Desktop | Weight | Color |
|---------|--------|--------|---------|--------|-------|
| H1 (Hero) | text-4xl (36px) | text-5xl (48px) | text-6xl (60px) | bold (700) | #3E2A8A |
| H2 (Section) | text-2xl (24px) | text-3xl (30px) | text-4xl (36px) | extrabold (800) | #55125B |
| H3 (Card) | text-lg (18px) | text-xl (20px) | text-2xl (24px) | bold (700) | white/#55125B |
| Body | text-base (16px) | text-base (16px) | text-lg (18px) | normal (400) | #708ADE |
| Caption | text-sm (14px) | text-sm (14px) | text-base (16px) | normal (400) | #A05799 |
| Nav Link | text-sm (14px) | text-base (16px) | text-lg (18px) | medium (500) | #A05799 |
| Button | text-base (16px) | text-base (16px) | text-lg (18px) | bold (700) | #F4DBF0 |

### Typography Rules
- **Line Height**: 1.5em for body text, 1.2em for headings
- **Text Align**: Center for hero sections and cards, left for body content
- **Text Transform**: Uppercase for section titles only
- **Letter Spacing**: Default (no tracking adjustments)

## Spacing System

### Section Spacing
- **Section Padding**: `py-12 sm:py-16 lg:py-20` (48px/64px/80px)
- **Section Padding X**: `px-4 sm:px-6 lg:px-8` (16px/24px/32px)
- **Container Max Width**: `max-w-7xl` (1280px)
- **Content Max Width**: `max-w-6xl` (1152px)

### Component Spacing
- **Card Gap**: `gap-4 sm:gap-6 lg:gap-8` (16px/24px/32px)
- **Card Padding**: `p-4 sm:p-6 lg:p-8` (16px/24px/32px)
- **Element Gap**: `gap-2 sm:gap-3 lg:gap-4` (8px/12px/16px)

### Navigation
- **Nav Height**: `py-3 sm:py-4 lg:py-5` (12px/16px/20px)
- **Nav Padding X**: `px-4 sm:px-6 lg:px-8` (16px/24px/32px)
- **Nav Top Position**: `top-4 sm:top-6 lg:top-8` (16px/24px/32px)

## Border Radius

- **Small**: `rounded-lg` (8px) - Small buttons, tags
- **Medium**: `rounded-2xl` (16px) - Cards, inputs
- **Large**: `rounded-3xl` (24px) - Large cards, modals
- **Pill**: `rounded-[70px]` - Navigation bar, CTA buttons, section containers
- **Full**: `rounded-full` - Avatar images, icon buttons

## Shadows & Effects

### Glass Effect (Navigation)
```css
background: rgba(97, 162, 223, 0.8);
backdrop-filter: blur(10px);
border-radius: 70px;
```

### Card Shadow
```css
box-shadow: 0px 4px 4px 0px rgba(142, 49, 137, 0.6);
```

### Hover Shadow
```css
box-shadow: 0px 8px 20px 0px rgba(142, 49, 137, 0.8);
```

### Gradient Overlays
- **Card Overlay**: `bg-gradient-to-t from-black/60 via-black/20 to-transparent`
- **Text Overlay**: `bg-gradient-to-t from-black/30 to-transparent`

## Animations

### Standard Animation Config
```javascript
const standardTransition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for smooth deceleration
};

const staggerDelay = 0.1;
```

### Animation Patterns

1. **Fade In Up** (Hero elements)
   - Initial: `{ opacity: 0, y: 40 }`
   - Animate: `{ opacity: 1, y: 0 }`
   - Duration: 0.8s
   - Stagger: 0.2s between elements

2. **Scale In** (Logo, images)
   - Initial: `{ opacity: 0, scale: 0.9 }`
   - Animate: `{ opacity: 1, scale: 1 }`
   - Duration: 0.8s

3. **Slide In** (Navigation)
   - Initial: `{ y: -100, opacity: 0 }`
   - Animate: `{ y: 0, opacity: 1 }`
   - Duration: 0.8s

4. **Hover Effects**
   - Cards: `whileHover={{ y: -8, scale: 1.02 }}`
   - Buttons: `whileHover={{ scale: 1.05 }}`
   - Links: `whileHover={{ y: -2 }}`
   - Duration: 0.3s

5. **Scroll Reveal** (Sections)
   - Use `whileInView` with `viewport={{ once: true }}`
   - Initial: `{ opacity: 0, y: 40 }`
   - Stagger children: 0.1s delay per item

## Components

### Navigation Bar
- Fixed position, centered with `left-1/2 -translate-x-1/2`
- Width: 95% on mobile, max-w-6xl on desktop
- Glass effect background
- Pill shape (rounded-[70px])
- Logo on left, nav links center, CTA button right
- Mobile: Hamburger menu or simplified layout

### Buttons

**Primary Button (CTA)**
- Background: `#4652A7`
- Text: `#F4DBF0` (light pink)
- Padding: `px-8 py-4` (mobile), `px-10 py-5` (desktop)
- Border radius: `rounded-[70px]`
- Font: Bold, 16px-18px
- Shadow: `0px 4px 4px 0px rgba(142, 49, 137, 0.6)`
- Hover: Scale 1.05, enhanced shadow

**Secondary Button (Outline)**
- Background: transparent
- Border: 2px solid `#4652A7`
- Text: `#4652A7`
- Padding: `px-6 py-2.5`
- Border radius: `rounded-full`
- Hover: Background `#4652A7`, text white

### Cards

**Project Card**
- Aspect ratio: 3:4 (aspect-[3/4])
- Border radius: `rounded-3xl`
- Background: Colored background with image overlay
- Gradient overlay at bottom for text
- Hover: Lift up 8px, scale 1.02

**Team Card**
- Aspect ratio: 3:4
- Border radius: `rounded-3xl`
- Background: Solid color or image with overlay
- Name and role at bottom with gradient overlay
- Hover: Lift and scale

### Sections

**Hero Section**
- Full viewport height (min-h-screen)
- Centered content
- Large logo/placeholder at top
- Main heading (H1)
- Tagline/subheading
- CTA button
- Padding top accounts for fixed nav (pt-32)

**Content Section**
- Container with max-width
- Optional colored background (rounded-[70px])
- Padding: `p-8 sm:p-12 lg:p-16`
- Section heading centered
- Grid or flex content layout

## Responsive Breakpoints

- **Mobile**: < 640px (default)
- **Tablet**: 640px - 1024px (sm:, md:)
- **Desktop**: > 1024px (lg:, xl:)

### Mobile-First Approach
- Start with mobile styles
- Use `sm:`, `md:`, `lg:`, `xl:` prefixes to enhance for larger screens
- Stack elements vertically on mobile
- Use grids (2-col, 3-col, 4-col) on larger screens

## Accessibility

### Color Contrast
- All text meets WCAG AA standards (4.5:1 for normal text, 3:1 for large text)
- White text always has sufficient contrast against colored backgrounds

### Focus States
- All interactive elements must have visible focus states
- Use `focus:outline-none focus:ring-2 focus:ring-[#4652A7]`

### Motion
- Respect `prefers-reduced-motion` media query
- Ensure content is accessible without animations

## Best Practices

1. **Consistency**: Use the spacing and typography scales consistently
2. **Reuse Components**: Don't duplicate nav/footer code - use shared components
3. **CSS Variables**: Use the color variables from globals.css
4. **Animations**: Keep animations subtle and purposeful
5. **Mobile First**: Design for mobile, enhance for desktop
6. **Testing**: Test on multiple screen sizes and browsers

## File Structure

```
app/
├── components/
│   ├── Navigation.tsx    # Shared navigation
│   ├── Footer.tsx        # Shared footer
│   ├── Button.tsx        # Reusable button
│   └── Section.tsx       # Reusable section wrapper
├── globals.css           # Global styles and CSS variables
├── layout.tsx            # Root layout with fonts
├── page.tsx              # Home page
├── team/
│   └── page.tsx          # Team page
└── about/
    └── page.tsx          # About page
```

## Implementation Notes

1. Always import shared components instead of duplicating code
2. Use Next.js Image component for optimized images
3. Use Framer Motion for animations
4. Use Tailwind CSS utility classes
5. Keep components in the `components/` folder
6. Test animations on low-end devices
