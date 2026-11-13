# Kestral Bay Health
This is a sample web application for the hospital called Kestral Bay Health. 
This is an accessibility-first homepage for a fictional regional health system, designed in Figma and built with semantic HTML, CSS, and vanilla JavaScript. The project targets WCAG 2.2 Level AA and documents every accessibility decision from design through code.

This project is just a sample web application that demonstrates the Accessibility features through code and 
Figma design. 


> **Note:** Kestrel Bay Health is a fictional organization created as a portfolio demo. Names, addresses, and phone numbers are not real.


**Live site:** [Kestrel Bay Health](https://prateekrauniyar345.github.io/kestrel-bay-health/)
<br>
**Figma design:** [Figma Design](https://www.figma.com/design/a0Nw4BHJpBFWdvNMeZsjjz/Kestrel-Bay-Health?node-id=0-1&t=UwiVwraO83f5xMqV-1)
 
---
 
## Why this project
 
Healthcare websites serve everyone: patients using screen readers, older adults who zoom to 200%, people navigating by keyboard, and anyone in a stressful moment who needs to find care fast. This project shows how I approach that work end to end:
 
1. **Design** a style tile and homepage in Figma with contrast-checked colors and accessible components
2. **Annotate** the design with heading levels, landmarks, tab order, and focus behavior, each tied to a WCAG criterion
3. **Build** it in semantic HTML and CSS that matches the annotations line for line
4. **Test** with automated tools and manual checks, then fix what they find
---
 
## Features
 
- **Semantic structure:** `header`, `nav`, `main`, `footer` landmarks; one H1; no skipped heading levels
- **Keyboard support:** skip link as the first focusable element; tab order follows visual order; no positive `tabindex`
- **Visible focus:** high-contrast double focus ring (white inner, amber outer) on every interactive element, never hidden behind the sticky header
- **Accessible forms:** visible `<label>` elements, placeholders used only as hints, errors linked with `aria-describedby` and shown with text plus an icon
- **Color and contrast:** all text pairs meet 4.5:1; links are underlined so meaning never relies on color alone
- **Target size:** buttons and inputs are at least 44px tall (above the 24px WCAG 2.2 minimum)
- **Responsive layout:** CSS Grid and Flexbox; reflows at 320px with no horizontal scroll
- **Reduced motion:** respects `prefers-reduced-motion`
- **SEO basics:** meta description, Open Graph tags, and schema.org `MedicalOrganization` structured data
---
 
## Design system
 
Defined in Figma and mirrored in `css/tokens.css` as CSS custom properties.
 
| Token | Hex | Contrast on white |
|---|---|---|
| Primary/Navy | `#0B3D5C` | 11.4:1 |
| Primary/Teal | `#0F7C7A` | 5.0:1 |
| Text/Dark | `#1F2933` | 14.8:1 |
| Text/Muted | `#52606D` | 6.5:1 |
| Surface/Light | `#F2F6F9` | Background |
| Focus/Amber | `#D97706` | 3.2:1 (non-text, needs 3:1) |
| Error/Red | `#B42318` | 6.6:1 |
 
**Typography:** Atkinson Hyperlegible (designed by the Braille Institute for low-vision readability) for headings, with a six-step type scale from Display (48/56) to Body Small (16/24).
 
---
 
## Tech stack
 
- HTML5, CSS3 (Grid, Flexbox, custom properties), vanilla JavaScript
- Figma for design, components, and accessibility annotations
- Hosted on GitHub Pages
No frameworks, so the markup stays close to what a CMS theme (Drupal, WordPress) would output.
 
---
 
## Project structure
 
```
kestrel-bay-health/
├── index.html            Homepage
├── accessibility.html    Accessibility statement
├── audit.html            Before/after audit case study
├── css/
│   ├── tokens.css        Design tokens from the Figma style tile
│   └── styles.css        Layout and components
├── js/
│   └── main.js           Form validation and mobile nav
└── README.md
```
 
---
 
## Accessibility testing
 
| Check | Tool / method | Result |
|---|---|---|
| Automated scan | axe DevTools | TBD |
| Automated scan | WAVE | TBD |
| Lighthouse accessibility score | Chrome Lighthouse | TBD |
| Keyboard-only navigation | Manual | TBD |
| Screen reader | NVDA / VoiceOver | TBD |
| 200% zoom and 320px reflow | Manual | TBD |
 
Full findings and fixes are documented on the [audit case study page](#).
 
---
 
## Running locally
 
```bash
git clone https://github.com/prateekrauniyar345/kestrel-bay-health.git
cd kestrel-bay-health
# Open index.html in a browser, or serve it:
python3 -m http.server 8000
```
 
Then visit `http://localhost:8000`.
 
---
 
## Author
 
**Pratik Rauniyar**
Software Engineering Assistant, University of Idaho (RCDS/IIDS)
<br>
GitHub: [prateekrauniyar345](https://github.com/prateekrauniyar345)