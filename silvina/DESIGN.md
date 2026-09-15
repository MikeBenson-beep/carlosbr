---
name: Estudio Jurídico Méndez Acosta
description: Un expediente legal sereno y contemporáneo que convierte claridad profesional en una consulta directa.
colors:
  wine: "#581827"
  wine-deep: "#2d0c14"
  ink: "#151311"
  paper: "#f6f2e9"
  paper-deep: "#e9e2d6"
  sand: "#cbb181"
  muted: "#675f58"
  line: "rgba(21, 19, 17, 0.2)"
  white: "#ffffff"
  sand-highlight: "#dfc89d"
  focus-coral: "#c58a73"
  whatsapp-green: "#176b4d"
typography:
  display:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(58px, 6.5vw, 96px)"
    fontWeight: 400
    lineHeight: 0.91
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(54px, 7vw, 100px)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(32px, 3.25vw, 48px)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.025em"
  body:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  action:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "normal"
  label:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.12em"
rounded:
  none: "0"
  monogram: "50%"
spacing:
  xs: "8px"
  sm: "12px"
  md: "20px"
  lg: "30px"
  xl: "54px"
  page: "clamp(22px, 5vw, 78px)"
  section: "clamp(110px, 11vw, 170px)"
components:
  button-primary:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.ink}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "58px"
  button-primary-hover:
    backgroundColor: "{colors.sand-highlight}"
    textColor: "{colors.ink}"
  text-action:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "8px 0"
  practice-row:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "30px 20px 30px 0"
    height: "164px"
  contact-row:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    rounded: "{rounded.none}"
    padding: "20px 4px"
    height: "112px"
  whatsapp-mobile:
    backgroundColor: "{colors.whatsapp-green}"
    textColor: "{colors.white}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "56px"
  mobile-header:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.none}"
    height: "calc(72px + env(safe-area-inset-top))"
  menu-control:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    rounded: "{rounded.none}"
    padding: "8px"
    size: "44px"
  directional-icon:
    backgroundColor: "transparent"
    textColor: "currentColor"
    size: "17px"
---

# Design System: Estudio Jurídico Méndez Acosta

## Overview

**Creative North Star: "El expediente sereno"**

The visual world translates a legal case dossier into a calm contemporary landing page. A charcoal case cover establishes gravity; oxblood binding, ivory document paper, brass actions, indexing rules, tab-like metadata, and editorial typography make the information feel ordered rather than institutional. The mood is composed, exact, local, and quietly premium.

The system is deliberately factual. Two refined but recognizable supplied office photographs act as evidence—the main office view in the hero and the reception view in the studio—while restrained transitions and authored directional icons help the page settle and guide without delaying access to the consultation path. Decorative spectacle, generic courthouse imagery, and inflated markers of prestige have no role here.

**Key Characteristics:**

- Charcoal cover fields, oxblood binding, and warm ivory paper.
- Newsreader editorial headlines paired with compact DM Sans metadata.
- Hairline rules that index content instead of boxed cards.
- Sharp rectangular actions and one circular monogram.
- Muted-brass actions and a consistent authored SVG arrow system.
- Two real supplied office views, selectively desaturated and contrast-refined for distinct hero and studio roles.
- Quiet image-settle and reveal motion with a complete reduced-motion path.

## Colors

The palette is a richer legal-material spectrum: charcoal frames the experience, oxblood signals the practice, warm paper supplies clarity, and muted brass marks action and metadata.

### Primary

- **Oxblood Annotation** (`wine`): Marks practice codes, row emphasis, selection, and the warm red glow inside the charcoal hero.
- **Deep Oxblood Binding** (`wine-deep`): Owns the studio field as the warm middle chapter between charcoal cover sections.

### Secondary

- **Muted Brass** (`sand`): Owns the primary consultation button, italic display emphasis, file tab, and metadata against dark fields.
- **WhatsApp Green** (`whatsapp-green`): Reserved for the persistent mobile conversion control so the destination remains instantly recognizable.

### Neutral

- **Charcoal Legal Ink** (`ink`): Primary text plus the hero, contact, and footer fields.
- **Ivory Document Paper** (`paper`): Default page surface and mobile navigation sheet.
- **Handled Paper** (`paper-deep`): Scrollbar track and quiet tonal separation.
- **Muted Filing Ink** (`muted`): Secondary copy on light paper.
- **Index Hairline** (`line`): Divides lists, records, and mobile navigation without introducing card chrome.
- **Clean White** (`white`): Text on dark fields and photo captions.
- **Polished Brass Highlight** (`sand-highlight`): Primary action hover surface.
- **Coral Focus Mark** (`focus-coral`): High-visibility keyboard focus only.

### Named Rules

**The Charcoal Frame Rule.** Charcoal owns the opening and closing cover fields; deep oxblood belongs to the studio chapter, while brighter wine is reserved for annotation and emphasis.

**The Evidence Green Rule.** Green belongs only to the fixed mobile WhatsApp action; all other conversion paths stay inside the charcoal, oxblood, paper, and brass world.

## Typography

**Display Font:** Newsreader (with Georgia and serif fallbacks)  
**Body Font:** DM Sans (with Arial and sans-serif fallbacks)

**Character:** Newsreader supplies literate warmth and the cadence of an editorial case file. DM Sans keeps navigation, labels, explanations, and actions plain, contemporary, and easy to scan.

### Hierarchy

- **Display** (regular, responsive scale capped at 96px, compact leading): Hero statements only; balance lines and preserve the italic brass-colored emphasis.
- **Headline** (regular, responsive large scale, tight leading): Major section openings on both paper and burgundy.
- **Title** (regular, responsive medium scale, single-line leading): Practice-area names and prominent contact values.
- **Body** (regular, comfortable leading): Plain-language explanations; keep measures restrained, generally between 540px and 650px.
- **Action** (semibold, compact): Buttons and direct consultation links.
- **Label** (semibold, tracked uppercase): Docket metadata, practice codes, definition labels, and image captions.

### Named Rules

**The Editorial-to-Operational Rule.** Newsreader carries meaning and emphasis; DM Sans carries instructions, metadata, and action. Do not swap their roles.

**The Quiet Weight Rule.** Hierarchy comes from scale, contrast, and spacing—not heavy serif weights. Display type remains regular.

## Layout

The desktop composition alternates dossier spreads: a charcoal text cover beside photographic evidence, an indexed full-width practice list, then an oxblood image-and-copy split before the charcoal consultation close. Page gutters are fluid through the `page` token, while vertical breathing room follows the expanded `section` rhythm. Major split sections use intentionally unequal columns rather than centered card stacks.

The practice list is a four-part indexed row on wide screens: code, title, explanation, and action. At 1050px it condenses to three columns; at 760px it becomes a two-column record with copy and action stacked under the title. Below 760px, all major split sections become single-column, the hero image follows the cover copy, and a fixed full-width WhatsApp action remains within immediate reach.

The fixed header is 92px tall over the hero and contracts to 76px after scrolling on desktop. At 1050px and below, a 76px header establishes the compact layout. At 760px and below, the viewport opts into edge-to-edge rendering with `viewport-fit=cover`; the header is always opaque charcoal—before and after scroll—and its height becomes `calc(72px + env(safe-area-inset-top))`, with top padding equal to the device inset. A fixed charcoal shield covers the top safe-area band, while the hero's top padding becomes `calc(108px + env(safe-area-inset-top))`. Anchor scrolling and the navigation sheet use the same header-height variable so content is never obscured. The ivory navigation sheet unfolds directly below that safe-area-aware edge.

The root and body surfaces remain charcoal, with ivory restored on `main`, so browser rubber-band and edge overscroll expose the case-cover color rather than a white flash. This outer charcoal frame is part of the mobile material system, not an incidental browser fallback.

**The Edge-to-Edge Charcoal Rule.** When the viewport extends into a device safe area, every exposed browser edge, the top shield, and the fixed header must resolve to charcoal; content begins only after the matching safe-area inset.

## Elevation & Depth

The system is flat by default. Depth comes from full-bleed tonal fields, photographic overlays, hairline boundaries, and controlled section changes rather than raised cards. Shadows are confined to floating or overlay states: the scrolled header, the open mobile navigation sheet, and the persistent mobile WhatsApp action.

### Shadow Vocabulary

- **Header Float** (`0 8px 28px rgba(30, 26, 24, 0.08)`): A quiet separation after the transparent header becomes paper.
- **Navigation Sheet** (`0 18px 30px rgba(30, 26, 24, 0.12)`): Structural depth for the open mobile menu.
- **Mobile Conversion Lift** (`0 12px 32px rgba(0, 0, 0, 0.28)`): Keeps the fixed WhatsApp control legible above changing content.

### Named Rules

**The Flat File Rule.** Content rests on paper or cover fields; never turn practice areas or office facts into floating rounded cards.

## Shapes

The form language is architectural and rectilinear: actions, rows, image frames, tabs, and section edges use square corners. One circular form—the outlined `SM` monogram—acts like a restrained professional seal. Borders are one-pixel hairlines, used horizontally to create index rhythm. Photography is clipped cleanly to its rectangular column with no decorative radius.

**The Single Seal Rule.** Circles belong to the monogram only; do not propagate pill shapes, circular icon buttons, or soft cards across the interface.

## Components

### Buttons

The primary consultation button feels like a brass appointment marker placed on the charcoal cover.

- **Shape:** Sharp rectangle with no radius; minimum height is 58px.
- **Primary:** Muted-brass background, charcoal text, semibold action type, and spacious horizontal padding.
- **Hover / Focus:** Lift by 3px and brighten to polished brass over 250ms; keyboard focus uses a 3px coral outline with a 4px offset.
- **Text action:** Transparent, white, and underlined by a single translucent hairline; it remains visually secondary.

### Cards / Containers

Practice areas are records, not cards.

- **Corner Style:** Square with no enclosing radius.
- **Background:** Inherit the ivory document surface.
- **Shadow Strategy:** None.
- **Border:** One hairline above the list and between every row.
- **Internal Padding:** 30px vertically with 20px of trailing inset on desktop, 26px vertically on mobile.
- **Hover:** Wash the row with translucent brass over 350ms and shift the title to wine, preserving the hairline structure.

### Navigation

The fixed navigation begins transparent and white over the charcoal cover on desktop. After 24px of scroll it becomes an almost-opaque ivory sheet with ink text and the quiet Header Float shadow. Link hover is a hairline that grows from left to right. At 1050px, navigation becomes a menu sheet with Newsreader links and indexed separators; opening it locks page scroll. At 760px and below, the header remains opaque charcoal in every scroll state, with a fixed charcoal shield covering the top safe-area band. The menu uses a 44px square control with an 8px internal inset. Its two one-pixel strokes rotate into a close mark when expanded.

### Dossier Index

Three uppercase area labels sit on a shared hairline at the foot of the hero. Each is a real, pre-addressed WhatsApp path. Hover raises the outbound arrow diagonally and increases text contrast; the index must never be reduced to inert decoration.

### Contact Rows

Contact channels behave like large dossier entries on charcoal: brass uppercase labels, editorial values, and authored outbound arrows arranged on ruled rows. They remain unboxed and square, with arrow translation supplying the only hover flourish.

### Directional Icons

External and downward direction are drawn as a shared authored SVG system, never as text glyphs or library icons. The default icon is 17px square with no fill, a 1.5px current-color stroke, round caps, and round joins; contact-row icons grow to 22px. External arrows move diagonally on hover, while the down arrow remains a calm scroll cue.

### Mobile WhatsApp Bar

Below 760px, a 56px fixed green bar uses `max(14px, env(safe-area-inset-left/right))` for its side insets and `max(12px, env(safe-area-inset-bottom))` beneath it. It begins translated below the viewport, invisible, non-interactive, and removed from hit testing. It becomes active only after the primary hero CTA has left view and while the contact section is not visible; opening the navigation hides it again. Its 320ms spring-like entrance and Mobile Conversion Lift shadow keep the control available without duplicating nearby actions.

**The Contextual Persistence Rule.** The floating WhatsApp action appears only in the middle of the mobile journey: never beside the hero CTA, never over the contact section, and never behind an open menu.

### Photography

Use both supplied office photographs as complementary evidence. The original office view (`assets/estudio.jpeg`) belongs in the hero and favors the central office crop; the second reception view (`assets/estudio-recepcion.webp`) belongs in the studio section and must not be replaced by a repeated hero image. The hero treatment uses moderate desaturation with slightly lifted contrast, while the reception image is more deeply desaturated against oxblood; restrained dark gradients protect captions and integrate image edges with adjoining fields. The hero image settles slowly from a subtle enlarged crop; reduced-motion users see the final state immediately.

## Do's and Don'ts

### Do:

- **Do** frame the page with charcoal, reserve deep oxblood for the studio, and use brass for action and archival emphasis.
- **Do** keep practice-area labels and rows directly actionable through their area-specific WhatsApp messages.
- **Do** use one-pixel rules, tracked metadata, and asymmetric split layouts to express the dossier idea.
- **Do** preserve both supplied office photographs in their assigned hero and studio roles, and keep motion calm, optional, and non-blocking.
- **Do** use the authored 1.5px-stroke SVG external and down arrows consistently across actions and navigation cues.
- **Do** keep the mobile header opaque, safe-area-aware, and synchronized with anchor and menu offsets.
- **Do** use `viewport-fit=cover`, charcoal root/body overscroll, the fixed top shield, and safe-area-adjusted hero padding as one coordinated mobile frame.
- **Do** show the floating WhatsApp action only when both the primary CTA and contact section are out of view, and hide it while navigation is open.
- **Do** keep keyboard focus obvious and honor `prefers-reduced-motion` across every animation and transition.

### Don't:

- **Don't** use rounded cards, pill badges, gradients as decoration, or generic legal iconography.
- **Don't** introduce gavels, scales of justice, marble courthouses, stock handshakes, or fabricated prestige imagery.
- **Don't** use green outside the persistent mobile WhatsApp action.
- **Don't** mix text glyph arrows, emoji, or third-party icon styles into the directional icon system.
- **Don't** let the mobile header become transparent or reduce the menu control below its 44px square target.
- **Don't** allow white or ivory to leak into mobile overscroll or the top device inset, and don't let hero content begin beneath the safe-area shield.
- **Don't** reuse the hero office image in the studio section; the second supplied reception photograph is the studio evidence image.
- **Don't** pin the floating WhatsApp action over the primary CTA, the contact section, an open menu, or a device safe area.
- **Don't** add decorative animation that delays access to practice areas or consultation actions.
- **Don't** imply credentials, outcomes, testimonials, addresses, schedules, or services that are not supported by product truth.
