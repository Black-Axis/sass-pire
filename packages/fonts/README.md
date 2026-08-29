# @sass-pire/fonts

Font utilities and configuration for the sass-pire design system.

## 📦 Installation

### In a Monorepo Workspace

If you're working within the sass-pire monorepo, you can reference this package directly:

```bash
# From the root of the monorepo
yarn workspace your-package-name add @sass-pire/fonts
```

Or add it manually to your package's `package.json`:

```json
{
  "dependencies": {
    "@sass-pire/fonts": "workspace:*"
  }
}
```

Then run:

```bash
yarn install
```

### As a Standalone Package

If you're using this package outside the monorepo:

```bash
# Using yarn
yarn add @sass-pire/fonts

# Using npm
npm install @sass-pire/fonts

# Using pnpm
pnpm add @sass-pire/fonts
```

## 🚀 Usage

### SCSS Import

Import the package in your SCSS files to access font utilities:

```scss
// Import all font utilities (sizes and weights)
@use '@sass-pire/fonts' as fonts;

// Or import specific modules
@use '@sass-pire/fonts/src/size' as sizes;
@use '@sass-pire/fonts/src/weight' as weights;
@use '@sass-pire/fonts/src/letter-spacing' as letter-spacing;
@use '@sass-pire/fonts/src/line-height' as line-height;
```

### Sass Load Path

When using the Sass CLI, add `--load-path=node_modules` so scoped packages resolve correctly:

```json
"scripts": {
  "watch:sass": "sass --load-path=node_modules --watch ./src/index.scss"
}
```

### Using Font Size Utilities

The package provides responsive font sizes using CSS custom properties with `clamp()` for fluid typography:

```scss
@use '@sass-pire/fonts/src/size' as *;

// Include the font size mixin to generate CSS custom properties
@include sp-get-fs(); // Generates variables on :root by default

// Or target a specific selector
@include sp-get-fs('.my-component');
```

**Generated CSS Custom Properties:**

```css
:root {
  --sp-fs-xxs: clamp(0.625rem, calc(0.5536rem + 0.3571vw), 0.75rem);
  --sp-fs-xs: clamp(0.75rem, calc(0.6786rem + 0.3571vw), 0.875rem);
  --sp-fs-sm: clamp(0.875rem, calc(0.8036rem + 0.3571vw), 1rem);
  --sp-fs-base: clamp(1rem, calc(0.9286rem + 0.3571vw), 1.125rem);
  --sp-fs-md: clamp(1.125rem, calc(1.0536rem + 0.3571vw), 1.266rem);
  --sp-fs-lg: clamp(1.266rem, calc(1.1696rem + 0.4821vw), 1.424rem);
  --sp-fs-xl: clamp(1.424rem, calc(1.3036rem + 0.6071vw), 1.602rem);
  --sp-fs-2xl: clamp(1.602rem, calc(1.4554rem + 0.7321vw), 1.802rem);
  --sp-fs-3xl: clamp(1.802rem, calc(1.6232rem + 0.8929vw), 2.027rem);
  --sp-fs-4xl: clamp(2.027rem, calc(1.8089rem + 1.0893vw), 2.281rem);
  --sp-fs-5xl: clamp(2.5rem, calc(2.1429rem + 1.7857vw), 3rem);
}
```

**Using in Your Styles:**

```css
.heading {
  font-size: var(--sp-fs-3xl);
}

.body-text {
  font-size: var(--sp-fs-base);
}

.small-text {
  font-size: var(--sp-fs-xs);
}
```

### Using Font Weight Utilities

The package provides standard font weight values:

```scss
@use '@sass-pire/fonts/src/weight' as *;

// Include the font weight mixin to generate CSS custom properties
@include sp-get-fw(); // Generates variables on :root by default

// Or target a specific selector
@include sp-get-fw('.my-component');
```

**Generated CSS Custom Properties:**

```css
:root {
  --sp-fw-100: 100; /* Thin */
  --sp-fw-200: 200; /* Extra Light */
  --sp-fw-300: 300; /* Light */
  --sp-fw-400: 400; /* Normal */
  --sp-fw-500: 500; /* Medium */
  --sp-fw-600: 600; /* Semi Bold */
  --sp-fw-700: 700; /* Bold */
  --sp-fw-800: 800; /* Extra Bold */
  --sp-fw-900: 900; /* Black */
}
```

**Using in Your Styles:**

```css
.heading {
  font-weight: var(--sp-fw-700);
}

.body-text {
  font-weight: var(--sp-fw-400);
}

.emphasis {
  font-weight: var(--sp-fw-600);
}
```

### Using Letter Spacing Utilities

The package provides standard letter spacing values:

```scss
@use '@sass-pire/fonts/src/letter-spacing' as *;

// Include the letter spacing mixin to generate CSS custom properties
@include sp-get-ls(); // Generates variables on :root by default

// Or target a specific selector
@include sp-get-ls('.my-component');
```

**Generated CSS Custom Properties:**

```css
:root {
  --sp-ls-1: -0.05em;
  --sp-ls-2: -0.025em;
  --sp-ls-3: 0;
  --sp-ls-4: 0.025em;
  --sp-ls-5: 0.05em;
  --sp-ls-6: 0.1em;
}
```

### Using Line Height Utilities

The package provides line height values based on a Major Second scale (1.125):

```scss
@use '@sass-pire/fonts/src/line-height' as *;

// Include the line height mixin to generate CSS custom properties
@include sp-get-lh(); // Generates variables on :root by default

// Or target a specific selector
@include sp-get-lh('.my-component');
```

**Generated CSS Custom Properties:**

```css
:root {
  --sp-lh-1: 1.2;
  --sp-lh-2: 1.4;
  --sp-lh-3: 1.6;
  --sp-lh-4: 1.8;
  --sp-lh-5: 2;
  --sp-lh-6: 2.4;
  --sp-lh-7: 2.8;
  --sp-lh-8: 3.2;
  --sp-lh-9: 3.6;
  --sp-lh-10: 4;
  --sp-lh-11: 4.4;
}
```
```

### Complete Example

```scss
@use '@sass-pire/fonts' as *;

// Generate all font utilities
@include sp-get-fs();
@include sp-get-fw();
@include sp-get-ls();
@include sp-get-lh();

// Use in your components
.hero-title {
  font-size: var(--sp-fs-5xl);
  font-weight: var(--sp-fw-900);
}

.section-heading {
  font-size: var(--sp-fs-2xl);
  font-weight: var(--sp-fw-700);
}

.paragraph {
  font-size: var(--sp-fs-base);
  font-weight: var(--sp-fw-400);
  line-height: var(--sp-lh-3);
  letter-spacing: var(--sp-ls-3);
}

.caption {
  font-size: var(--sp-fs-xs);
  font-weight: var(--sp-fw-300);
}
```

## 📐 Font Size Scale

The font sizes are based on a **Major Second scale (1.125)** and are responsive between:
- **Min viewport:** 320px
- **Max viewport:** 1440px

| Variable | Min Size | Max Size | Use Case |
|----------|----------|----------|----------|
| `--sp-fs-xxs` | 0.625rem (10px) | 0.75rem (12px) | Fine print, labels |
| `--sp-fs-xs` | 0.75rem (12px) | 0.875rem (14px) | Small text, captions |
| `--sp-fs-sm` | 0.875rem (14px) | 1rem (16px) | Secondary text |
| `--sp-fs-base` | 1rem (16px) | 1.125rem (18px) | Body text |
| `--sp-fs-md` | 1.125rem (18px) | 1.266rem (20.25px) | Emphasized text |
| `--sp-fs-lg` | 1.266rem (20.25px) | 1.424rem (22.78px) | Small headings |
| `--sp-fs-xl` | 1.424rem (22.78px) | 1.602rem (25.63px) | H4 headings |
| `--sp-fs-2xl` | 1.602rem (25.63px) | 1.802rem (28.83px) | H3 headings |
| `--sp-fs-3xl` | 1.802rem (28.83px) | 2.027rem (32.43px) | H2 headings |
| `--sp-fs-4xl` | 2.027rem (32.43px) | 2.281rem (36.48px) | H1 headings |
| `--sp-fs-5xl` | 2.5rem (40px) | 3rem (48px) | Hero headings |

## 🎨 Using Pre-compiled CSS

If you prefer to use CSS directly without SCSS compilation:

```html
<!-- Link the compiled CSS in your HTML -->
<link rel="stylesheet" href="node_modules/@sass-pire/fonts/dist/index.css">

<!-- Or the minified version -->
<link rel="stylesheet" href="node_modules/@sass-pire/fonts/dist/index.min.css">
```

The pre-compiled CSS files include all font utilities ready to use.

## 🛠️ Development

### Running the Development Server

```bash
# From the package directory
yarn dev

# Or from the monorepo root
yarn dev:fonts
```

This will watch for changes and compile SCSS files automatically.

### Available Scripts

- `yarn dev` - Run all watchers concurrently
- `yarn sass:watch` - Watch and compile SCSS to CSS (uncompressed)
- `yarn sass:comp` - Watch and compile SCSS to CSS (compressed)
- `yarn css:watch` - Watch and compile styles to CSS (uncompressed)
- `yarn css:comp` - Watch and compile styles to CSS (compressed)

### Testing

All 4 font modules have sass-true tests under `tests/` (10 assertions):

```bash
# From the monorepo root
yarn test:fonts
```

Tests run via the root Jest config ([jest.config.js](../../jest.config.js)); there is no `test` script in this package's own `package.json`.

## 📁 Package Structure

```
@sass-pire/fonts/
├── src/
│   ├── size/
│   │   └── _index.scss       # Font size utilities
│   ├── weight/
│   │   └── _index.scss       # Font weight utilities
│   ├── letter-spacing/
│   │   └── _index.scss       # Letter spacing utilities
│   └── line-height/
│       └── _index.scss       # Line height utilities
├── styles/
│   └── index.scss             # CSS output generator
├── dist/
│   ├── index.css              # Compiled CSS (uncompressed)
│   ├── index.min.css          # Compiled CSS (compressed)
│   ├── index.compiled.css     # SCSS compiled output
│   └── index.compiled.min.css # SCSS compiled output (compressed)
├── index.scss                 # Main entry point
├── package.json
└── README.md
```

## 🔗 API Reference

### Mixins

#### `sp-get-fs($selector)`

Generates font size CSS custom properties.

**Parameters:**
- `$selector` (String, optional) - Target selector for the variables. Default: `:root`

**Example:**
```scss
@include sp-get-fs();           // Generates on :root
@include sp-get-fs('.theme');   // Generates on .theme
```

#### `sp-get-fw($selector)`

Generates font weight CSS custom properties.

**Parameters:**
- `$selector` (String, optional) - Target selector for the variables. Default: `:root`

**Example:**
```scss
@include sp-get-fw();           // Generates on :root
@include sp-get-fw('.theme');   // Generates on .theme
```

#### `sp-get-ls($selector)`

Generates letter spacing CSS custom properties.

**Parameters:**
- `$selector` (String, optional) - Target selector for the variables. Default: `:root`

**Example:**
```scss
@include sp-get-ls();           // Generates on :root
@include sp-get-ls('.theme');   // Generates on .theme
```

#### `sp-get-lh($selector)`

Generates line height CSS custom properties.

**Parameters:**
- `$selector` (String, optional) - Target selector for the variables. Default: `:root`

**Example:**
```scss
@include sp-get-lh();           // Generates on :root
@include sp-get-lh('.theme');   // Generates on .theme
```

## 🤝 Contributing

This package is part of the [sass-pire](https://github.com/Black-Axis/sass-pire) monorepo. Please refer to the main repository for contribution guidelines.

## 📄 License

MIT © [Khaled Mohamed](https://github.com/krypton225)

## 🐛 Issues

Report issues at: [https://github.com/Black-Axis/sass-pire/issues](https://github.com/Black-Axis/sass-pire/issues)

## 📧 Contact

- **Author:** Khaled Mohamed
- **Org. Email:** black_axis@outlook.com

---

**Part of the sass-pire design system** 🔥
