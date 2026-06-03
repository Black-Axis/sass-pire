# @sass-pire/viewports

Viewport and breakpoint configuration for the sass-pire packages.

This package provides a single source of truth for responsive viewport sizes used across sass-pire packages — especially [`@sass-pire/media`](https://github.com/Black-Axis/sass-pire/tree/main/packages/media), which reads from these maps to generate media and container queries.

## 📦 Installation

### In a Monorepo Workspace

If you're working within the sass-pire monorepo, you can reference this package directly:

```bash
# From the root of the monorepo
yarn workspace your-package-name add @sass-pire/viewports
```

Or add it manually to your package's `package.json`:

```json
{
  "dependencies": {
    "@sass-pire/viewports": "workspace:*"
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
yarn add @sass-pire/viewports

# Using npm
npm install @sass-pire/viewports

# Using pnpm
pnpm add @sass-pire/viewports
```

## 🚀 Usage

### SCSS Import

Import the package to access the default viewport configuration:

```scss
// Import with a namespace
@use '@sass-pire/viewports' as viewports;

// Or import into the global namespace
@use '@sass-pire/viewports' as *;
```

All configuration maps are declared with `!default`, so you can override them when importing. Example:

```scss
@use '@sass-pire/viewports' with (
  $viewports: (
    "sm": 640px,
    "md": 768px,
    "lg": 1024px,
    "xl": 1280px,
  )
);
```

### Using the Viewport Map

The `$viewports` map holds named pixel values for common device sizes — from small mobile screens to 4K displays:

```scss
@use 'sass:map';
@use '@sass-pire/viewports' as *;

.sidebar {
  // Read a viewport value directly
  max-width: map.get($viewports, lg);

  @media only screen and (min-width: map.get($viewports, md)) {
    display: flex;
  }
}
```

**Generated CSS:**

```css
.sidebar {
  max-width: 1200px;
}

@media only screen and (min-width: 991px) {
  .sidebar {
    display: flex;
  }
}
```

### Using with `@sass-pire/media`

The [`@sass-pire/media`](../media) package consumes `$viewports`, `$viewports-modes`, and `$viewports-props` internally. Its `mq` and `cq` mixins resolve viewport names from this map:

```scss
@use '@sass-pire/media' as *;

.card {
  width: 100%;

  // Uses "md" (991px) from @sass-pire/viewports
  @include mq($mode: min, $prop: w, $viewport-name: md) {
    width: 50%;
  }

  // Uses "sm" (767px) — max mode subtracts 1px (766px)
  @include mq(max, w, sm) {
    padding: 1rem;
  }
}
```

**Generated CSS:**

```css
@media only screen and (min-width: 991px) {
  .card {
    width: 50%;
  }
}

@media only screen and (max-width: 766px) {
  .card {
    padding: 1rem;
  }
}
```

> **Note:** When `$mode` is `max`, consuming packages subtract `1px` from the viewport value to prevent overlap with the matching `min` query.

### Customizing Viewports for Your Project

Override the default maps when importing this package directly:

```scss
@use 'sass:map';
@use '@sass-pire/viewports' with (
  $viewports: (
    "sm": 640px,
    "md": 768px,
    "lg": 1024px,
    "xl": 1280px,
    "2xl": 1536px,
  )
);

.container {
  padding-inline: 1rem;

  @media only screen and (min-width: map.get($viewports, lg)) {
    padding-inline: 2rem;
  }
}
```

> **Note:** `@sass-pire/media` loads its own copy of `@sass-pire/viewports`.
Overriding `$viewports` in your stylesheet affects your direct `@use` of this package, but not the viewport map used internally by `@sass-pire/media` mixins — those always resolve against the default names listed in [Viewport Scale](#-viewport-scale).

### Complete Example

**Direct viewport usage with a custom map:**

```scss
@use 'sass:map';
@use '@sass-pire/viewports' with (
  $viewports: (
    "sm": 640px,
    "md": 768px,
    "lg": 1024px,
    "xl": 1280px,
  )
);

.page {
  max-width: map.get($viewports, xl);
  margin-inline: auto;
  padding: 1rem;

  @media only screen and (min-width: map.get($viewports, md)) {
    padding: 2rem;
  }

  @include mq(min, w, lg) {
    padding: 3rem;
  }
}
```

**Using default viewport names with `@sass-pire/media`:**

```scss
@use '@sass-pire/media' as *;

.page {
  padding: 1rem;

  @include mq(min, w, md) {
    padding: 2rem;
  }

  @include mq(min, w, lg) {
    padding: 3rem;
  }
}

.card-grid {
  container-type: inline-size;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @include cq(min, w, sm-tab) {
    grid-template-columns: repeat(2, 1fr);
  }

  @include cq(min, w, md) {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## 📐 Viewport Scale

The default `$viewports` map covers mobile, tablet, desktop, and large display sizes:

| Name | Value | Use Case |
|------|-------|----------|
| `x-small` | 240px | Extra small devices |
| `small` | 280px | Small devices |
| `mob-min` | 320px | Minimum mobile width |
| `mob` | 400px | Mobile |
| `mob-wide` | 480px | Wide mobile |
| `xs` | 576px | Extra small breakpoint |
| `sm-tab` | 640px | Small tablet |
| `sm` | 767px | Small / tablet portrait |
| `sm-wide` | 870px | Wide small screens |
| `sm-max` | 930px | Small max |
| `md` | 991px | Medium / tablet landscape |
| `md-tab` | 1024px | Medium tablet |
| `md-max` | 1150px | Medium max |
| `lg` | 1200px | Large / desktop |
| `lg-max` | 1300px | Large max |
| `xl-1` | 1400px | Extra large |
| `xl-2` | 1550px | Extra large 2 |
| `xl-3` | 1900px | Extra large 3 |
| `xxl-1` | 2400px | Extra extra large |
| `xxl-2` | 2560px | 2K displays |
| `xxl-3` | 2800px | Ultra-wide |
| `xxl-4` | 3000px | Ultra-wide max |
| `x4k` | 3840px | 4K displays |

## 🛠️ Development

### Running the Development Server

```bash
# From the package directory
yarn dev

# Or from the monorepo root
yarn dev:viewports
```

This will watch for changes and compile SCSS files automatically.

### Available Scripts

- `yarn dev` - Run all watchers concurrently
- `yarn sass:watch` - Watch and compile SCSS to CSS (uncompressed)
- `yarn sass:comp` - Watch and compile SCSS to CSS (compressed)

## 📁 Package Structure

```
@sass-pire/viewports/
├── dist/
│   ├── index.compiled.css        # SCSS compiled output
│   └── index.compiled.min.css    # SCSS compiled output (compressed)
├── index.scss                    # Viewport configuration (single entry)
├── package.json
└── README.md
```

## 🔗 API Reference

This package exposes configuration variables only — no mixins or functions.

### Variables

#### `$viewports`

Map of viewport names to pixel values.

**Type:** `Map`
**Default:** See [Viewport Scale](#-viewport-scale)

**Example:**

```scss
@use 'sass:map';
@use '@sass-pire/viewports' as *;

$value: map.get($viewports, md); // 991px
```

#### `$viewports-modes`

Allowed query modes used by `@sass-pire/media` mixins.

**Type:** `List`
**Default:** `min`, `max`

#### `$viewports-props`

Allowed dimension properties used by `@sass-pire/media` mixins.

**Type:** `List`
**Default:** `width`, `w`, `height`, `h`

### Override Pattern

All variables are declared with `!default`. Pass custom values via `@use ... with (...)`:

```scss
@use '@sass-pire/viewports' with (
  $viewports: (
    "sm": 640px,
    "md": 768px,
    "lg": 1024px,
  ),
  $viewports-modes: (min, max),
  $viewports-props: (width, w, height, h)
);
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

**Part of the sass-pire packages** 🔥
