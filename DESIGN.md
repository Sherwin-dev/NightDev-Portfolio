---
name: NightDev Portfolio
description: Design system for the NightDev personal portfolio. Dark-first, developer-oriented, minimal, and consistent.
version: 1.0.0
colors:
  primary: "#1A1C1E"
  primary-hover: "#24272A"
  primary-active: "#2E3236"
  secondary: "#8B949E"
  accent: "#4CC2FF"
  accent-hover: "#7AD3FF"
  accent-active: "#2BA8E8"
  background: "#0F1113"
  surface: "#1A1C1E"
  surface-raised: "#22252A"
  border: "#2E3236"
  border-strong: "#444A51"
  text-primary: "#E6EDF3"
  text-secondary: "#9DA7B3"
  text-muted: "#6E7681"
  text-on-accent: "#0F1113"
  success: "#3FB950"
  warning: "#D29922"
  error: "#F85149"
  focus-ring: "#4CC2FF"
typography:
  font-family-base: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
  font-family-mono: "ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace"
  display:
    fontSize: 3rem
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.02em
  h1:
    fontSize: 2.25rem
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.01em
  h2:
    fontSize: 1.75rem
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.01em
  h3:
    fontSize: 1.375rem
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0
  body:
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-small:
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontSize: 0.75rem
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.02em
  code:
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
rounded:
  none: 0px
  sm: 2px
  md: 4px
  lg: 8px
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  4xl: 96px
layout:
  max-width: 1120px
  content-width: 720px
  gutter: 24px
  columns: 12
  breakpoints:
    sm: 640px
    md: 768px
    lg: 1024px
    xl: 1280px
elevation:
  none: "none"
  sm: "0 1px 2px rgba(0, 0, 0, 0.4)"
  md: "0 4px 12px rgba(0, 0, 0, 0.45)"
  lg: "0 12px 32px rgba(0, 0, 0, 0.5)"
motion:
  duration-fast: 120ms
  duration-base: 200ms
  duration-slow: 320ms
  easing-standard: "cubic-bezier(0.2, 0, 0, 1)"
  easing-exit: "cubic-bezier(0.4, 0, 1, 1)"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.text-on-accent}"
    rounded: "{rounded.md}"
    padding: "10px 20px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: "10px 20px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: "24px"
  input:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: "10px 12px"
  tag:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.text-secondary}"
    rounded: "{rounded.sm}"
    padding: "2px 8px"
  code-block:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: "16px"
---

## Overview

NightDev Portfolio is the personal site of a full-stack and desktop software engineer. The design system favors a dark, low-glare interface that feels at home to developers: calm surfaces, a single bright accent, monospaced details, and generous spacing.

Design principles:

- **Content first.** Projects, writing, and contact details are the focus. Decoration never competes with them.
- **One accent.** A single cyan accent marks interactive elements and key information. Everything else stays neutral.
- **Consistency over novelty.** Every component draws from the tokens defined in the frontmatter. No one-off values in components.
- **Accessible by default.** Contrast, focus visibility, keyboard support, and reduced motion are baseline requirements, not extras.
- **Simple to maintain.** Fewer tokens, fewer variants, predictable names.

The system is dark-first. A light theme is out of scope for v1.0.0 and, if added later, must map the same semantic token names to new values.

## Colors

The palette is built on near-black neutrals with `primary` (`#1A1C1E`) as the brand and surface color, and one cyan accent.

| Token | Value | Usage |
| --- | --- | --- |
| `primary` | `#1A1C1E` | Brand color, default surface for cards and header |
| `primary-hover` | `#24272A` | Hover state on primary-colored surfaces |
| `primary-active` | `#2E3236` | Pressed state on primary-colored surfaces |
| `background` | `#0F1113` | Page background, input and code block fill |
| `surface` | `#1A1C1E` | Cards, navigation, panels |
| `surface-raised` | `#22252A` | Tags, dropdowns, elements above a surface |
| `border` | `#2E3236` | Default dividers and outlines |
| `border-strong` | `#444A51` | Emphasized outlines, input hover |
| `accent` | `#4CC2FF` | Links, primary buttons, focus, highlights |
| `accent-hover` | `#7AD3FF` | Hover state of accent elements |
| `accent-active` | `#2BA8E8` | Pressed state of accent elements |
| `text-primary` | `#E6EDF3` | Headings and body text |
| `text-secondary` | `#9DA7B3` | Supporting text, descriptions |
| `text-muted` | `#6E7681` | Placeholders, metadata, disabled text |
| `text-on-accent` | `#0F1113` | Text placed on top of the accent color |
| `success` | `#3FB950` | Success messages and confirmations |
| `warning` | `#D29922` | Warnings and cautions |
| `error` | `#F85149` | Errors and destructive actions |
| `focus-ring` | `#4CC2FF` | Keyboard focus outline |

Color rules:

- Body text on `background` or `surface` must meet WCAG AA contrast (4.5:1 minimum). `text-primary` and `text-secondary` both satisfy this; `text-muted` must only be used for non-essential content.
- Never use color as the only way to communicate state. Pair it with an icon, label, or text change.
- Use `accent` sparingly: at most one primary accent action per view section.

## Typography

The site uses system font stacks so pages load fast and render natively on every platform. No web fonts are loaded.

- **Base family:** `system-ui` stack, defined as `font-family-base`.
- **Monospace family:** `ui-monospace` stack, defined as `font-family-mono`, used for code, tags, technical metadata, and optional section labels.

Type scale:

| Style | Size | Weight | Line height | Usage |
| --- | --- | --- | --- | --- |
| `display` | 3rem | 700 | 1.1 | Hero headline only |
| `h1` | 2.25rem | 700 | 1.2 | Page title |
| `h2` | 1.75rem | 600 | 1.25 | Section title |
| `h3` | 1.375rem | 600 | 1.3 | Card and subsection title |
| `body` | 1rem | 400 | 1.6 | Default paragraph text |
| `body-small` | 0.875rem | 400 | 1.5 | Secondary text, card descriptions |
| `caption` | 0.75rem | 500 | 1.4 | Labels, timestamps, tag text |
| `code` | 0.875rem | 400 | 1.6 | Inline code and code blocks |

Typography rules:

- Keep line length between 60 and 80 characters for long-form text (`content-width: 720px`).
- Use only one `h1` per page and do not skip heading levels.
- On viewports below `md` (768px), reduce `display` to 2.25rem and `h1` to 1.875rem.

## Layout

The layout is a centered, single-column-first structure that expands to a 12-column grid on larger screens.

- **Max width:** 1120px for page containers; 720px for reading content.
- **Gutter:** 24px between columns and as horizontal page padding on mobile (16px below `sm`).
- **Spacing scale:** based on a 4px unit (`xs` 4, `sm` 8, `md` 16, `lg` 24, `xl` 32, `2xl` 48, `3xl` 64, `4xl` 96).
- **Section rhythm:** vertical spacing between page sections is `3xl` (64px) on mobile and `4xl` (96px) on desktop.
- **Breakpoints:** `sm` 640, `md` 768, `lg` 1024, `xl` 1280. Design mobile first and enhance upward.

Page structure:

1. Header with site name and navigation, sticky at the top.
2. Hero section with name, role, short summary, and primary call to action.
3. Projects section as a responsive grid of cards (1 column on mobile, 2 on `md`, 3 on `lg`).
4. About and tech stack section.
5. Contact section.
6. Footer with secondary links.

Layout rules:

- Use spacing tokens only. Do not introduce arbitrary pixel values.
- Align content to the grid; avoid horizontal scrolling at any viewport width.
- Touch targets must be at least 44x44px.

## Shapes

Corners are sharp with a restrained 4px radius, which gives the interface a precise, technical feel.

| Token | Value | Usage |
| --- | --- | --- |
| `none` | 0px | Full-bleed sections, dividers |
| `sm` | 2px | Tags, small badges |
| `md` | 4px | Default: buttons, cards, inputs, code blocks |
| `lg` | 8px | Large containers and modals |
| `full` | 9999px | Avatars and status dots only |

Shape rules:

- Use `md` (4px) unless a component explicitly calls for another token.
- Do not mix radius values inside one component group.
- Borders are 1px solid `border`. Use `border-strong` only for hover and emphasis.

Elevation is minimal. Prefer borders over shadows to separate surfaces. Use `elevation.sm` for sticky headers, `elevation.md` for dropdowns, and `elevation.lg` for modals.

## Components

All components use tokens from the frontmatter. Each component must define default, hover, focus-visible, active, and disabled states where applicable.

### Buttons

- **Primary:** `accent` background, `text-on-accent` text, `rounded.md`, padding `10px 20px`. Hover uses `accent-hover`; active uses `accent-active`.
- **Secondary:** transparent background, `text-primary` text, 1px `border` outline. Hover changes the border to `border-strong` and the background to `primary-hover`.
- **Disabled:** 50% opacity, no pointer events, and `aria-disabled` set for assistive technology.
- Button labels use `body-small` at weight 600 and describe the action ("View project", not "Click here").

### Cards

- Background `surface`, 1px `border` outline, `rounded.md`, padding 24px.
- Hover: border changes to `border-strong`; the card may lift with `elevation.sm`.
- Project cards contain, in order: title (`h3`), description (`body-small`, `text-secondary`), tag list, and links.
- Whole-card links must still expose a single clear focusable element.

### Inputs

- Background `background`, 1px `border` outline, `rounded.md`, padding `10px 12px`, text `text-primary`.
- Placeholder uses `text-muted`. Labels sit above the input in `caption` or `body-small` and are always visible.
- Focus: 2px `focus-ring` outline with a 2px offset.
- Error: border `error` and an error message below the field in `error` color, linked using `aria-describedby`.

### Tags

- Background `surface-raised`, text `text-secondary`, `rounded.sm`, padding `2px 8px`, `caption` style in the monospace family.
- Used for technology labels (for example language or framework names). Tags are not interactive unless explicitly built as filters.

### Code blocks

- Background `background`, 1px `border` outline, `rounded.md`, padding 16px, `code` style in the monospace family.
- Horizontal overflow scrolls inside the block and never breaks the page layout.

### Navigation

- Sticky header using `surface` background with a bottom 1px `border`.
- Links use `text-secondary`; the current page uses `text-primary` with an `accent` underline.
- Collapses into a menu button below `md` (768px). The menu must be keyboard accessible and trap focus while open.

### Links

- Inline links use `accent` and are underlined. Hover uses `accent-hover`.
- External links include an accessible label indicating that they open a new tab and use `rel="noopener noreferrer"`.

### Motion

- Transitions use `duration-fast` (120ms) for hover and color changes, `duration-base` (200ms) for most state changes, and `duration-slow` (320ms) for page-level reveals.
- Use `easing-standard` for entering and `easing-exit` for leaving.
- Respect `prefers-reduced-motion: reduce` by disabling non-essential animation.

## Do's and Don'ts

Do:

- Do keep it simple. Use the fewest elements needed to communicate clearly.
- Do use tokens from this file for every color, space, radius, and type value.
- Do keep a single accent action per section.
- Do provide visible focus states and full keyboard navigation.
- Do test contrast for any new color pairing against WCAG AA.
- Do use semantic HTML (`header`, `nav`, `main`, `section`, `footer`) and meaningful alt text.
- Do write copy that is short, direct, and specific to the work shown.
- Do design mobile first and verify at every breakpoint.

Don't:

- Don't overcomplicate. Avoid extra variants, nested containers, and decorative effects without a purpose.
- Don't hard-code hex values, pixel sizes, or font stacks inside components.
- Don't use more than one accent color or introduce new brand colors without updating this document.
- Don't rely on color alone to convey meaning.
- Don't use shadows as the primary way to separate content; prefer borders.
- Don't mix corner radii within the same component group.
- Don't autoplay animation or video, and don't animate layout properties that cause reflow.
- Don't use `text-muted` for essential information.

## Change Log

- 1.0.0: Initial full design system covering colors, typography, layout, shapes, components, and usage rules.