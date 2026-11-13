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
├── main.js               Form validation and mobile nav
├── css/
│   ├── tokens.css        Design tokens from the Figma style tile
│   └── styles.css        Layout and components
├── assets/               Testing & demo artifacts
│   ├── axe-report.png
│   ├── axe-report-with-best-practices.png
│   ├── wave-report-1.png
│   ├── wave-report-2.png
│   ├── lighthouse-report-with-best-practices.pdf
│   ├── seo-accessibility-report.pdf
│   └── kestrel-bay-demo-video.mov
└── README.md
```

---

## Assets & Testing Reports

Accessibility testing and validation artifacts stored in the `assets/` folder:

| File | Contents |
|------|----------|
| `axe-report.png` | axe DevTools accessibility scan results (baseline) |
| `axe-report-with-best-practices.png` | axe DevTools scan with WCAG 2.1 AA best practices enabled |
| `wave-report-1.png` | WAVE (WebAIM) accessibility test results — page 1 |
| `wave-report-2.png` | WAVE (WebAIM) accessibility test results — page 2 |
| `lighthouse-report-with-best-practices.pdf` | Chrome Lighthouse audit report (Accessibility, Performance, SEO, Best Practices) |
| `seo-accessibility-report.pdf` | Combined SEO and accessibility audit documentation |
| `kestrel-bay-demo-video.mov` | Recorded demonstration of the Kestrel Bay Health homepage (responsive design, navigation, form validation) |

---
 
## Accessibility testing
 
| Check | Tool / method | Result |
|---|---|---|
| axe DevTools scan | axe-core 4.13.0 (WCAG 2.1 AA) | 0 issues (0 Critical, 0 Serious) |
| Automated scan | WAVE (WebAIM) | 0 Errors, 0 Contrast Errors, 0 Alerts (AIM Score: 10/10) |
| Lighthouse accessibility score | Chrome Lighthouse 13.5.0 (Desktop) | 100 / 100 (27 passed audits) |
| Keyboard-only navigation | Manual (Tab / Shift+Tab / Enter) | Pass - skip link first, logical tab order, visible focus rings on all controls, no keyboard traps |
| Screen reader | macOS VoiceOver (Safari / Chrome) | Pass — landmarks, H1–H3 outline, form labels, and live validation errors announced cleanly; decorative icons ignored |
| 200% zoom and 320px reflow | Manual (Chrome 200% zoom & 320px viewport) | Pass — single-column reflow, mobile menu works, no clipped text or horizontal scroll |
 
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