# @sass-pire/family

Nth-child selector mixins for Sass — a typed, validated port of the [family.scss](https://github.com/LukyVj/family.scss) utilities, integrated into the sass-pire design system.

Part of the [sass-pire monorepo](../../README.md) (v6). See the root README for the full package list and migration from legacy `sass-pire`.

## Table of Contents

- [📦 Installation](#-installation)
- [🚀 Usage](#-usage)
  - [SCSS Import](#scss-import)
  - [Sass Load Path](#sass-load-path)
  - [How It Works](#how-it-works)
  - [Mixin Quick Reference](#mixin-quick-reference)
  - [first-of](#first-of)
  - [last-of](#last-of)
  - [between](#between)
  - [after-first](#after-first)
  - [all-but](#all-but)
  - [every](#every)
  - [even-between](#even-between)
  - [odd-between](#odd-between)
  - [Complete Example](#complete-example)
- [📦 Dependencies](#-dependencies)
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
yarn workspace your-package-name add @sass-pire/family
```

Or add it manually to your package's `package.json`:

```json
{
  "dependencies": {
    "@sass-pire/family": "workspace:*"
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
yarn add @sass-pire/family

# Using npm
npm install @sass-pire/family

# Using pnpm
pnpm add @sass-pire/family
```

`@sass-pire/functions` and `@sass-pire/handlers` are installed automatically as dependencies.

[↑ Back to Table of Contents](#table-of-contents)

## 🚀 Usage

### SCSS Import

Import the full package or individual mixins:

```scss
// Import all family mixins
@use '@sass-pire/family' as family;

// Or import specific modules
@use '@sass-pire/family/src/first-of' as *;
@use '@sass-pire/family/src/last-of' as *;
@use '@sass-pire/family/src/between' as *;
@use '@sass-pire/family/src/after-first' as *;
@use '@sass-pire/family/src/all-but' as *;
@use '@sass-pire/family/src/every' as *;
@use '@sass-pire/family/src/even-between' as *;
@use '@sass-pire/family/src/odd-between' as *;
```

[↑ Back to Table of Contents](#table-of-contents)

### Sass Load Path

When using the Sass CLI, add `--load-path=node_modules` so scoped packages resolve correctly:

```json
"scripts": {
  "watch:sass": "sass --load-path=node_modules --watch ./src/index.scss"
}
```

[↑ Back to Table of Contents](#table-of-contents)

### How It Works

Each mixin is a **content block** that appends an `:nth-child()` (or `:first-child` / `:last-child`) selector to the current context using `&`. Use them on child selectors inside a parent:

```scss
.list {
  li {
    @include first-of(1) {
      font-weight: bold;
    }
  }
}
```

All mixins validate that numeric parameters are numbers and throw descriptive errors via `@sass-pire/handlers` when validation fails. Units on numbers are stripped automatically via `@sass-pire/functions`.

[↑ Back to Table of Contents](#table-of-contents)

### Mixin Quick Reference

| Mixin | Parameters | Selects | Compiled selector |
|---|---|---|---|
| `first-of` | `$num` (default: `1`) | First *N* children | `:first-child` or `:nth-child(-n+N)` |
| `last-of` | `$num` (default: `1`) | Last *N* children | `:last-child` or `:nth-last-child(-n+N)` |
| `between` | `$first-num`, `$last-num` | Children from position *A* through *B* | `:nth-child(n+A):nth-child(-n+B)` |
| `after-first` | `$num` (default: `1`) | All children after the first *N* | `:nth-child(n+N+1)` |
| `all-but` | `$num` | Every child except position *N* | `:not(:nth-child(N))` |
| `every` | `$num` (default: `1`) | Every *N*th child | `:nth-child(Nn)` |
| `even-between` | `$first-num`, `$last-num` | Even children in range *A–B* | `:nth-child(even):nth-child(n+A):nth-child(-n+B)` |
| `odd-between` | `$first-num`, `$last-num` | Odd children in range *A–B* | `:nth-child(odd):nth-child(n+A):nth-child(-n+B)` |

[↑ Back to Table of Contents](#table-of-contents)

### first-of

Select the first *N* children of a parent. When `$num` is `1`, compiles to `:first-child` for better browser compatibility.

```scss
@use '@sass-pire/family/src/first-of' as *;

.nav {
  a {
    @include first-of(3) {
      border-left: 2px solid currentColor;
    }
  }
}
```

**Compiled CSS:**

```css
.nav a:nth-child(-n+3) {
  border-left: 2px solid currentColor;
}
```

**Matches:** children at positions 1, 2, and 3.

[↑ Back to Table of Contents](#table-of-contents)

### last-of

Select the last *N* children of a parent. When `$num` is `1`, compiles to `:last-child`.

```scss
@use '@sass-pire/family/src/last-of' as *;

.gallery {
  figure {
    @include last-of(2) {
      margin-bottom: 0;
    }
  }
}
```

**Compiled CSS:**

```css
.gallery figure:nth-last-child(-n+2) {
  margin-bottom: 0;
}
```

**Matches:** the last two children regardless of total count.

[↑ Back to Table of Contents](#table-of-contents)

### between

Select children within an inclusive position range.

```scss
@use '@sass-pire/family/src/between' as *;

.table {
  tr {
    @include between(4, 10) {
      background-color: #f5f5f5;
    }
  }
}
```

**Compiled CSS:**

```css
.table tr:nth-child(n+4):nth-child(-n+10) {
  background-color: #f5f5f5;
}
```

**Matches:** children at positions 4, 5, 6, 7, 8, 9, and 10.

[↑ Back to Table of Contents](#table-of-contents)

### after-first

Select all children that come after the first *N*. The count is **exclusive** — `after-first(1)` skips the first child and targets everything from position 2 onward.

```scss
@use '@sass-pire/family/src/after-first' as *;

.breadcrumb {
  span {
    @include after-first(1) {
      &::before {
        content: "/";
        margin-inline: 0.5rem;
      }
    }
  }
}
```

**Compiled CSS:**

```css
.breadcrumb span:nth-child(n+2)::before {
  content: "/";
  margin-inline: 0.5rem;
}
```

| `$num` | Skips first | Starts at position |
|---|---|---|
| `1` | 1 child | 2 |
| `2` | 2 children | 3 |
| `4` | 4 children | 5 |

[↑ Back to Table of Contents](#table-of-contents)

### all-but

Select every child **except** the one at position *N*.

```scss
@use '@sass-pire/family/src/all-but' as *;

.tabs {
  button {
    @include all-but(1) {
      border-left: 1px solid #ddd;
    }
  }
}
```

**Compiled CSS:**

```css
.tabs button:not(:nth-child(1)) {
  border-left: 1px solid #ddd;
}
```

**Matches:** all children except the first.

[↑ Back to Table of Contents](#table-of-contents)

### every

Select every *N*th child (equivalent to `:nth-child(Nn)`).

```scss
@use '@sass-pire/family/src/every' as *;

.grid {
  .cell {
    @include every(3) {
      clear: left;
    }
  }
}
```

**Compiled CSS:**

```css
.grid .cell:nth-child(3n) {
  clear: left;
}
```

**Matches:** children 3, 6, 9, 12, …

[↑ Back to Table of Contents](#table-of-contents)

### even-between

Select **even-positioned** children within an inclusive range.

```scss
@use '@sass-pire/family/src/even-between' as *;

.list {
  li {
    @include even-between(4, 10) {
      opacity: 0.8;
    }
  }
}
```

**Compiled CSS:**

```css
.list li:nth-child(even):nth-child(n+4):nth-child(-n+10) {
  opacity: 0.8;
}
```

**Matches:** even positions within 4–10 → 4, 6, 8, 10.

[↑ Back to Table of Contents](#table-of-contents)

### odd-between

Select **odd-positioned** children within an inclusive range.

```scss
@use '@sass-pire/family/src/odd-between' as *;

.list {
  li {
    @include odd-between(4, 10) {
      font-weight: 600;
    }
  }
}
```

**Compiled CSS:**

```css
.list li:nth-child(odd):nth-child(n+4):nth-child(-n+10) {
  font-weight: 600;
}
```

**Matches:** odd positions within 4–10 → 5, 7, 9.

[↑ Back to Table of Contents](#table-of-contents)

### Complete Example

A navigation bar combining several mixins:

```scss
@use '@sass-pire/family' as *;

.site-nav {
  display: flex;
  gap: 1rem;

  a {
    text-decoration: none;
    padding: 0.5rem 1rem;

    // First link: no left border
    @include first-of(1) {
      padding-left: 0;
    }

    // All links except the first: add a separator
    @include all-but(1) {
      border-left: 1px solid #ccc;
    }

    // Last link: accent color
    @include last-of(1) {
      color: #e53935;
    }

    // Every third link: slightly smaller
    @include every(3) {
      font-size: 0.875rem;
    }
  }
}

.ranked-list {
  li {
    padding: 0.25rem 0;

    // Top 3 items: medal styling
    @include first-of(3) {
      font-weight: 700;
    }

    // Items 4–10: standard weight
    @include between(4, 10) {
      font-weight: 400;
    }

    // After item 10: de-emphasized
    @include after-first(10) {
      opacity: 0.6;
    }
  }
}
```

[↑ Back to Table of Contents](#table-of-contents)

## 📦 Dependencies

This package relies on two other sass-pire packages:

| Package | Used for |
|---|---|
| [`@sass-pire/functions`](../functions/README.md) | `cut-unit()` — strips units from numeric arguments |
| [`@sass-pire/handlers`](../handlers/README.md) | `Error.throw()` — descriptive validation errors |

Both are listed in `package.json` `dependencies` and install automatically.

[↑ Back to Table of Contents](#table-of-contents)

## 🛠️ Development

### Running the Development Server

```bash
# From the package directory
yarn dev

# Or from the monorepo root
yarn dev:family
```

This watches `index.scss` and compiles to `dist/` for local verification.

### Available Scripts

- `yarn dev` - Run uncompressed and compressed watchers concurrently
- `yarn sass:watch` - Watch and compile SCSS to CSS (uncompressed)
- `yarn sass:comp` - Watch and compile SCSS to CSS (compressed)

### Testing

All 8 mixins have sass-true tests under `tests/`:

```bash
# From the monorepo root
yarn test:family
```

Tests run via the root Jest config ([jest.config.js](../../jest.config.js)); there is no `test` script in this package's own `package.json`.

[↑ Back to Table of Contents](#table-of-contents)

## 📁 Package Structure

```
@sass-pire/family/
├── src/
│   ├── _first-of.scss        # First N children
│   ├── _last-of.scss         # Last N children
│   ├── _between.scss         # Children in a range
│   ├── _after-first.scss     # Children after the first N
│   ├── _all-but.scss         # All children except one
│   ├── _every.scss           # Every Nth child
│   ├── _even-between.scss    # Even children in a range
│   └── _odd-between.scss     # Odd children in a range
├── tests/                     # sass-true tests (dev only, not published)
│   ├── _first-of.test.scss
│   ├── _last-of.test.scss
│   └── ...
├── dist/                      # Local compile output (dev only, not published)
├── index.scss                 # Main entry point (forwards all mixins)
├── package.json
└── README.md
```

Dev-only artifacts (`tests/`, `dist/`) are excluded from npm publish via [.npmignore](.npmignore).

[↑ Back to Table of Contents](#table-of-contents)

## 🔗 API Reference

### Mixins

#### `first-of($num)`

Selects the first *N* children.

**Parameters:**
- `$num` (Number, optional) - How many children from the start to match. Default: `1`

**Output:**
- `$num == 1` → `&:first-child`
- `$num > 1` → `&:nth-child(-n + N)`

**Example:**
```scss
@include first-of();    // First child only
@include first-of(3);   // First three children
```

#### `last-of($num)`

Selects the last *N* children.

**Parameters:**
- `$num` (Number, optional) - How many children from the end to match. Default: `1`

**Output:**
- `$num == 1` → `&:last-child`
- `$num > 1` → `&:nth-last-child(-n + N)`

**Example:**
```scss
@include last-of();    // Last child only
@include last-of(4);    // Last four children
```

#### `between($first-num, $last-num)`

Selects children in an inclusive position range.

**Parameters:**
- `$first-num` (Number, optional) - Start position. Default: `1`
- `$last-num` (Number, required) - End position

**Output:** `&:nth-child(n + A):nth-child(-n + B)`

**Example:**
```scss
@include between(4, 10);   // Positions 4 through 10
```

#### `after-first($num)`

Selects all children after the first *N* (exclusive).

**Parameters:**
- `$num` (Number, optional) - Number of children to skip from the start. Default: `1`

**Output:** `&:nth-child(n + N + 1)`

**Example:**
```scss
@include after-first(1);   // From position 2 onward
@include after-first(4); // From position 5 onward
```

#### `all-but($num)`

Selects every child except the one at position *N*.

**Parameters:**
- `$num` (Number, required) - Position to exclude

**Output:** `&:not(:nth-child(N))`

**Example:**
```scss
@include all-but(1);   // All except the first child
@include all-but(4);   // All except the fourth child
```

#### `every($num)`

Selects every *N*th child.

**Parameters:**
- `$num` (Number, optional) - Interval. Default: `1`

**Output:** `&:nth-child(Nn)`

**Example:**
```scss
@include every(2);   // Every 2nd child (even positions)
@include every(3);   // Every 3rd child
```

#### `even-between($first-num, $last-num)`

Selects even-positioned children within an inclusive range.

**Parameters:**
- `$first-num` (Number, optional) - Start position. Default: `1`
- `$last-num` (Number, required) - End position

**Output:** `&:nth-child(even):nth-child(n + A):nth-child(-n + B)`

**Example:**
```scss
@include even-between(4, 10);   // Even positions in 4–10
```

#### `odd-between($first-num, $last-num)`

Selects odd-positioned children within an inclusive range.

**Parameters:**
- `$first-num` (Number, optional) - Start position. Default: `1`
- `$last-num` (Number, required) - End position

**Output:** `&:nth-child(odd):nth-child(n + A):nth-child(-n + B)`

**Example:**
```scss
@include odd-between(4, 10);   // Odd positions in 4–10
```

[↑ Back to Table of Contents](#table-of-contents)

## 🤝 Contributing

This package is part of the [sass-pire](https://github.com/Black-Axis/sass-pire) monorepo. See [CONTRIBUTING.md](../../CONTRIBUTING.md) for contribution guidelines.

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
