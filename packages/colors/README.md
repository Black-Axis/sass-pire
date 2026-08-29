# @sass-pire/colors

Color utilities and configuration for the sass-pire design system.

Part of the [sass-pire monorepo](../../README.md) (v6). See the root README for the full package list and migration from legacy `sass-pire`.

## Table of Contents

- [📦 Installation](#-installation)
- [🚀 Usage](#-usage)
  - [SCSS Import](#scss-import)
  - [Sass Load Path](#sass-load-path)
  - [Using Neutral Color Utilities](#using-neutral-color-utilities)
  - [Using Red Color Utilities](#using-red-color-utilities)
  - [Palette Reference](#palette-reference)
  - [Complete Example](#complete-example)
- [🎨 Using Pre-compiled CSS](#-using-pre-compiled-css)
- [🛠️ Development](#️-development)
- [📁 Package Structure](#-package-structure)
- [🔗 API Reference](#-api-reference)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [🐛 Issues](#-issues)
- [📧 Contact](#-contact)

## 📦 Installation

### In a Monorepo Workspace

If you're working within the sass-pire monorepo, you can reference this package directly:

```bash
# From the root of the monorepo
yarn workspace your-package-name add @sass-pire/colors
```

Or add it manually to your package's `package.json`:

```json
{
  "dependencies": {
    "@sass-pire/colors": "last-version-of-colors-package"
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
yarn add @sass-pire/colors

# Using npm
npm install @sass-pire/colors

# Using pnpm
pnpm add @sass-pire/colors
```

[↑ Back to Table of Contents](#table-of-contents)

## 🚀 Usage

### SCSS Import

Import the package in your SCSS files to access color utilities:

```scss
// Import all color utilities (all 10 palettes)
@use '@sass-pire/colors' as colors;

// Or import specific modules
@use '@sass-pire/colors/src/neutral' as neutral;
@use '@sass-pire/colors/src/red' as red;
@use '@sass-pire/colors/src/blue' as blue;
@use '@sass-pire/colors/src/orange' as orange;
@use '@sass-pire/colors/src/green' as green;
@use '@sass-pire/colors/src/yellow' as yellow;
@use '@sass-pire/colors/src/violet' as violet;
@use '@sass-pire/colors/src/cyan' as cyan;
@use '@sass-pire/colors/src/pink' as pink;
@use '@sass-pire/colors/src/indigo' as indigo;
```

[↑ Back to Table of Contents](#table-of-contents)

### Sass Load Path

When using the Sass CLI, add `--load-path=node_modules` so scoped packages resolve correctly:

```json
"scripts": {
  "watch:sass": "sass --load-path=node_modules --watch ./src/index.scss"
}
```

### Using Neutral Color Utilities

The package provides a comprehensive neutral color scale using CSS custom properties:

```scss
@use '@sass-pire/colors/src/neutral' as *;

// Include the neutral colors mixin to generate CSS custom properties
@include sp-get-neutral(); // Generates variables on :root by default

// Or target a specific selector
@include sp-get-neutral('.my-component');
```

**Generated CSS Custom Properties:**

```css
:root {
    --sp-neutral-50: hsl(0deg 0% 97%);
    --sp-neutral-100: hsl(0deg 0% 92%);
    --sp-neutral-150: hsl(0deg 0% 87%);
    --sp-neutral-200: hsl(0deg 0% 83%);
    --sp-neutral-250: hsl(0deg 0% 77%);
    --sp-neutral-300: hsl(0deg 0% 72%);
    --sp-neutral-350: hsl(0deg 0% 66%);
    --sp-neutral-400: hsl(0deg 0% 61%);
    --sp-neutral-450: hsl(0deg 0% 55%);
    --sp-neutral-500: hsl(0deg 0% 50%);
    --sp-neutral-550: hsl(0deg 0% 46%);
    --sp-neutral-600: hsl(0deg 0% 42%);
    --sp-neutral-650: hsl(0deg 0% 38%);
    --sp-neutral-700: hsl(0deg 0% 35%);
    --sp-neutral-750: hsl(0deg 0% 31%);
    --sp-neutral-800: hsl(0deg 0% 28%);
    --sp-neutral-850: hsl(0deg 0% 24%);
    --sp-neutral-900: hsl(0deg 0% 21%);
    --sp-neutral-950: hsl(0deg 0% 15%);
}
```

**Using in Your Styles:**

```css
.card {
  background-color: var(--sp-neutral-50);
  border: 1px solid var(--sp-neutral-200);
  color: var(--sp-neutral-900);
}

.secondary-text {
  color: var(--sp-neutral-600);
}
```

[↑ Back to Table of Contents](#table-of-contents)

### Using Red Color Utilities

The package provides a comprehensive red color scale using CSS custom properties:

```scss
@use '@sass-pire/colors/src/red' as *;

// Include the red colors mixin to generate CSS custom properties
@include sp-get-red(); // Generates variables on :root by default

// Or target a specific selector
@include sp-get-red('.my-component');
```

**Generated CSS Custom Properties:**

```css
:root {
    --sp-red-50: hsl(0deg 100% 97%);
    --sp-red-100: hsl(0deg 95% 92%);
    --sp-red-150: hsl(0deg 93% 87%);
    --sp-red-200: hsl(0deg 90% 83%);
    --sp-red-250: hsl(0deg 88% 77%);
    --sp-red-300: hsl(0deg 85% 72%);
    --sp-red-350: hsl(0deg 83% 66%);
    --sp-red-400: hsl(0deg 80% 61%);
    --sp-red-450: hsl(0deg 78% 55%);
    --sp-red-500: hsl(0deg 75% 50%);
    --sp-red-550: hsl(0deg 73% 46%);
    --sp-red-600: hsl(0deg 70% 42%);
    --sp-red-650: hsl(0deg 68% 38%);
    --sp-red-700: hsl(0deg 65% 35%);
    --sp-red-750: hsl(0deg 63% 31%);
    --sp-red-800: hsl(0deg 60% 28%);
    --sp-red-850: hsl(0deg 58% 24%);
    --sp-red-900: hsl(0deg 55% 21%);
    --sp-red-950: hsl(0deg 50% 15%);
}
```

**Using in Your Styles:**

```css
.error-message {
  color: var(--sp-red-600);
  background-color: var(--sp-red-50);
  border: 1px solid var(--sp-red-200);
}

.button-danger {
  background-color: var(--sp-red-500);
  color: var(--sp-neutral-50);
}
```

[↑ Back to Table of Contents](#table-of-contents)

### Palette Reference

All palettes share the same `$selector` API and 21-step scale (50–950). Each mixin generates CSS custom properties on `:root` by default, or on a custom selector when passed as an argument.

| Palette | Mixin | Import path | Hue | Source |
|---|---|---|---|---|
| Neutral | `sp-get-neutral()` | `@sass-pire/colors/src/neutral` | `0deg` (grayscale) | [src/neutral/_index.scss](src/neutral/_index.scss) |
| Red | `sp-get-red()` | `@sass-pire/colors/src/red` | `0deg` | [src/red/_index.scss](src/red/_index.scss) |
| Blue | `sp-get-blue()` | `@sass-pire/colors/src/blue` | `210deg` | [src/blue/_index.scss](src/blue/_index.scss) |
| Orange | `sp-get-orange()` | `@sass-pire/colors/src/orange` | `30deg` | [src/orange/_index.scss](src/orange/_index.scss) |
| Green | `sp-get-green()` | `@sass-pire/colors/src/green` | `150deg` | [src/green/_index.scss](src/green/_index.scss) |
| Yellow | `sp-get-yellow()` | `@sass-pire/colors/src/yellow` | `48deg` | [src/yellow/_index.scss](src/yellow/_index.scss) |
| Violet | `sp-get-violet()` | `@sass-pire/colors/src/violet` | `270deg` | [src/violet/_index.scss](src/violet/_index.scss) |
| Cyan | `sp-get-cyan()` | `@sass-pire/colors/src/cyan` | `180deg` | [src/cyan/_index.scss](src/cyan/_index.scss) |
| Pink | `sp-get-pink()` | `@sass-pire/colors/src/pink` | `330deg` | [src/pink/_index.scss](src/pink/_index.scss) |
| Indigo | `sp-get-indigo()` | `@sass-pire/colors/src/indigo` | `240deg` | [src/indigo/_index.scss](src/indigo/_index.scss) |

> **Note:** The yellow palette uses high saturation across all shades (including dark tones) to maintain vibrancy. See [src/yellow/_index.scss](src/yellow/_index.scss) for details.

For the full token values of any palette, refer to its source file above or the pre-compiled [dist/index.css](dist/index.css).

[↑ Back to Table of Contents](#table-of-contents)

### Complete Example

```scss
@use '@sass-pire/colors' as *;

// Generate all color palettes
@include sp-get-neutral();
@include sp-get-red();
@include sp-get-blue();
@include sp-get-orange();
@include sp-get-green();
@include sp-get-yellow();
@include sp-get-violet();
@include sp-get-cyan();
@include sp-get-pink();
@include sp-get-indigo();

// Use in your components
.alert {
  padding: 1rem;
  border-radius: 4px;

  &--error {
    background-color: var(--sp-neutral-50);
    border: 1px solid var(--sp-red-300);
    color: var(--sp-red-700);
  }

  &--info {
    background-color: var(--sp-blue-50);
    border: 1px solid var(--sp-blue-300);
    color: var(--sp-blue-700);
  }

  &--warning {
    background-color: var(--sp-orange-50);
    border: 1px solid var(--sp-orange-300);
    color: var(--sp-orange-700);
  }

  &--success {
    background-color: var(--sp-green-50);
    border: 1px solid var(--sp-green-300);
    color: var(--sp-green-700);
  }

  &--highlight {
    background-color: var(--sp-yellow-50);
    border: 1px solid var(--sp-yellow-300);
    color: var(--sp-yellow-900);
  }

  &--brand {
    background-color: var(--sp-violet-50);
    border: 1px solid var(--sp-violet-300);
    color: var(--sp-violet-700);
  }

  &--action {
    background-color: var(--sp-cyan-50);
    border: 1px solid var(--sp-cyan-300);
    color: var(--sp-cyan-700);
  }

  &--accent {
    background-color: var(--sp-pink-50);
    border: 1px solid var(--sp-pink-300);
    color: var(--sp-pink-700);
  }

  &--system {
    background-color: var(--sp-indigo-50);
    border: 1px solid var(--sp-indigo-300);
    color: var(--sp-indigo-700);
  }
}
```

[↑ Back to Table of Contents](#table-of-contents)

## 🎨 Using Pre-compiled CSS

If you prefer to use CSS directly without SCSS compilation:

```html
<!-- Link the compiled CSS in your HTML -->
<link rel="stylesheet" href="node_modules/@sass-pire/colors/dist/index.css">

<!-- Or the minified version -->
<link rel="stylesheet" href="node_modules/@sass-pire/colors/dist/index.min.css">
```

The package also exposes pre-compiled CSS through `package.json` exports:

| Export | Path |
|---|---|
| `@sass-pire/colors` | `./index.scss` |
| `@sass-pire/colors/scss` | `./index.scss` |
| `@sass-pire/colors/css` | `./dist/index.css` |
| `@sass-pire/colors/css/min` | `./dist/index.min.css` |

In SCSS or a bundler that resolves package exports:

```scss
@use "@sass-pire/colors/css";
@use "@sass-pire/colors/css/min";
```

[↑ Back to Table of Contents](#table-of-contents)

## 🛠️ Development

### Running the Development Server

```bash
# From the package directory
yarn dev

# Or from the monorepo root
yarn dev:colors
```

This will watch for changes and compile SCSS files automatically.


### Testing

All 10 palettes have sass-true tests under `tests/` (32 assertions):

```bash
# From the monorepo root
yarn test:colors
```

Tests run via the root Jest config ([jest.config.js](../../jest.config.js)); there is no `test` script in this package's own `package.json`.

[↑ Back to Table of Contents](#table-of-contents)

## 📁 Package Structure

```
@sass-pire/colors/
├── src/
│   ├── neutral/
│   │   └── _index.scss       # Neutral color utilities
│   ├── red/
│   │   └── _index.scss       # Red color utilities
│   ├── blue/
│   │   └── _index.scss       # Blue color utilities
│   ├── orange/
│   │   └── _index.scss       # Orange color utilities
│   ├── green/
│   │   └── _index.scss       # Green color utilities
│   ├── yellow/
│   │   └── _index.scss       # Yellow color utilities
│   ├── violet/
│   │   └── _index.scss       # Violet color utilities
│   ├── cyan/
│   │   └── _index.scss       # Cyan color utilities
│   ├── pink/
│   │   └── _index.scss       # Pink color utilities
│   └── indigo/
│       └── _index.scss       # Indigo color utilities
├── tests/                     # sass-true tests (dev only, not published)
│   ├── neutral/
│   ├── red/
│   └── ...
├── styles/                    # CSS generator source (dev only, not published)
│   └── index.scss
├── dist/
│   ├── index.css              # Compiled CSS (uncompressed, published)
│   ├── index.min.css          # Compiled CSS (compressed, published)
│   ├── index.compiled.css     # SCSS compile output (dev only, not published)
│   └── index.compiled.min.css # SCSS compile output (dev only, not published)
├── index.scss                 # Main entry point
├── package.json
└── README.md
```

Dev-only artifacts (`tests/`, `styles/`, `dist/index.compiled.css`, `dist/index.compiled.min.css`) are excluded from npm publish via [.npmignore](.npmignore).

[↑ Back to Table of Contents](#table-of-contents)

## 🔗 API Reference

### Mixins

#### `sp-get-neutral($selector)`

Generates neutral color CSS custom properties.

**Parameters:**
- `$selector` (String, optional) - Target selector for the variables. Default: `:root`

**Example:**
```scss
@include sp-get-neutral();           // Generates on :root
@include sp-get-neutral('.theme');   // Generates on .theme
```

#### `sp-get-red($selector)`

Generates red color CSS custom properties.

**Parameters:**
- `$selector` (String, optional) - Target selector for the variables. Default: `:root`

**Example:**
```scss
@include sp-get-red();           // Generates on :root
@include sp-get-red('.theme');   // Generates on .theme
```

#### `sp-get-blue($selector)`

Generates blue color CSS custom properties.

**Parameters:**
- `$selector` (String, optional) - Target selector for the variables. Default: `:root`

**Example:**
```scss
@include sp-get-blue();           // Generates on :root
@include sp-get-blue('.theme');   // Generates on .theme
```

#### `sp-get-orange($selector)`

Generates orange color CSS custom properties.

**Parameters:**
- `$selector` (String, optional) - Target selector for the variables. Default: `:root`

**Example:**
```scss
@include sp-get-orange();           // Generates on :root
@include sp-get-orange('.theme');   // Generates on .theme
```

#### `sp-get-green($selector)`

Generates green color CSS custom properties.

**Parameters:**
- `$selector` (String, optional) - Target selector for the variables. Default: `:root`

**Example:**
```scss
@include sp-get-green();           // Generates on :root
@include sp-get-green('.theme');   // Generates on .theme
```

#### `sp-get-yellow($selector)`

Generates yellow color CSS custom properties.

**Parameters:**
- `$selector` (String, optional) - Target selector for the variables. Default: `:root`

**Example:**
```scss
@include sp-get-yellow();           // Generates on :root
@include sp-get-yellow('.theme');   // Generates on .theme
```

#### `sp-get-violet($selector)`

Generates violet color CSS custom properties.

**Parameters:**
- `$selector` (String, optional) - Target selector for the variables. Default: `:root`

**Example:**
```scss
@include sp-get-violet();           // Generates on :root
@include sp-get-violet('.theme');   // Generates on .theme
```

#### `sp-get-cyan($selector)`

Generates cyan color CSS custom properties.

**Parameters:**
- `$selector` (String, optional) - Target selector for the variables. Default: `:root`

**Example:**
```scss
@include sp-get-cyan();           // Generates on :root
@include sp-get-cyan('.theme');   // Generates on .theme
```

#### `sp-get-pink($selector)`

Generates pink color CSS custom properties.

**Parameters:**
- `$selector` (String, optional) - Target selector for the variables. Default: `:root`

**Example:**
```scss
@include sp-get-pink();           // Generates on :root
@include sp-get-pink('.theme');   // Generates on .theme
```

#### `sp-get-indigo($selector)`

Generates indigo color CSS custom properties.

**Parameters:**
- `$selector` (String, optional) - Target selector for the variables. Default: `:root`

**Example:**
```scss
@include sp-get-indigo();           // Generates on :root
@include sp-get-indigo('.theme');   // Generates on .theme
```

[↑ Back to Table of Contents](#table-of-contents)

## 🤝 Contributing

This package is part of the [sass-pire](https://github.com/Black-Axis/sass-pire) monorepo. See [CONTRIBUTING.md](../../CONTRIBUTING.md) for contribution guidelines.

[↑ Back to Table of Contents](#table-of-contents)

## 📄 License

MIT © [Khaled Mohamed](https://github.com/krypton225)

## 🐛 Issues

Report issues at: [https://github.com/Black-Axis/sass-pire/issues](https://github.com/Black-Axis/sass-pire/issues)

## 📧 Contact

- **Author:** Khaled Mohamed
- **Org. Email:** black_axis@outlook.com

---

**Part of the sass-pire design system** 🔥

[↑ Back to Table of Contents](#table-of-contents)
