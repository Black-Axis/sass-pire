# **`abstract` directory documentation**

This folder contains the core configuration and variables for the `sass-pire` library. It includes configurations, global variables, and settings that are essential for the functioning of the library.

---

## **1. `_config.scss`**

This file provides customizable configurations that allow users to override the library’s default settings.

**`Key Variables`**

- **`$base-font-size`**: The base font size for the entire library (`16px` by default).
- **`$test-environment`**: A flag (`false` by default) used to control test modules. Set to `true` for testing purposes and `false` when working on the main project.

**`Important Notes`**

- Variables in this file are meant to be overridden easily by users to match their specific project needs.

---

## **2. `_global-variables.scss`**

This file contains all the global variables that control key elements like data types, units, grid layouts, and CSS properties. Users are allowed to override these variables, but caution is advised when modifying certain values.

**`Key Variables`**

- **`$all-units`**: A list of all common units used across the library (e.g. `px`, `em`, `rem`, `%`, etc.).
- **`$data-types`**: Data types used in the library, such as `number`, `string`, `bool`, `list`, and `map`.
- **`Grid Properties`**: Variables like `$column-gap-props`, `$grid-column-props`, and `$grid-template-columns-props` help in managing CSS grid layouts and ensuring compatibility with legacy browsers like Internet Explorer.
- **`Alignment and Justification Properties`**: Variables such as `$justify-content-props` and `$align-items-props` provide cross-browser support for flexbox and grid alignment.

**`Important Notes`**

- While this file is public and can be overridden, it is not recommended to modify core properties unless necessary for specific customization.

---

## **3. `_index.scss`**

This file serves as the entry point that forwards all other modules in the `abstract` folder. It ensures that all configurations, `global variables`, and `settings` are accessible throughout the library.

**`Forwards the following modules`**

- **`_config.scss`**: Forwarded to provide users access to configurations.
- **`_global-variables.scss`**: Forwarded to make global variables available for use.
- **`_settings.scss`**: Forwarded to provide access to internal settings.

---

## **4. `_settings.scss`**

This file defines internal settings specific to the `library's developers`. These settings should not be modified by users as they control internal features like naming conventions and branding.

**`Key Variables`**

- **`$organization-name`**: The name of the organization (`"Black Axis"` by default).
- **`$lib-name`**: The official name of the library (`"sass-pire"`).
- **`$brand-lib-name`**: A short form for the library (`"sp"`).
- **`$author-names`**: Contains the name of the library's author(s).
- **`$current-year`**: The current year.
- **`$current-version`**: The version of the library.

**`Important Notes`**

- This file contains private settings, and they are not meant to be exposed for public customization.

---

## **5. `Conclusion`**

The `abstract` folder is the foundation of the `sass-pire` library. It provides `configuration`, `settings`, and `global variables` that are customizable and extendable across projects. Most of the files are public and designed to be overridden, while certain `settings` are reserved for internal use. Users are encouraged to review the variables and settings carefully before making modifications to ensure consistency and compatibility.

For more details, see our sass-pire on [`GitHub`](https://github.com/Black-Axis/sass-pire).
