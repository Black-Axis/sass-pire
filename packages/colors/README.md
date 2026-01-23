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
// Import all color utilities (neutral and red)
@use '@sass-pire/colors' as colors;

// Or import specific modules
@use '@sass-pire/colors/src/neutral' as neutral;
@use '@sass-pire/colors/src/red' as red;
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

### Complete Example

```scss
@use '@sass-pire/colors' as *;

// Generate all color palettes
@include sp-get-neutral();
@include sp-get-red();

// Use in your components
.alert {
  padding: 1rem;
  border-radius: 4px;

  &--error {
    background-color: var(--sp-neutral-50);
    border: 1px solid var(--sp-red-300);
    color: var(--sp-red-700);
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
│   └── red/
│       └── _index.scss       # Red color utilities
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
