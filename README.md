# SASS Pire

*Just more mixins and functions with SCSS for more productive projects.*

`sass-pire` is a lightweight and versatile library of SCSS mixins and functions designed to simplify your development workflow. Whether you're managing styles for a large-scale project or just need handy utilities, `sass-pire` helps you write cleaner, more efficient SCSS.

---

## Installation

### NPM
```bash
npm i -D sass-pire
```

### Yarn
```bash
yarn add sass-pire --dev
```

---

## Usage

After installing `sass-pire` using your favorite package manager, you can import it into any SCSS file.

### Recommended Approach
```scss
@use "sass-pire" as *;
```

### Configure Load Path
Make sure to add the `--load-path=node_modules` flag in your `sass` command in `package.json`:
```json
"scripts": {
  "watch:sass": "sass --load-path=node_modules --watch ./src/index.scss"
}
```

### Deprecation Notice
The `@import` statement will be deprecated in future versions of `Sass`. We strongly recommend using the `@use` statement instead.

---

## Features

- **`Reusable Mixins`**: Predefined mixins with `vendor prefixes` for cross-browser compatibility.
- **`Utility Functions`**: Handy functions to streamline calculations and style definitions.
- **`Media Queries`**: Ready-to-use breakpoints for responsive design.
- **Using [`reset-zone`](https://www.npmjs.com/package/reset-zone) for resetting styles.**
- **Add `utility classes` to your HTML elements.**

---

## Contribution

Contributions are welcome! Here’s how you can help:
1. Fork the repository and clone it to your local machine.
2. Create a new branch for your feature, bug fix, or issue resolution.
3. Submit a pull request describing your changes.

---

## Feature Requests

Have an idea for a new feature? Open an issue, label it as `Feature`, and describe your suggestion. We'd love to hear your ideas!

---

## License

[MIT](https://github.com/Black-Axis/sass-pire/blob/master/LICENSE.md)
