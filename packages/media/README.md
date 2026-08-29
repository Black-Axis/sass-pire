# @sass-pire/media

Media query and container query utilities for the sass-pire packages.

Viewport sizes are provided by [`@sass-pire/viewports`](../viewports) — this package reads from that configuration to generate responsive `@media` and `@container` rules.

## 📦 Installation

### In a Monorepo Workspace

If you're working within the sass-pire monorepo, you can reference this package directly:

```bash
# From the root of the monorepo
yarn workspace your-package-name add @sass-pire/media
```

Or add it manually to your package's `package.json`:

```json
{
  "dependencies": {
    "@sass-pire/media": "workspace:*"
  }
}
```

Then run:

```bash
yarn install
```

> `@sass-pire/viewports` is installed automatically as a dependency of this package.

### As a Standalone Package

If you're using this package outside the monorepo:

```bash
# Using yarn
yarn add @sass-pire/media

# Using npm
npm install @sass-pire/media

# Using pnpm
pnpm add @sass-pire/media
```

## 🚀 Usage

### SCSS Import

Import the package in your SCSS files to access media query utilities:

```scss
// Import all media utilities
@use '@sass-pire/media' as media;

// Or import specific modules
@use '@sass-pire/media/src/layout/media-query' as mq;
@use '@sass-pire/media/src/layout/container-query' as cq;

// Or import all into the global namespace
@use '@sass-pire/media' as *;
```

### Sass Load Path

When using the Sass CLI, add `--load-path=node_modules` so scoped packages resolve correctly:

```json
"scripts": {
  "watch:sass": "sass --load-path=node_modules --watch ./src/index.scss"
}
```

### Using Media Query Utilities

The `mq` mixin generates responsive `@media` queries using viewport names from [`@sass-pire/viewports`](../viewports):

```scss
@use '@sass-pire/media/src/layout/media-query' as *;

.card {
  width: 100%;

  @include mq($mode: min, $prop: w, $viewport-name: md) {
    width: 50%;
  }

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

**Parameters:**

| Parameter | Default | Description |
|-----------|---------|-------------|
| `$mode` | `min` | Query mode: `min` or `max` |
| `$prop` | `w` | Dimension: `width`, `w`, `height`, or `h` |
| `$viewport-name` | `md` | Viewport name from `$viewports` in `@sass-pire/viewports` |

> **Note:** When `$mode` is `max`, the viewport value is reduced by `1px` to avoid overlap with the corresponding `min` query.

### Using Container Query Utilities

The `cq` mixin generates CSS container queries using the same viewport map:

```scss
@use '@sass-pire/media/src/layout/container-query' as *;

.sidebar {
  container-type: inline-size;

  .nav-item {
    display: block;

    @include cq($mode: min, $prop: w, $viewport-name: sm) {
      display: inline-block;
    }
  }
}
```

**Generated CSS:**

```css
@container (min-width: 767px) {
  .sidebar .nav-item {
    display: inline-block;
  }
}
```

**Parameters:**

| Parameter | Default | Description |
|-----------|---------|-------------|
| `$mode` | `min` | Query mode: `min` or `max` |
| `$prop` | `w` | Dimension: `width`, `w`, `height`, or `h` |
| `$viewport-name` | `md` | Viewport name from `$viewports` in `@sass-pire/viewports` |
| `$container-name` | `""` | Optional named container selector |

### Viewport Configuration

Viewport sizes are not defined in this package. They live in [`@sass-pire/viewports`](../viewports) as the `$viewports` map. The `mq` and `cq` mixins resolve `$viewport-name` against that map at compile time.

See the [`@sass-pire/viewports` README](../viewports/README.md) for the full viewport scale and customization options.

> **Note:** `@sass-pire/media` loads its own copy of `@sass-pire/viewports`. The mixins use the default viewport names listed below. To use custom viewport values directly in your stylesheets, import and configure `@sass-pire/viewports` separately.

### Complete Example

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

.grid {
  container-type: inline-size;
  display: grid;
  grid-template-columns: 1fr;

  @include cq(min, w, sm-tab) {
    grid-template-columns: repeat(2, 1fr);
  }

  @include cq(min, w, md) {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## 🛠️ Development

### Running the Development Server

```bash
# From the package directory
yarn dev

# Or from the monorepo root
yarn dev:media
```

This will watch for changes and compile SCSS files automatically.

## 📁 Package Structure

```
@sass-pire/media/
├── src/
│   ├── layout/
│   │   ├── _media-query.scss     # Media query mixin (mq)
│   │   ├── _container-query.scss # Container query mixin (cq)
│   │   └── _index.scss           # Layout module entry
│   └── _index.scss               # Source entry point
├── dist/
│   ├── index.css                 # Compiled CSS (uncompressed)
│   ├── index.min.css             # Compiled CSS (compressed)
│   ├── index.compiled.css        # SCSS compiled output
│   └── index.compiled.min.css    # SCSS compiled output (compressed)
├── index.scss                    # Main entry point
├── package.json
└── README.md
```

## 🔗 API Reference

### Mixins

#### `mq($mode, $prop, $viewport-name)`

Generates a responsive `@media` query using viewport names from `@sass-pire/viewports`.

**Parameters:**
- `$mode` (String, optional) - Query mode: `min` or `max`. Default: `min`
- `$prop` (String, optional) - Dimension: `width`, `w`, `height`, or `h`. Default: `w`
- `$viewport-name` (String, optional) - Viewport name from `$viewports`. Default: `md`

**Example:**

```scss
@include mq($mode: min, $prop: w, $viewport-name: lg) {
  display: flex;
}

@include mq(max, w, sm) {
  flex-direction: column;
}
```

#### `cq($mode, $prop, $viewport-name, $container-name)`

Generates a responsive `@container` query using viewport names from `@sass-pire/viewports`.

**Parameters:**
- `$mode` (String, optional) - Query mode: `min` or `max`. Default: `min`
- `$prop` (String, optional) - Dimension: `width`, `w`, `height`, or `h`. Default: `w`
- `$viewport-name` (String, optional) - Viewport name from `$viewports`. Default: `md`
- `$container-name` (String, optional) - Named container selector. Default: `""`

**Example:**

```scss
@include cq(min, w, md) {
  grid-template-columns: repeat(2, 1fr);
}

@include cq(max, w, sm, sidebar) {
  display: none;
}
```

### Configuration Variables

Viewport configuration is provided by [`@sass-pire/viewports`](../viewports), not this package:

| Variable | Package | Description |
|----------|---------|-------------|
| `$viewports` | `@sass-pire/viewports` | Map of viewport names to pixel values |
| `$viewports-modes` | `@sass-pire/viewports` | Allowed query modes: `min`, `max` |
| `$viewports-props` | `@sass-pire/viewports` | Allowed dimensions: `width`, `w`, `height`, `h` |

## 🔗 Related Packages

| Package | Relationship |
|---------|--------------|
| [`@sass-pire/viewports`](../viewports) | Provides `$viewports` map used by `mq` and `cq` mixins |
| [`@sass-pire/lists`](../lists) | Validates mode and prop values |
| [`@sass-pire/handlers`](../handlers) | Throws errors for invalid viewport names |

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
