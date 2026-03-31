# CSS Grid Holy Grail Layout Assignment

## Overview

This assignment will help you master CSS Grid by implementing the classic "Holy Grail" layout - a responsive web layout pattern that has been a staple of web design for decades. You'll create a mobile-first responsive design that adapts from a single-column mobile layout to a multi-column desktop layout, all using the power of CSS Grid.

## Learning Objectives

- Understand and implement CSS Grid layout systems
- Practice mobile-first responsive design principles
- Learn to use `grid-template-areas` for intuitive layout control
- Understand how CSS Grid can reorder visual elements independent of HTML source order
- Create flexible, content-driven layouts without fixed heights

## Getting Started

### 1. Download the Repository

**Important:** Download this repository as a ZIP file (do not clone it).

1. Click the green "Code" button on the repository page
2. Select "Download ZIP"
3. Extract the ZIP file to your working directory

### 2. Open the Project

Open the project folder in your code editor of choice and start editing the CSS file.

### 3. View Your Work

Open `index.html` in your web browser to see your layout. Refresh the page after making CSS changes to see updates.

## Assignment Rules

### ✅ What You CAN Do

- Modify **ONLY** the `css/style.css` file
- Add any CSS properties you need
- Use `height: 100vh` on the grid container (optional)
- Choose your own background colors for sections
- Add additional styling for typography, spacing, etc.

### ❌ What You CANNOT Do

- **DO NOT modify the HTML file** (`index.html`)
- **DO NOT use `height` or `min-height` properties on grid rows**
- **DO NOT create multiple grid containers or use subgrids** - use only the `body` element as your grid container

## Requirements

### Layout Requirements

1. **Use CSS Grid** to create the Holy Grail layout
2. **Mobile-first responsive design**
   - Start with mobile styles (no media query)
   - Add desktop styles in a media query (e.g., `@media (min-width: 768px)`)
3. **Single grid container**
   - The `body` element must be the only grid container
   - All five sections (header, nav, main, aside, footer) are direct children of this grid
4. **Use `grid-template-areas`** to control layout on both mobile and desktop

### Mobile Layout (Default)

On mobile screens, sections should stack vertically in this order:
1. Header
2. Menu (nav)
3. Content (main)
4. Ad (aside)
5. Footer

**Note:** The HTML source order is different from this required mobile order, so you'll need to use CSS Grid to rearrange the visual layout!

### Desktop Layout (Media Query)

On larger screens (768px and up), create the classic Holy Grail layout:
```
+----------------------------------+
|             Header               |
+--------+-----------------+-------+
|        |                 |       |
| Menu   |    Content      |  Ad   |
|        |                 |       |
+--------+-----------------+-------+
|             Footer               |
+----------------------------------+
```

- **Header**: Full width at top
- **Menu** (nav): Left sidebar
- **Content** (main): Center (widest column)
- **Ad** (aside): Right sidebar
- **Footer**: Full width at bottom

### Visual Requirements

- Use different background colors for each section (already provided, but you can change them)
- Sections should expand naturally based on their content
- No fixed heights on rows - let content determine height

## Testing Your Layout

The assignment includes interactive testing features:
- Click "Add More Content" in the Content section to add paragraphs
- Click "Add More Ad Content" in the Ad section to add paragraphs
- Use these buttons to verify your layout responds properly to dynamic content

### What to Test

1. **Mobile Layout**
   - Open browser DevTools and toggle device toolbar (or resize browser window)
   - Verify sections stack in correct order on narrow screens
   - Add content using buttons to ensure layout doesn't break

2. **Desktop Layout**
   - Expand browser window to 768px or wider
   - Verify three-column Holy Grail layout appears
   - Header and footer should span full width
   - Menu and Ad should be sidebars, Content should be the widest center column
   - Add content to verify columns maintain proper widths

3. **Responsive Transition**
   - Slowly resize browser window from narrow to wide
   - Layout should smoothly transition from stacked to Holy Grail layout at your chosen breakpoint
