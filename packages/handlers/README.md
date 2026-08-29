# @sass-pire/handlers

Error handling utilities for the sass-pire.

## Table of Contents

- [📦 Installation](#installation)
- [🚀 Usage](#usage)
  - [SCSS Import](#scss-import)
  - [Sass Load Path](#sass-load-path)
  - [Configuration](#configuration)
  - [Throwing Errors](#throwing-errors)
- [📁 Package Structure](#package-structure)
- [🔗 API Reference](#api-reference)
- [🛠️ Development](#development)
- [🤝 Contributing](#contributing)
- [📄 License](#license)
- [📧 Contact](#contact)

---

## 📦 Installation

### In a Monorepo Workspace

If you're working within the sass-pire monorepo, you can reference this package directly:

```bash
# From the root of the monorepo
yarn workspace your-package-name add -D @sass-pire/handlers
```

Or add it manually to your package's `package.json`:

```json
{
  "devDependencies": {
    "@sass-pire/handlers": "workspace:*"
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
yarn add -D @sass-pire/handlers

# Using npm
npm install -D @sass-pire/handlers

# Using pnpm
pnpm add -D @sass-pire/handlers
```

> `@sass-pire/handlers` is only needed at SCSS compile time, so it belongs in `devDependencies`.

[↑ Back to Table of Contents](#table-of-contents)

## 🚀 Usage

### SCSS Import

Import the package in your SCSS files to access the error handling utilities:

```scss
@use '@sass-pire/handlers' as throw;

// Or import specific styles
@use '@sass-pire/handlers/index' as throw;
```

### Sass Load Path

When using the Sass CLI, add `--load-path=node_modules` so scoped packages resolve correctly:

```json
"scripts": {
  "watch:sass": "sass --load-path=node_modules --watch ./src/index.scss"
}
```

[↑ Back to Table of Contents](#table-of-contents)

### Configuration

The package provides a global `$dev-env` variable that controls how errors are handled. This is particularly useful for switching between destructive errors (halting the build) and informative strings (debugging).

```scss
@use '@sass-pire/handlers' with (
  $dev-env: true // Default: true
);
```

- **`$dev-env: true` (Default)**: Uses the native Sass `@error` directive to stop compilation and show the error message.
- **`$dev-env: false`**: Returns the error message as a formatted string (prefixed with `ERROR:`), which can be assigned to CSS properties like `content`.

### Throwing Errors

Use the `throw()` function to handle validation or logic errors in your functions and mixins.

```scss
@use '@sass-pire/handlers' as *;

@mixin my-mixin($size) {
  @if type-of($size) != number {
    $error: throw("The $size argument must be a number!");

    // If $dev-env is false, you could use the returned string
    &::before {
      content: $error;
    }
  }

  width: $size;
}
```

[↑ Back to Table of Contents](#table-of-contents)

## 📁 Package Structure

```
@sass-pire/handlers/
├── dist/                      # Local compile output (dev only, not published)
│   └── index.compiled.css     # SCSS compiled output
├── index.scss                 # Main entry point (throw function & $dev-env)
├── package.json
├── LICENSE.md
└── README.md
```

[↑ Back to Table of Contents](#table-of-contents)

## 🔗 API Reference

### Global Variables

| Variable | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `$dev-env` | Boolean | `true` | When `true`, `throw()` halts compilation. When `false`, it returns a string. |

### Functions

#### `throw($message: "An error occurred!")`

A robust wrapper for Sass error handling that includes type validation for the message itself.

**Parameters:**
- `$message` (String) - The error message to be displayed or returned.

**Returns:**
- (String) - If `$dev-env` is `false`, returns `"ERROR: #{$message}"`. Otherwise, it triggers a compiler error.

**Example:**
```scss
.example {
  // If $dev-env is false:
  content: throw("Something went wrong"); // Result: content: "ERROR: Something went wrong";
}
```

[↑ Back to Table of Contents](#table-of-contents)

## 🛠️ Development

### Available Scripts

- `yarn dev` - Watch and compile the handlers entry point.
- `yarn sass:watch` - Compile `index.scss` to `dist/index.compiled.css` with a watcher.

[↑ Back to Table of Contents](#table-of-contents)

## 🤝 Contributing

This package is part of the [sass-pire](https://github.com/Black-Axis/sass-pire) monorepo. Please refer to the main repository for contribution guidelines.

## 📄 License

MIT © [Khaled Mohamed](https://github.com/krypton225)

## 📧 Contact

- **Author:** Khaled Mohamed
- **Org. Email:** black_axis@outlook.com

---

**Part of the sass-pire design system** 🔥

[↑ Back to Table of Contents](#table-of-contents)
