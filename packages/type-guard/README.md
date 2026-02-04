# @sass-pire/type-guard

Type utilities and checker for the sass-pire design system.

## 📦 Installation

### In a Monorepo Workspace

If you're working within the sass-pire monorepo, you can reference this package directly:

```bash
# From the root of the monorepo
yarn workspace your-package-name add @sass-pire/type-guard
```

Or add it manually to your package's `package.json`:

```json
{
  "dependencies": {
    "@sass-pire/type-guard": "workspace:*"
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
yarn add @sass-pire/type-guard

# Using npm
npm install @sass-pire/type-guard

# Using pnpm
pnpm add @sass-pire/type-guard
```

## 🚀 Usage

### SCSS Import

Import the package in your SCSS files to access type-guard functions:

```scss
// Import all type-guard utilities
@use '@sass-pire/type-guard';

// Or import specific modules
@use '@sass-pire/type-guard/src/has-absolute-unit' as abs-unit;
@use '@sass-pire/type-guard/src/is-integer' as int;
```

### Using Type Guard Functions

The package provides functions to check if a value has a specific unit or type. These functions are typically used in mixins or other functions to validate input arguments.

```scss
@use '@sass-pire/type-guard';

@mixin my-mixin($size) {
  @if has-abs-unit($size) {
    // Logic for absolute units (px, cm, etc.)
    padding: $size;
  } @else if has-rel-unit($size) {
    // Logic for relative units (em, rem, etc.)
    margin: $size;
  } @else {
    @error "Invalid unit provided.";
  }
}
```

## 📁 Package Structure

```
@sass-pire/type-guard/
├── src/
│   ├── has-absolute-unit/
│   │   └── _index.scss       # Absolute unit check
│   ├── has-angle-unit/
│   │   └── _index.scss       # Angle unit check
│   ├── has-percentage-unit/
│   │   └── _index.scss       # Percentage unit check
│   ├── has-relative-unit/
│   │   └── _index.scss       # Relative unit check
│   ├── has-resolution-unit/
│   │   └── _index.scss       # Resolution unit check
│   ├── has-time-unit/
│   │   └── _index.scss       # Time unit check
│   ├── has-viewport-unit/
│   │   └── _index.scss       # Viewport unit check
│   ├── is-float/
│   │   └── _index.scss       # Float check
│   └── is-integer/
│       └── _index.scss       # Integer check
├── dist/
│   ├── index.css
│   └── index.min.css
├── index.scss                 # Main entry point
├── package.json
└── README.md
```

## 🔗 API Reference

### Functions

#### `has-abs-unit($value)`

Checks if the provided argument has an absolute unit.
**Supported Units:** `cm`, `mm`, `q`, `in`, `px`, `pt`, `pc`

**Parameters:**
- `$value` (Number) - The number to check.

**Returns:**
- `Boolean` - `true` if the argument has an absolute unit, otherwise `false`.

**Throws:**
- Error if `$value` is not a number type.

**Example:**
```scss
.example {
  content: has-abs-unit(12cm); // true
}
```

#### `has-angle-unit($value)`

Checks if the provided argument has an angle unit.
**Supported Units:** `deg`, `rad`, `grad`, `turn`

**Parameters:**
- `$value` (Number) - The number to check.

**Returns:**
- `Boolean` - `true` if the argument has an angle unit, otherwise `false`.

**Throws:**
- Error if `$value` is not a number type.

**Example:**
```scss
.example {
  content: has-angle-unit(90deg); // true
}
```

#### `has-ptg($value)`

Checks if the provided argument has a percentage unit.
**Supported Unit:** `%`

**Parameters:**
- `$value` (Number) - The number to check.

**Returns:**
- `Boolean` - `true` if the argument has a percentage unit, otherwise `false`.

**Throws:**
- Error if `$value` is not a number type.

**Example:**
```scss
.example {
  content: has-ptg(50%); // true
}
```

#### `has-rel-unit($value)`

Checks if the provided argument has relative units.
**Supported Units:**
- Font-relative: `em`, `rem`, `ex`, `ch`, `cap`, `ic`, `lh`, `rlh`
- Viewport-relative: `vw`, `vh`, `vmin`, `vmax`, `svw`, `svh`, `svmin`, `svmax`, `lvw`, `lvh`, `lvmin`, `lvmax`, `dvw`, `dvh`, `dvmin`, `dvmax`

**Parameters:**
- `$value` (Number) - The number to check.

**Returns:**
- `Boolean` - `true` if the argument has a relative unit, otherwise `false`.

**Throws:**
- Error if `$value` is not a number type.

**Example:**
```scss
.example {
  content: has-rel-unit(2rem); // true
}
```

#### `has-res-unit($value)`

Checks if the provided argument has resolution units.
**Supported Units:** `dpi`, `dpcm`, `dppx`

**Parameters:**
- `$value` (Number) - The number to check.

**Returns:**
- `Boolean` - `true` if the argument has a resolution unit, otherwise `false`.

**Throws:**
- Error if `$value` is not a number type.

**Example:**
```scss
.example {
  content: has-res-unit(72dpi); // true
}
```

#### `has-time-unit($value)`

Checks if the provided argument has a time unit.
**Supported Units:** `ms`, `s`

**Parameters:**
- `$value` (Number) - The number to check.

**Returns:**
- `Boolean` - `true` if the argument has a time unit, otherwise `false`.

**Throws:**
- Error if `$value` is not a number type.

**Example:**
```scss
.example {
  content: has-time-unit(300ms); // true
}
```

#### `has-vp-unit($value)`

Checks if the provided argument has viewport units.
**Supported Units:** `vw`, `vh`, `vi`, `vb`, `vmin`, `vmax`, `svw`, `svh`, `svi`, `svb`, `svmin`, `svmax`, `lvw`, `lvh`, `lvi`, `lvb`, `lvmin`, `lvmax`, `dvw`, `dvh`, `dvi`, `dvb`, `dvmin`, `dvmax`

**Parameters:**
- `$value` (Number) - The number to check.

**Returns:**
- `Boolean` - `true` if the argument has a viewport unit, otherwise `false`.

**Throws:**
- Error if `$value` is not a number type.

**Example:**
```scss
.example {
  content: has-vp-unit(100vh); // true
}
```

#### `is-float($value)`

Checks if the provided argument is a floating-point number.

**Parameters:**
- `$value` (Number) - The number to check.

**Returns:**
- `Boolean` - `true` if the number is a float, otherwise `false`.

**Throws:**
- Error if `$value` is not a number type.

**Example:**
```scss
.example {
  content: is-float(1.5); // true
}
```

#### `is-int($value)`

Checks if the provided argument is an integer number.

**Parameters:**
- `$value` (Number) - The number to check.

**Returns:**
- `Boolean` - `true` if the number is an integer, otherwise `false`.

**Throws:**
- Error if `$value` is not a number type.

**Example:**
```scss
.example {
  content: is-int(10); // true
}
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
