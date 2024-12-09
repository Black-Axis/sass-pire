const getBannerText = () => {
    return `@charset "UTF-8";

    // @description
    // * banner mixin.
    // * The \`banner\` mixin is used to add a banner to the top of the CSS file
    // * during compilation.
    // * This banner typically includes information such as library name,
    // * version, copyright, and license.

    // @access private

    // @version 1.0.0

    // @author Khaled Mohamed

    // @license MIT

    // @repository: https://github.com/Black-Axis/sass-pire

    // @namespace general

    // @module general/banner

    // @dependencies:
    // * - var.$lib-name (variable).
    // * - var.$current-version (variable).
    // * - var.$current-year (variable).
    // * - var.$organization-name (variable).
    // * - var.$author-name (variable).

    // @note:
    // * In your ~/base/reset.scss file, include the following line at the top:
    // * @use "abstract/variables" as var;
    // * @include banner();
    // * This will insert the library banner at the beginning of
    // * the compiled CSS file.

    // stylelint-disable comment-empty-line-before

    @use "../../abstract/settings" as Settings;

    @mixin banner() {
        /*
            ***** #{Settings.$lib-name} library #{Settings.$current-version}

            ***** Copyright © #{Settings.$current-year} for #{Settings.$lib-name} authors.

            ***** All copyrights reserved to #{Settings.$organization-name} Organization owners.

            ***** Author(s):
            ***** #{Settings.$author-names}.

            ***** Licensed under MIT.
        */
    }`;
};

const getSettingsText = (packageJsonObject) => {
    return `@charset "UTF-8";

        // @description
        // * This file contains all variables or lists which
        // * we use, as library developers, to compile them
        // * in some use cases in the whole library.

        // @access private

        // @version 2.0.0

        // @author Khaled Mohamed

        // @license MIT

        // @repository: https://github.com/Black-Axis/sass-pire

        // @namespace abstract

        // @module abstract/settings

        // stylelint-disable scss/dollar-variable-empty-line-before

        $organization-name: "${packageJsonObject.organizationName}";

        $lib-name: ${packageJsonObject.name};

        $brand-lib-name: ${packageJsonObject.aliasName};

        $author-names: ("${packageJsonObject.contributors.join(', ')}");

        $current-year: ${new Date().getFullYear()};

        $current-version: "v${packageJsonObject.version}";

    `;
};

const CONFIG = {
    BANNER_PATH: 'src/mixins/general/_banner.scss',
    SETTINGS_PATH: 'src/abstract/_settings.scss',
    MAIN_INDEX_PATH: 'src/sass-pire.scss'
};

module.exports = {
    getBannerText,
    getSettingsText,
    CONFIG,
};
