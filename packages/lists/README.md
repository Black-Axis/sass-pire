# @sass-pire/lists

List utilities and configuration for the sass-pire design system.

## Table of Contents

- [📦 Installation](#-installation)
- [🚀 Usage](#-usage)
  - [SCSS Import](#scss-import)
  - [Using Flatten Function](#using-flatten-function)
  - [Using Merge Function](#using-merge-function)
  - [Using Get First Function](#using-get-first-function)
  - [Using Get Last Function](#using-get-last-function)
  - [Using Middle Function](#using-middle-function)
  - [Using Reverse Function](#using-reverse-function)
  - [Using Reverse Flat Function](#using-reverse-flat-function)
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
yarn workspace your-package-name add @sass-pire/lists
```

Or add it manually to your package's `package.json`:

```json
{
  "dependencies": {
    "@sass-pire/lists": "workspace:*"
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
yarn add @sass-pire/lists

# Using npm
npm install @sass-pire/lists

# Using pnpm
pnpm add @sass-pire/lists
```

[↑ Back to Top](#table-of-contents)

## 🚀 Usage

### SCSS Import

Import the package in your SCSS files to access list utilities:

```scss
// Import all list utilities
@use '@sass-pire/lists' as lists;

// Or import specific modules
@use '@sass-pire/lists/src/flatten' as *;
@use '@sass-pire/lists/src/merge' as *;
@use '@sass-pire/lists/src/first' as *;
@use '@sass-pire/lists/src/last' as *;
@use '@sass-pire/lists/src/middle' as *;
@use '@sass-pire/lists/src/reverse' as *;
@use '@sass-pire/lists/src/reverse-flat' as *;
```

[↑ Back to Top](#table-of-contents)

### Using Flatten Function

The `flatten` function takes a potentially nested list and returns a single-level list containing all the elements.

**Signature:**

```scss
flatten($list)
```

**Parameters:**
- `$list` (List): The list to flatten.

**Returns:**
- (List): A new flattened list.

**Examples:**

```scss
@use '@sass-pire/lists/src/flatten' as *;

.example {
  // Simple nested list
  content: flatten((1, (2, 3)));
  // Result: 1, 2, 3

  // Deeply nested list
  content: flatten(((1), (2, 3), ((4), 5)));
  // Result: 1, 2, 3, 4, 5

  // Mixed complexity
  content: flatten((1, (2, 3), (4)));
  // Result: 1, 2, 3, 4

  // Handling single values/nulls
  content: flatten((1, null));
  // Result: 1
}
```

[↑ Back to Table of Contents](#table-of-contents)

### Using Merge Function

The `merge` function takes multiple lists (which can be nested) and combines them into a single, flat list. It internally uses `flatten`.

**Signature:**

```scss
merge($lists...)
```

**Parameters:**
- `$lists...` (ArgList): One or more lists to merge.

**Returns:**
- (List): A new merged and flattened list.
- (Null): Returns `null` if the input is empty or results in an empty list.

**Examples:**

```scss
@use '@sass-pire/lists/src/merge' as *;

.example {
  // Merging multiple lists
  content: merge((2, 4, 5), (12, 5, 6));
  // Result: 2, 4, 5, 12, 5, 6

  // Merging nested lists
  content: merge((2, (12, 5)), (22, 38));
  // Result: 2, 12, 5, 22, 38

  // Complex merge
  content: merge((2, 4, 5, (12, 5, 6)), (22, 38), (44, ((323))));
  // Result: 2, 4, 5, 12, 5, 6, 22, 38, 44, 323

  // Single list input
  content: merge((4));
  // Result: 4
}
```

[↑ Back to Table of Contents](#table-of-contents)

### Using Get First Function

The `get-first` function retrieves the first element from the given list. It flattens the list before retrieving the element.

**Signature:**

```scss
get-first($list)
```

**Parameters:**
- `$list` (List): The list to retrieve the first element from.

**Returns:**
- (Any): The first element of the list, or `null` if empty.

**Examples:**

```scss
@use '@sass-pire/lists/src/first' as *;

.example {
  content: get-first((12, 43, 4));
  // Result: 12

  content: get-first(((((65)), 3), 5));
  // Result: 65
}
```

[↑ Back to Table of Contents](#table-of-contents)

### Using Get Last Function

The `get-last` function retrieves the last element from the given list. It flattens the list before retrieving the element.

**Signature:**

```scss
get-last($list)
```

**Parameters:**
- `$list` (List): The list to retrieve the last element from.

**Returns:**
- (Any): The last element of the list, or `null` if empty.

**Examples:**

```scss
@use '@sass-pire/lists/src/last' as *;

.example {
  content: get-last((12, 43, 4));
  // Result: 4

  content: get-last(((22, 3), 5));
  // Result: 5
}
```

[↑ Back to Table of Contents](#table-of-contents)

### Using Middle Function

The `middle` function retrieves the middle element from a list. It flattens the list first.

**Signature:**

```scss
middle($list)
```

**Parameters:**
- `$list` (List): The list to retrieve the middle element from.

**Returns:**
- (Any): The middle element of the list.

**Examples:**

```scss
@use '@sass-pire/lists/src/middle' as *;

.example {
  // List: 1, 2, 3, 4, 5 (Length 5, Odd)
  content: middle((1, (2, 3), 4, 5));
  // Result: 3

  // List: 1, 2, 3, 4 (Length 4, Even)
  content: middle((1, 2, 3, 4));
  // Result: 2
}
```

[↑ Back to Table of Contents](#table-of-contents)

### Using Reverse Function

The `reverse` function retrieves the reversed list from the given one. It is a **shallow** reverse (does not flatten nested lists but keeps them as items).

**Signature:**

```scss
reverse($list)
```

**Parameters:**
- `$list` (List): The list to reverse.

**Returns:**
- (List): A new reversed list.

**Examples:**

```scss
@use '@sass-pire/lists/src/reverse' as *;

.example {
  content: reverse(((12, 43, 4), (33, 555, 6)));
  // Result: (33, 555, 6), (12, 43, 4)
}
```

[↑ Back to Table of Contents](#table-of-contents)

### Using Reverse Flat Function

The `reverse-flat` function flattens the list first and then reverses it.

**Signature:**

```scss
reverse-flat($list)
```

**Parameters:**
- `$list` (List): The list to flatten and reverse.

**Returns:**
- (List): A new flattened and reversed list.

**Examples:**

```scss
@use '@sass-pire/lists/src/reverse-flat' as *;

.example {
  content: reverse-flat(((12, 43, 4), (33, 555, 6)));
  // Result: 6, 555, 33, 4, 43, 12
}
```

[↑ Back to Table of Contents](#table-of-contents)

## 🛠️ Development

### Running the Development Server

```bash
# From the package directory
yarn dev

# Or from the monorepo root
yarn dev:lists
```

This will watch for changes and compile SCSS files automatically.

### Available Scripts

- `yarn dev` - Run sass compilation in watch mode.
- `yarn sass:watch` - Watch and compile SCSS to CSS.

[↑ Back to Table of Contents](#table-of-contents)

## 📁 Package Structure

```
@sass-pire/lists/
├── src/
│   ├── flatten/
│   │   └── _index.scss       # Flatten function source
│   └── merge/
│       └── _index.scss       # Merge function source
│   ├── first/
│   │   └── _index.scss       # Get-first function source
│   ├── last/
│   │   └── _index.scss       # Get-last function source
│   ├── middle/
│   │   └── _index.scss       # Middle function source
│   ├── reverse/
│   │   └── _index.scss       # Reverse function source
│   └── reverse-flat/
│       └── _index.scss       # Reverse-flat function source
├── dist/
│   ├── index.css             # Compiled CSS
│   ├── index.min.css         # Minified CSS
│   └── index.compiled.css    # Watch output
├── index.scss                # Main entry point (forwards src modules)
├── package.json
└── README.md
```

[↑ Back to Table of Contents](#table-of-contents)

## 🔗 API Reference

For detailed API documentation, please refer to the comments in the source code files.

[↑ Back to Table of Contents](#table-of-contents)

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](../../CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

[↑ Back to Table of Contents](#table-of-contents)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.

[↑ Back to Table of Contents](#table-of-contents)

## 🐛 Issues

If you encounter any issues or have suggestions, please [report them here](https://github.com/Black-Axis/sass-pire/issues).

[↑ Back to Table of Contents](#table-of-contents)

## 📧 Contact

For any questions or inquiries, please contact us at [black_axis@outlook.com](mailto:black_axis@outlook.com).

[↑ Back to Table of Contents](#table-of-contents)
