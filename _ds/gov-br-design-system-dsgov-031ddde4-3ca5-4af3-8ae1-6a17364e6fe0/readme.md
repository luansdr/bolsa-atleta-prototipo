# GOV.BR Design System (DSGov)

A recreation of the **Padrão Digital de Governo** — the official design system
for Brazilian federal digital services, maintained by **SERPRO** with the
community. Its purpose is a single, accessible, recognizable experience across
every gov.br service ("experiência única na interação com os sistemas
interativos do Governo Federal").

This project packages that language as reusable tokens, components, foundation
specimens and a full product recreation, so agents can generate well-branded
gov.br interfaces and prototypes.

## Sources
The gov.br DS is open source (MIT). Referenced while building this system —
the reader is not assumed to have access, but these are recorded:
- Website / docs: https://www.gov.br/ds/ (downloads: uikits, modelos, implementação)
- Official repos (GitLab): https://gitlab.com/govbr-ds
- Core library (npm): `@govbr-ds/core` — https://www.npmjs.com/package/@govbr-ds/core
- Web components: https://gitlab.com/govbr-ds/wbc/govbr-ds-wbc
- Component inventory was cross-checked against the published `@govbr-ds/core` bundle.

> **Fidelity note.** Token *values* here are reconstructed from the published
> gov.br visual identity and the `@govbr-ds/core` naming conventions (the DS is
> USWDS-influenced — hence `blue-warm` / `green-cool` family names). They are
> faithful and coherent but should be reconciled against the official
> `core-tokens.css` before production use.

---

## CONTENT FUNDAMENTALS
gov.br copy is **institutional but plain-language** ("linguagem cidadã"),
written in **Brazilian Portuguese**.
- **Voice:** clear, direct, service-oriented. Prefers the imperative/action
  form for tasks — *"Consultar CNH"*, *"Enviar requerimento"*, *"Baixar
  comprovante"* — and speaks to the citizen ("você").
- **Tone:** neutral, respectful, reassuring. Never playful, never marketing-y.
  Formal enough for government, simple enough for everyone.
- **Casing:** sentence case for body and most labels; Title Case reserved for
  official program/service names (*Carteira de Trabalho Digital*, *Minha Casa
  Minha Vida*). Short ALL-CAPS eyebrows only for small section labels.
- **Person:** second person for the citizen ("Acesse sua conta"), third person
  institutional for the State ("O Governo Federal").
- **Emoji:** none. Government context — icons (Font Awesome), not emoji.
- **Examples:** "Entrar com gov.br", "Selecione o arquivo", "Restam 120
  caracteres", "Ao desativar qualquer cookie, sua navegação poderá ser
  comprometida.", "Prazo de análise: até 5 dias úteis."

## VISUAL FOUNDATIONS
- **Colors.** Four institutional brand colors: **Azul `#1351B4`** (primary/
  interactive), **Verde `#168821`** (success), **Amarelo `#FFCD07`**
  (attention/highlight, always with dark text), **Vermelho `#E52207`** (error).
  A blue-warm family runs from pale (`#e8f2ff`) to azul-marinho (`#071d41`,
  used for footers/hero tops). Neutral gray scale `gray-2 → gray-90`; default
  body text is `gray-80 (#333)`.
- **Type.** Primary typeface **Rawline** (institutional), secondary/display
  **Raleway**. Scale is a 1.2 (minor-third) ratio on a 16px base. Headings use
  semibold; generous line-height (1.45) on body.
- **Spacing.** Strict **8px grid** (`half`=4, `base`=8, then 2x/3x/4x…). Roomy,
  legible density; forms breathe.
- **Backgrounds.** Mostly flat: white surfaces on a light `gray-2` page. **No
  gradients**, no textures, no decorative illustration by default. Full-bleed
  color blocks are limited to the azul-marinho footer/hero band.
- **Corners.** Small radii on inputs/tags (4px) and cards/modals (8px). The
  signature move: **buttons are full pills** (`border-radius: 100em`).
- **Cards.** White, 8px radius, **soft downward shadow** (`0 1px 3px rgba(0,0,0,.16)`),
  no border. Elevation lifts on hover.
- **Shadows.** Subtle, low-opacity black, always downward; three levels
  (sm/md/lg). No colored or inner shadows.
- **Borders.** 1px hairline (`gray-20`); inputs use a stronger `gray-40`.
  A **3px colored left bar** marks message/status banners.
- **Hover / press.** Interactive surfaces tint by layering the current color at
  16% (hover) / 32% (pressed) opacity; links darken to azul-80. No scaling.
- **Focus.** Distinctive **thick (4px) light-blue halo** (`--focus`) on every
  focusable element — a strong accessibility signature.
- **Motion.** Quick, functional: 150ms ease fades/toggles. No bounces, no
  looping decoration.
- **Transparency/blur.** Only the modal scrim (black at ~50%). No glass/blur.
- **Imagery.** When used, warm, human, documentary photography of citizens and
  services — not stock-y or cool-toned. This kit ships no photos.

## ICONOGRAPHY
- gov.br standardizes on **Font Awesome** (Free, solid/regular/brands). This
  system loads it from CDN (`font-awesome/6.5.1`) in cards and the UI kit;
  components take a FontAwesome class string via an `icon` prop
  (e.g. `icon="fas fa-check"`).
- Icons are **monochrome line/solid glyphs**, tinted azul for interactive
  affordances and gray for decorative/secondary use; always paired with text
  labels for accessibility. Chevrons (`fa-angle-*`) indicate expand/collapse
  and navigation direction throughout.
- **No emoji.** **No hand-drawn SVG** icons — use the Font Awesome set (or
  substitute the nearest FA glyph) for consistency.
- **Substitution flags:** **Rawline** is not on Google Fonts; it is loaded from
  the gov.br CDN with **Rubik** (Google Fonts) as the fallback substitute. If
  the CDN is unreachable, Rubik renders. The **gov.br logotype** is rendered in
  plain type (`BrandMark`) — no official logo asset was provided; supply the
  official SVG lockup to replace it.

## Intentional additions
The component set mirrors the gov.br `@govbr-ds/core` inventory. Two small
helpers were added for ergonomics, each with a clear reason:
- **`BrandMark`** — the plain-type gov.br wordmark placeholder (stands in for
  the official logo asset).
- **`DatePicker`** — a thin wrapper over `Input` representing `br-datetimepicker`
  (full calendar popover omitted; cosmetic).

---

## Components
Grouped by concern under `components/`. Import from the compiled bundle:
`const { Button } = window.GOVBRDesignSystemDSGov_031ddd`.

- **core/** — `Button`, `Tag`, `Badge`, `Loading`, `Divider`
- **forms/** — `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`, `Upload`, `DatePicker`
- **layout/** — `Card`, `List`, `Item`
- **navigation/** — `Breadcrumb`, `Step`, `Tab`, `Pagination`, `Menu`, `SideNav`
- **feedback/** — `Message`, `Modal`, `Notification`, `Tooltip`, `Scrim`
- **product/** — `Header`, `BrandMark`, `Footer`, `SignIn`, `Avatar`, `Accordion`, `Table`, `Carousel`, `Cookiebar`

## Repository index
- `styles.css` — global entry point (import this one file). `@import`s only.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css`,
  `fonts.css` (@font-face), `base.css` (element defaults + link styles).
- `components/<group>/` — `<Name>.jsx` + `<Name>.d.ts` + `<Name>.prompt.md`,
  and one `@dsCard` HTML thumbnail per directory.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Effects, Brand).
- `ui_kits/portal-servicos/` — interactive gov.br service-portal recreation
  (`index.html`, `README.md`).
- `SKILL.md` — Agent-Skills-compatible entry for downloading/using this system.

## Consuming
Link `styles.css`, load `_ds_bundle.js` (auto-generated), add Font Awesome, then
mount components from `window.GOVBRDesignSystemDSGov_031ddd`. See any card in
`components/*/*.card.html` for a minimal working example.
