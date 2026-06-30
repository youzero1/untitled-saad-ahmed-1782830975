---
status: implemented
title: Multiplication Table of 23
---

# Multiplication Table of 23

Build a single-page app that displays the multiplication table of 23 (from 23 × 1 up to 23 × 10) in a clean, styled table.

## Steps

1. **Create the global stylesheet** at `/app/src/styles/global.css` — it must start with `@import "tailwindcss";`. Add no other content.

2. **Create the app entry point** at `/app/src/main.tsx` — render the root React component and import the global stylesheet.

3. **Create the main App component** at `/app/src/App.tsx`:
   - Display a centered heading: "Multiplication Table of 23".
   - Render a table with three columns: **Multiplicand** (always 23), **Multiplier** (1 through 10), and **Product** (the result).
   - Each row shows one multiplication: e.g. "23 × 1 = 23", "23 × 2 = 46", … up to "23 × 10 = 230".
   - Style the table with Tailwind classes: alternating row colors, rounded corners, a subtle border, centered on the page with comfortable padding, and a visually appealing header row with a distinct background color.
   - The page background should be a light neutral color; the overall look should be clean and modern.

4. **Verify the entry HTML file** at `/app/index.html` exists and includes a root div and a script tag pointing to the main entry point.

### Expected Outcome
When the app loads, the user sees a nicely styled table showing all ten multiplications of 23, centered on the screen with a clear title above it.
