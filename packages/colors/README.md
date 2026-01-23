# @sass-pire/colors

Color utilities and configuration for the sass-pire design system.

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

### Complete Example

```scss
@use '@sass-pire/colors' as *;

// Generate all color palettes
@include sp-get-neutral();
@include sp-get-red();
@include sp-get-blue();
@include sp-get-orange();

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
}
```

## 🎨 Using Pre-compiled CSS

If you prefer to use CSS directly without SCSS compilation:

```html
<!-- Link the compiled CSS in your HTML -->
<link rel="stylesheet" href="node_modules/@sass-pire/colors/dist/index.css">

<!-- Or the minified version -->
<link rel="stylesheet" href="node_modules/@sass-pire/colors/dist/index.min.css">
```

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
│   └── yellow/
│       └── _index.scss       # Yellow color utilities
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
