# @sass-pire/functions

Sass utility functions and helpers for the `sass-pire` package.

## Table of Contents

- [📦 Installation](#-installation)
- [🚀 Usage](#-usage)
  - [SCSS Import](#scss-import)
  - [Using `cut-unit($num)`](#using-cut-unitnum)
  - [Using `half($number)`](#using-halfnumber)
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

[↑ Back to Top](#table-of-contents)

## 🚀 Usage

### SCSS Import

Import the package in your SCSS files to access functions:

```scss
// Import all functions
@use "@sass-pire/functions" as fn;

// Or import a specific module
@use "@sass-pire/functions/src/cut-unit" as cut;
@use "@sass-pire/functions/src/get-half-number" as half;
```

[↑ Back to Top](#table-of-contents)

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
  content: fn.half(12);     // calc(12 / 2)
  content: fn.half(130rem); // "calc(130 / 2)rem"
  content: fn.half(22cm);   // "calc(22 / 2)cm"
}
```

**Validation behavior:**

- Passing a **non-number** is an error.

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
│   ├── _cut-unit.scss         # cut-unit($num)
│   └── _get-half-number.scss  # half($number)
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
  content: fn.half(22cm); // "calc(22 / 2)cm"
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

**Part of the sass-pire package**

[↑ Back to Table of Contents](#table-of-contents)
