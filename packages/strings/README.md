# @sass-pire/strings

String utility functions for the sass-pire packages.

This package provides Sass functions for strings.

## Table of Contents

- [📦 Installation](#-installation)
- [🚀 Usage](#-usage)
  - [SCSS Import](#scss-import)
  - [Sass Load Path](#sass-load-path)
  - [Using `trim-start($str-value)`](#using-trim-startstr-value)
  - [Using `trim-end($str-value)`](#using-trim-endstr-value)
  - [Using `trim($str-value)`](#using-trimstr-value)
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
yarn workspace your-package-name add @sass-pire/strings
```

Or add it manually to your package's `package.json`:

```json
{
  "dependencies": {
    "@sass-pire/strings": "workspace:*"
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
yarn add @sass-pire/strings

# Using npm
npm install @sass-pire/strings

# Using pnpm
pnpm add @sass-pire/strings
```

## 🚀 Usage

### SCSS Import

Import the package in your SCSS files to access string utilities:

```scss
// Import all string functions
@use '@sass-pire/strings' as strings;

// Or import specific modules
@use '@sass-pire/strings/src/trim-start' as *;

// Or import all into the global namespace
@use '@sass-pire/strings' as *;
```

### Sass Load Path

When using the Sass CLI, add `--load-path=node_modules` so scoped packages resolve correctly:

```json
"scripts": {
  "watch:sass": "sass --load-path=node_modules --watch ./src/index.scss"
}
```

### Using `trim-start($str-value)`

Removes leading whitespace from a string. Supports a wide range of Unicode whitespace characters (spaces, tabs, line breaks, non-breaking spaces, and more).

```scss
@use '@sass-pire/strings/src/trim-start' as *;

.example {
  content: trim-start('   Just an example   ');
  // Result: "Just an example   "
}
```

**Validation behavior:**

- Passing a **non-string** throws an error via `@sass-pire/handlers`.

### Using `trim-end($str-value)`

Removes trailing whitespace from a string.

```scss
@use '@sass-pire/strings/src/trim-end' as *;

.example {
  content: trim-end('   Just an example   ');
  // Result: "   Just an example"
}
```

**Validation behavior:**

- Passing a **non-string** throws an error via `@sass-pire/handlers`.

### Using `trim($str-value)`

Removes whitespace from both ends of a string. Internally applies `trim-end` then `trim-start`.

```scss
@use '@sass-pire/strings/src/trim' as *;

.example {
  content: trim('    Just an example   ');
  // Result: "Just an example"
}
```

**Validation behavior:**

- Passing a **non-string** throws an error via `@sass-pire/handlers`.

### Complete Example

```scss
@use '@sass-pire/strings' as str;

// Normalize a user-defined class fragment
$raw-name: '  hero-banner  ';
$clean-name: str.trim($raw-name); // "hero-banner"

.hero {
  // Use trimmed value in selectors or custom properties
  --section-name: #{$clean-name};
}

// Trim only the start when preserving trailing space matters
$label: str.trim-start('  Featured  ');
// "Featured  "

// Trim only the end
$path: str.trim-end('/api/users/  ');
// "/api/users/"
```

## 🛠️ Development

### Running the Development Server

```bash
# From the package directory
yarn dev

# Or from the monorepo root
yarn dev:strings
```

This will watch for changes and compile SCSS files automatically.

### Available Scripts

- `yarn dev` - Run all watchers concurrently
- `yarn sass:watch` - Watch and compile SCSS to CSS (uncompressed)
- `yarn sass:comp` - Watch and compile SCSS to CSS (compressed)

### Testing

All 3 trim functions have sass-true tests under `tests/` (15 assertions):

```bash
# From the monorepo root
yarn test:strings
```

Tests run via the root Jest config ([jest.config.js](../../jest.config.js)); there is no `test` script in this package's own `package.json`.

## 📁 Package Structure

```
@sass-pire/strings/
├── src/
│   ├── _trim-start.scss   # trim-start($str-value)
│   ├── _trim-end.scss     # trim-end($str-value)
│   └── _trim.scss         # trim($str-value)
├── dist/
│   ├── index.compiled.css     # SCSS compiled output
│   └── index.compiled.min.css # SCSS compiled output (compressed)
├── index.scss             # Main entry point
├── package.json
└── README.md
```

## 🔗 API Reference

### Functions

#### `trim-start($str-value)`

Removes all leading whitespace from a string.

**Parameters:**

- `$str-value` (String) - The string to trim from the start.

**Returns:**

- (String) - The string without leading whitespace.

**Example:**

```scss
@use '@sass-pire/strings' as str;

.example {
  content: str.trim-start('   hello'); // "hello"
}
```

#### `trim-end($str-value)`

Removes all trailing whitespace from a string.

**Parameters:**

- `$str-value` (String) - The string to trim from the end.

**Returns:**

- (String) - The string without trailing whitespace.

**Example:**

```scss
@use '@sass-pire/strings' as str;

.example {
  content: str.trim-end('hello   '); // "hello"
}
```

#### `trim($str-value)`

Removes leading and trailing whitespace from a string.

**Parameters:**

- `$str-value` (String) - The string to trim from both ends.

**Returns:**

- (String) - The string without leading or trailing whitespace.

**Example:**

```scss
@use '@sass-pire/strings' as str;

.example {
  content: str.trim('   hello   '); // "hello"
}
```

### Whitespace Support

`trim-start` and `trim-end` recognize standard and Unicode whitespace, including:

- Space, tab, line feed, carriage return
- Non-breaking space (`\00A0`)
- Various Unicode space separators (`\2000`–`\200A`, `\3000`, etc.)
- Line/paragraph separators (`\2028`, `\2029`)
- Zero-width no-break space (`\FEFF`)

## 🔗 Related Packages

| Package | Relationship |
|---------|--------------|
| [`@sass-pire/handlers`](../handlers) | Throws errors when a non-string is passed to trim functions |

## 🤝 Contributing

This package is part of the [sass-pire](https://github.com/Black-Axis/sass-pire) monorepo. Please refer to the main repository for contribution guidelines.

Trim functions are adapted from [sass-fairy](https://github.com/roydukkey/sass-fairy) by roydukkey, converted to SCSS for sass-pire.

## 📄 License

MIT © [Khaled Mohamed](https://github.com/krypton225)

## 🐛 Issues

Report issues at: [https://github.com/Black-Axis/sass-pire/issues](https://github.com/Black-Axis/sass-pire/issues)

## 📧 Contact

- **Author:** Khaled Mohamed
- **Org. Email:** black_axis@outlook.com

---

**Part of the sass-pire design system** 🔥
