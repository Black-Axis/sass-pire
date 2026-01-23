# @sass-pire/colors

Color utilities and configuration for the sass-pire design system.

## Table of Contents

- [�📦 Installation](#-installation)
- [🚀 Usage](#-usage)
  - [SCSS Import](#scss-import)
  - [Using Neutral Color Utilities](#using-neutral-color-utilities)
  - [Using Yellow Color Utilities](#using-yellow-color-utilities)
  - [Using Violet Color Utilities](#using-violet-color-utilities)
  - [Using Cyan Color Utilities](#using-cyan-color-utilities)
  - [Using Red Color Utilities](#using-red-color-utilities)
  - [Using Blue Color Utilities](#using-blue-color-utilities)
  - [Using Orange Color Utilities](#using-orange-color-utilities)
  - [Complete Example](#complete-example)
- [🎨 Using Pre-compiled CSS](#-using-pre-compiled-css)
- [🛠️ Development](#-development)
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
    "@sass-pire/colors": "workspace:*"
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

[↑ Back to Top](#)

## 🚀 Usage

### SCSS Import

Import the package in your SCSS files to access color utilities:

```scss
// Import all color utilities (neutral, red, blue, and orange)
@use '@sass-pire/colors' as colors;

// Or import specific modules
@use '@sass-pire/colors/src/neutral' as neutral;
@use '@sass-pire/colors/src/red' as red;
@use '@sass-pire/colors/src/blue' as blue;
@use '@sass-pire/colors/src/orange' as orange;
@use '@sass-pire/colors/src/yellow' as yellow;
@use '@sass-pire/colors/src/violet' as violet;
@use '@sass-pire/colors/src/cyan' as cyan;
```

[↑ Back to Top](#)

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
    --sp-neutral-50: hsl(0deg 0% 100%);
    --sp-neutral-100: hsl(0deg 0% 95%);
    --sp-neutral-150: hsl(0deg 0% 90%);
    --sp-neutral-200: hsl(0deg 0% 85%);
    --sp-neutral-250: hsl(0deg 0% 80%);
    --sp-neutral-300: hsl(0deg 0% 75%);
    --sp-neutral-350: hsl(0deg 0% 70%);
    --sp-neutral-400: hsl(0deg 0% 65%);
    --sp-neutral-450: hsl(0deg 0% 60%);
    --sp-neutral-500: hsl(0deg 0% 55%);
    --sp-neutral-550: hsl(0deg 0% 50%);
    --sp-neutral-600: hsl(0deg 0% 45%);
    --sp-neutral-650: hsl(0deg 0% 40%);
    --sp-neutral-700: hsl(0deg 0% 35%);
    --sp-neutral-750: hsl(0deg 0% 30%);
    --sp-neutral-800: hsl(0deg 0% 25%);
    --sp-neutral-850: hsl(0deg 0% 20%);
    --sp-neutral-900: hsl(0deg 0% 15%);
    --sp-neutral-950: hsl(0deg 0% 10%);
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

[↑ Back to Top](#)

### Using Yellow Color Utilities

The package provides a comprehensive yellow color scale with high saturation in dark shades to maintain vibrancy:

```scss
@use '@sass-pire/colors/src/yellow' as *;

// Include the yellow colors mixin to generate CSS custom properties
@include sp-get-yellow(); // Generates variables on :root by default

// Or target a specific selector
@include sp-get-yellow('.my-component');
```

**Generated CSS Custom Properties:**

```css
:root {
    --sp-yellow-50: hsl(48deg 100% 96%);
    --sp-yellow-100: hsl(48deg 100% 92%);
    --sp-yellow-150: hsl(48deg 100% 87%);
    --sp-yellow-200: hsl(48deg 100% 83%);
    --sp-yellow-250: hsl(48deg 100% 77%);
    --sp-yellow-300: hsl(48deg 100% 72%);
    --sp-yellow-350: hsl(48deg 100% 66%);
    --sp-yellow-400: hsl(48deg 100% 61%);
    --sp-yellow-450: hsl(48deg 100% 55%);
    --sp-yellow-500: hsl(48deg 100% 50%);
    --sp-yellow-550: hsl(48deg 100% 46%);
    --sp-yellow-600: hsl(48deg 100% 42%);
    --sp-yellow-650: hsl(48deg 100% 38%);
    --sp-yellow-700: hsl(48deg 100% 35%);
    --sp-yellow-750: hsl(48deg 100% 31%);
    --sp-yellow-800: hsl(48deg 100% 28%);
    --sp-yellow-850: hsl(48deg 100% 24%);
    --sp-yellow-900: hsl(48deg 100% 21%);
    --sp-yellow-950: hsl(48deg 100% 15%);
}
```

**Using in Your Styles:**

```css
.card-highlight {
  background-color: var(--sp-yellow-50);
  border: 1px solid var(--sp-yellow-300);
}

.on-yellow-dark {
  color: var(--sp-neutral-50);
  background-color: var(--sp-yellow-700);
}
```

[↑ Back to Top](#)

### Using Violet Color Utilities

The package provides a comprehensive violet color scale using CSS custom properties:

```scss
@use '@sass-pire/colors/src/violet' as *;

// Include the violet colors mixin to generate CSS custom properties
@include sp-get-violet(); // Generates variables on :root by default

// Or target a specific selector
@include sp-get-violet('.my-component');
```

**Generated CSS Custom Properties:**

```css
:root {
    --sp-violet-50: hsl(270deg 100% 97%);
    --sp-violet-100: hsl(270deg 95% 92%);
    --sp-violet-150: hsl(270deg 93% 87%);
    --sp-violet-200: hsl(270deg 90% 83%);
    --sp-violet-250: hsl(270deg 88% 77%);
    --sp-violet-300: hsl(270deg 85% 72%);
    --sp-violet-350: hsl(270deg 83% 66%);
    --sp-violet-400: hsl(270deg 80% 61%);
    --sp-violet-450: hsl(270deg 78% 55%);
    --sp-violet-500: hsl(270deg 75% 50%);
    --sp-violet-550: hsl(270deg 73% 46%);
    --sp-violet-600: hsl(270deg 70% 42%);
    --sp-violet-650: hsl(270deg 68% 38%);
    --sp-violet-700: hsl(270deg 65% 35%);
    --sp-violet-750: hsl(270deg 63% 31%);
    --sp-violet-800: hsl(270deg 60% 28%);
    --sp-violet-850: hsl(270deg 58% 24%);
    --sp-violet-900: hsl(270deg 55% 21%);
    --sp-violet-950: hsl(270deg 50% 15%);
}
```

**Using in Your Styles:**

```css
.sidebar-active {
  background-color: var(--sp-violet-50);
  color: var(--sp-violet-700);
}

.brand-accent {
  background-color: var(--sp-violet-500);
}

[↑ Back to Top](#)

### Using Cyan Color Utilities

The package provides a comprehensive cyan color scale using CSS custom properties:

```scss
@use '@sass-pire/colors/src/cyan' as *;

// Include the cyan colors mixin to generate CSS custom properties
@include sp-get-cyan(); // Generates variables on :root by default

// Or target a specific selector
@include sp-get-cyan('.my-component');
```

**Generated CSS Custom Properties:**

```css
:root {
    --sp-cyan-50: hsl(180deg 100% 97%);
    --sp-cyan-100: hsl(180deg 95% 92%);
    --sp-cyan-150: hsl(180deg 93% 87%);
    --sp-cyan-200: hsl(180deg 90% 83%);
    --sp-cyan-250: hsl(180deg 88% 77%);
    --sp-cyan-300: hsl(180deg 85% 72%);
    --sp-cyan-350: hsl(180deg 83% 66%);
    --sp-cyan-400: hsl(180deg 80% 61%);
    --sp-cyan-450: hsl(180deg 78% 55%);
    --sp-cyan-500: hsl(180deg 75% 50%);
    --sp-cyan-550: hsl(180deg 73% 46%);
    --sp-cyan-600: hsl(180deg 70% 42%);
    --sp-cyan-650: hsl(180deg 68% 38%);
    --sp-cyan-700: hsl(180deg 65% 35%);
    --sp-cyan-750: hsl(180deg 63% 31%);
    --sp-cyan-800: hsl(180deg 60% 28%);
    --sp-cyan-850: hsl(180deg 58% 24%);
    --sp-cyan-900: hsl(180deg 55% 21%);
    --sp-cyan-950: hsl(180deg 50% 15%);
}
```

**Using in Your Styles:**

```css
.hero-secondary {
  background-color: var(--sp-cyan-50);
  color: var(--sp-cyan-800);
}

.action-cyan {
  background-color: var(--sp-cyan-500);
}
```

[↑ Back to Top](#)

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

[↑ Back to Top](#)

### Using Blue Color Utilities

The package provides a comprehensive blue color scale using CSS custom properties:

```scss
@use '@sass-pire/colors/src/blue' as *;

// Include the blue colors mixin to generate CSS custom properties
@include sp-get-blue(); // Generates variables on :root by default

// Or target a specific selector
@include sp-get-blue('.my-component');
```

**Generated CSS Custom Properties:**

```css
:root {
    --sp-blue-50: hsl(210deg 100% 97%);
    --sp-blue-100: hsl(210deg 95% 92%);
    --sp-blue-150: hsl(210deg 93% 87%);
    --sp-blue-200: hsl(210deg 90% 83%);
    --sp-blue-250: hsl(210deg 88% 77%);
    --sp-blue-300: hsl(210deg 85% 72%);
    --sp-blue-350: hsl(210deg 83% 66%);
    --sp-blue-400: hsl(210deg 80% 61%);
    --sp-blue-450: hsl(210deg 78% 55%);
    --sp-blue-500: hsl(210deg 75% 50%);
    --sp-blue-550: hsl(210deg 73% 46%);
    --sp-blue-600: hsl(210deg 70% 42%);
    --sp-blue-650: hsl(210deg 68% 38%);
    --sp-blue-700: hsl(210deg 65% 35%);
    --sp-blue-750: hsl(210deg 63% 31%);
    --sp-blue-800: hsl(210deg 60% 28%);
    --sp-blue-850: hsl(210deg 58% 24%);
    --sp-blue-900: hsl(210deg 55% 21%);
    --sp-blue-950: hsl(210deg 50% 15%);
}
```

**Using in Your Styles:**

```css
.info-box {
  background-color: var(--sp-blue-50);
  border: 1px solid var(--sp-blue-200);
  color: var(--sp-blue-800);
}
```

[↑ Back to Top](#)

### Using Orange Color Utilities

The package provides a comprehensive orange color scale using CSS custom properties:

```scss
@use '@sass-pire/colors/src/orange' as *;

// Include the orange colors mixin to generate CSS custom properties
@include sp-get-orange(); // Generates variables on :root by default

// Or target a specific selector
@include sp-get-orange('.my-component');
```

**Generated CSS Custom Properties:**

```css
:root {
    --sp-orange-50: hsl(30deg 100% 97%);
    --sp-orange-100: hsl(30deg 95% 92%);
    --sp-orange-150: hsl(30deg 93% 87%);
    --sp-orange-200: hsl(30deg 90% 83%);
    --sp-orange-250: hsl(30deg 88% 77%);
    --sp-orange-300: hsl(30deg 85% 72%);
    --sp-orange-350: hsl(30deg 83% 66%);
    --sp-orange-400: hsl(30deg 80% 61%);
    --sp-orange-450: hsl(30deg 78% 55%);
    --sp-orange-500: hsl(30deg 75% 50%);
    --sp-orange-550: hsl(30deg 73% 46%);
    --sp-orange-600: hsl(30deg 70% 42%);
    --sp-orange-650: hsl(30deg 68% 38%);
    --sp-orange-700: hsl(30deg 65% 35%);
    --sp-orange-750: hsl(30deg 63% 31%);
    --sp-orange-800: hsl(30deg 60% 28%);
    --sp-orange-850: hsl(30deg 58% 24%);
    --sp-orange-900: hsl(30deg 55% 21%);
    --sp-orange-950: hsl(30deg 50% 15%);
}
```

**Using in Your Styles:**

```css
.warning-toast {
  background-color: var(--sp-orange-100);
  border-left: 4px solid var(--sp-orange-500);
  color: var(--sp-orange-900);
}
```

[↑ Back to Top](#)

### Complete Example

```scss
@use '@sass-pire/colors' as *;

// Generate all color palettes
@include sp-get-neutral();
@include sp-get-red();
@include sp-get-blue();
@include sp-get-orange();
@include sp-get-yellow();
@include sp-get-violet();
@include sp-get-cyan();

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
}
```

[↑ Back to Top](#)

## 🎨 Using Pre-compiled CSS

If you prefer to use CSS directly without SCSS compilation:

```html
<!-- Link the compiled CSS in your HTML -->
<link rel="stylesheet" href="node_modules/@sass-pire/colors/dist/index.css">

<!-- Or the minified version -->
<link rel="stylesheet" href="node_modules/@sass-pire/colors/dist/index.min.css">
```

[↑ Back to Top](#)

## 🛠️ Development

### Running the Development Server

```bash
# From the package directory
yarn dev

# Or from the monorepo root
yarn dev:colors
```

This will watch for changes and compile SCSS files automatically.

### Available Scripts

- `yarn dev` - Run all watchers concurrently
- `yarn sass:watch` - Watch and compile SCSS to CSS (uncompressed)
- `yarn sass:comp` - Watch and compile SCSS to CSS (compressed)
- `yarn css:watch` - Watch and compile styles to CSS (uncompressed)
- `yarn css:comp` - Watch and compile styles to CSS (compressed)

[↑ Back to Top](#)

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
│   ├── yellow/
│   │   └── _index.scss       # Yellow color utilities
│   ├── violet/
│   │   └── _index.scss       # Violet color utilities
│   └── cyan/
│       └── _index.scss       # Cyan color utilities
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

[↑ Back to Top](#)

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

[↑ Back to Top](#)

## 🤝 Contributing

This package is part of the [sass-pire](https://github.com/Black-Axis/sass-pire) monorepo. Please refer to the main repository for contribution guidelines.

[↑ Back to Top](#)

## 📄 License

MIT © [Khaled Mohamed](https://github.com/krypton225)

## 🐛 Issues

Report issues at: [https://github.com/Black-Axis/sass-pire/issues](https://github.com/Black-Axis/sass-pire/issues)

## 📧 Contact

- **Author:** Khaled Mohamed
- **Org. Email:** black_axis@outlook.com

---

**Part of the sass-pire design system** 🔥

[↑ Back to Top](#-sass-pirecolors)
