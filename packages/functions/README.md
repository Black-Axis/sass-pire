# @sass-pire/functions

Sass utility functions and helpers for the `sass-pire` package.

## Table of Contents

- [📦 Installation](#-installation)
- [🚀 Usage](#-usage)
  - [SCSS Import](#scss-import)
  - [Using `cut-unit($num)`](#using-cut-unitnum)
  - [Using `half($number)`](#using-halfnumber)
  - [Using `approx($num, $digits, $mode)`](#using-approxnum-digits-mode)
  - [Using `px-to-rem($px-val)`](#using-px-to-rempx-val)
  - [Complete Example](#complete-example)
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
yarn workspace your-package-name add @sass-pire/functions
```

Or add it manually to your package's `package.json`:

```json
{
  "dependencies": {
    "@sass-pire/functions": "workspace:*"
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
yarn add @sass-pire/functions

# Using npm
npm install @sass-pire/functions

# Using pnpm
pnpm add @sass-pire/functions
```

[↑ Back to Table of Contents](#table-of-contents)

## 🚀 Usage

### SCSS Import

Import the package in your SCSS files to access functions:

```scss
// Import all functions
@use "@sass-pire/functions" as fn;

// Or import a specific module
@use "@sass-pire/functions/src/cut-unit" as cut;
@use "@sass-pire/functions/src/get-half-number" as half;
@use "@sass-pire/functions/src/approximation-number" as approx;
@use "@sass-pire/functions/src/pixel-to-rem" as px;
```

[↑ Back to Table of Contents](#table-of-contents)

### Using `cut-unit($num)`

Strips the unit from a number (e.g. `12px → 12`).

```scss
@use "@sass-pire/functions" as fn;

.example {
  content: fn.cut-unit(12px); // 12
  content: fn.cut-unit(2rem); // 2
  content: fn.cut-unit(10);   // 10
}
```

**Validation behavior:**

- Passing a **non-number** is an error.
- Passing **`0` with a unit** (e.g. `0px`) is treated as an error (unit is unnecessary for zero).

[↑ Back to Table of Contents](#table-of-contents)

### Using `half($number)`

Returns half of the given number. If the input has a unit, the result keeps the same unit.

```scss
@use "@sass-pire/functions" as fn;

.example {
  content: fn.half(12);     // 6
  content: fn.half(130rem); // 65rem
  content: fn.half(22cm);   // 11cm
  content: fn.half(0);      // 0
}
```

**Validation behavior:**

- Passing a **non-number** is an error.

[↑ Back to Table of Contents](#table-of-contents)

### Using `approx($num, $digits, $mode)`

Rounds a number to a fixed number of decimal digits, preserving the unit.

```scss
@use "@sass-pire/functions" as fn;

.example {
  content: fn.approx(12.36154vh, 2, round); // 12.36vh
  content: fn.approx(3.14159);              // 3.142
  content: fn.approx(3.14159, 2, ceil);     // 3.15
  content: fn.approx(3.14159, 2, floor);    // 3.14
}
```

**Parameters:**

- `$num` (Number) - The number to approximate.
- `$digits` (Number, optional) - Decimal digits to keep. Default: `3`.
- `$mode` (String, optional) - Rounding mode: `round`, `ceil`, or `floor`. Default: `round`.

**Validation behavior:**

- Passing a **non-number** as `$num` or `$digits` is an error.
- Passing a **non-string** `$mode` is an error.
- Passing a `$mode` outside `round`, `ceil`, `floor` is an error.

[↑ Back to Table of Contents](#table-of-contents)

### Using `px-to-rem($px-val)`

Converts a pixel value to `rem`, assuming a `16px` root font size. The result is passed through `approx()`, so it carries at most 3 decimal digits.

```scss
@use "@sass-pire/functions" as fn;

.example {
  content: fn.px-to-rem(12px); // 0.75rem
  content: fn.px-to-rem(24px); // 1.5rem
  content: fn.px-to-rem(0);    // 0
}
```

**Validation behavior:**

- Passing a **non-number** is an error.
- Passing **`0` with a unit** (`0px`) is an error; use unitless `0`, which returns `0`.

[↑ Back to Table of Contents](#table-of-contents)

### Complete Example

```scss
@use "@sass-pire/functions" as fn;

.card {
  padding: fn.half(24px);
  border-radius: fn.cut-unit(0.5rem) * 1px;
}
```

[↑ Back to Table of Contents](#table-of-contents)

## 🛠️ Development

### Running the Development Server

```bash
# From the package directory
yarn dev

# Or from the monorepo root
yarn dev:functions
```

This will watch for changes and compile SCSS files automatically.

### Available Scripts

- `yarn dev` - Run all watchers concurrently
- `yarn sass:watch` - Watch and compile SCSS to CSS (uncompressed)
- `yarn sass:comp` - Watch and compile SCSS to CSS (compressed)

[↑ Back to Table of Contents](#table-of-contents)

## 📁 Package Structure

```
@sass-pire/functions/
├── src/
│   ├── _cut-unit.scss              # cut-unit($num)
│   ├── _get-half-number.scss       # half($number)
│   ├── _approximation-number.scss  # approx($num, $digits, $mode)
│   └── _pixel-to-rem.scss          # px-to-rem($px-val)
├── dist/
│   ├── index.compiled.css     # SCSS compiled output (uncompressed)
│   └── index.compiled.min.css # SCSS compiled output (compressed)
├── index.scss                 # Main entry point
├── package.json
└── README.md
```

[↑ Back to Table of Contents](#table-of-contents)

## 🔗 API Reference

### Functions

#### `cut-unit($num)`

Strips the unit from a number.

**Parameters:**

- `$num` (Number) - The value from which the unit will be stripped.

**Example:**

```scss
@use "@sass-pire/functions" as fn;

.example {
  content: fn.cut-unit(12cm); // 12
}
```

#### `half($number)`

Returns half of the given number. Keeps the unit when present.

**Parameters:**

- `$number` (Number) - The value to halve (unitless or with a unit).

**Example:**

```scss
@use "@sass-pire/functions" as fn;

.example {
  content: fn.half(22cm); // 11cm
}
```

#### `approx($num, $digits: 3, $mode: round)`

Rounds a number to a fixed number of decimal digits, preserving the unit.

**Parameters:**

- `$num` (Number) - The number to approximate.
- `$digits` (Number, optional) - Decimal digits to keep. Default: `3`.
- `$mode` (String, optional) - Rounding mode: `round`, `ceil`, or `floor`. Default: `round`.

**Example:**

```scss
@use "@sass-pire/functions" as fn;

.example {
  content: fn.approx(12.36154vh, 2, round); // 12.36vh
}
```

#### `px-to-rem($px-val)`

Converts a pixel value to `rem` against a `16px` root font size. Delegates to `approx()`, so the result carries at most 3 decimal digits.

**Parameters:**

- `$px-val` (Number) - The pixel value to convert. Unitless `0` returns `0`.

**Example:**

```scss
@use "@sass-pire/functions" as fn;

.example {
  content: fn.px-to-rem(12px); // 0.75rem
}
```

[↑ Back to Table of Contents](#table-of-contents)

## 🤝 Contributing

This package is part of the [sass-pire](https://github.com/Black-Axis/sass-pire) monorepo. Please refer to the main repository for contribution guidelines.

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
