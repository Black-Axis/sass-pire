const fs = require('fs');
const path = require('path');
const { version, contributors, name, aliasName, organizationName } = require('../package.json');
const { getBannerText, getSettingsText, CONFIG } = require('./constants');

const BuildLibrary = (function () {
    "use strict";

    class Base {
        /**
         * * The constructor for all classes in this module.
         *
         * @protected
         * @param {string} filePath - The path where the file will be written.
         * @throws {TypeError} If the class is not a subclass of Base.
         */
        constructor(filePath) {
            if (new.target === Base) {
                throw new TypeError("Cannot construct Base instances directly.");
            }

            this.filePath = filePath;
        }

        /**
         * * Writes the given content to the file at the path specified in the constructor.
         * * If the directory does not exist, it will be created.
         * * If there is an error writing to the file, it will be logged to the console and re-thrown.
         *
         * @param {string} content - The content to write to the file
         * @throws {Error} If there is an error writing to the file
         */
        write(content) {
            try {
                const dir = path.dirname(this.filePath);

                if (!fs.existsSync(dir)) {
                    fs.mkdirSync(dir, { recursive: true });
                }

                fs.writeFileSync(this.filePath, content);
            } catch (error) {
                console.error(`Error writing to file ${this.filePath}: ${error.message}`);
                throw error;
            }
        }

        /**
         * * Removes the indentation from a given string.
         * @param {string} content - The content to remove indentation from.
         * @returns {string} The content with indentation removed.
         */
        static removeIndentation(content) {
            return content.replace(/^[ \t]+/gm, '').trim();
        }
    }

    class Banner extends Base {
        /**
         * * The constructor for the Banner class.
         *
         * @param {string} filePath - The path where the file will be written.
         */
        constructor(filePath) {
            super(filePath);
        }

        /**
         * * Generates the banner mixin.
         * * The `banner` mixin is used to add a banner to the top of the SCSS file
         * * during compilation.
         * * This banner typically includes information such as library name,
         * * version, copyright, and license.
         *
         * @return {string} The generated banner.
         */
        #generate() {
            const content = getBannerText();

            return Base.removeIndentation(content);
        }

        /**
         * * Writes the generated banner to the file.
         */
        write() {
            super.write(this.#generate());
        }
    }

    class Settings extends Base {
        /**
         * * The constructor for the Settings class.
         *
         * @param {string} filePath - The path where the file will be written.
         */
        constructor(filePath) {
            super(filePath);
        }

        /**
         * * Generates the content of the settings file.
         * * @description
         * * This method generates the content of the settings file.
         * * It returns a string of SCSS code that contains all variables or lists
         * * which are used, as library developers, to compile them in some use cases
         * * in the whole library.
         *
         * @access private
         *
         * @returns {string} The content of the settings file.
         */
        #generate() {
            const content = getSettingsText({
                version,
                contributors,
                name,
                aliasName,
                organizationName
            });

            return Base.removeIndentation(content);
        }

        /**
         * * Writes the generated settings to the file.
         */
        write() {
            super.write(this.#generate());
        }
    }

    class SettingsBuilder {
        /**
         * The constructor for the SettingsBuilder class.
         *
         * @description
         * The SettingsBuilder class is a builder class for the Settings class.
         * It is used to generate the settings file for the library.
         *
         * @access public
         *
         * @see {@link Settings}
         */
        constructor() {
            this.settingsBuilderObject = new Settings(CONFIG.SETTINGS_PATH);
        }

        /**
         * Sets the version for the library.
         *
         * @param {string} version - The version to set for the library.
         * @returns {SettingsBuilder} The SettingsBuilder instance for method chaining.
         */
        setVersion(version) {
            this.version = version;
            return this;
        }

        /**
         * Sets the contributors for the library.
         *
         * @param {any} contributors - The contributors to set for the library.
         * @returns {SettingsBuilder} The SettingsBuilder instance for method chaining.
         */
        setContributors(contributors) {
            this.contributors = contributors;
            return this;
        }

        /**
         * Sets the name for the library.
         *
         * @param {string} name - The name to set for the library.
         * @returns {SettingsBuilder} The SettingsBuilder instance for method chaining.
         */
        setName(name) {
            if (typeof name !== 'string') {
                throw new Error('The name must be a string.');
            }

            this.name = name;
            return this;
        }

        /**
         * Sets the organization name for the library.
         *
         * @param {string} organizationName - The organization name to set for the library.
         * @returns {SettingsBuilder} The SettingsBuilder instance for method chaining.
         */
        setOrganizationName(organizationName) {
            if (typeof organizationName !== 'string') {
                throw new Error('The organization name must be a string.');
            }

            this.organizationName = organizationName;
            return this;
        }

        /**
         * Builds the SettingsBuilder instance into a Settings instance.
         *
         * @returns {Settings} The Settings instance built from the SettingsBuilder.
         */
        build() {
            return this.settingsBuilderObject;
        }
    }

    /**
     * * This class for the main index file.
     *
     * @description
     * * The MainIndex class is a class for the main index file.
     * * It is used to generate the main `sass-pire.scss` file for the library.
     *
     * @access public
     */
    class MainIndex {
        /**
         * * Updates the version in the specified file.
         *
         * @param {string} filePath - The path to the file where the version should be updated.
         * @param {string} newVersion - The new version number to set in the file.
         * @throws {Error} If there is an error reading or writing the file.
         */
        static updateVersion(filePath, newVersion) {
            try {
                const fullPath = path.resolve(process.cwd(), filePath);

                let content = fs.readFileSync(fullPath, 'utf8');

                content = content.replace(
                    /\/\/ @version .+/,
                    `// @version ${newVersion}`
                );

                fs.writeFileSync(filePath, content, 'utf8');

                console.log(`Successfully updated library version (sass-pire.scss) to ${newVersion}`);
            } catch (error) {
                throw error;
            }
        }
    }

    return {
        Banner,
        SettingsBuilder,
        MainIndex
    };
})();

BuildLibrary.MainIndex.updateVersion(CONFIG.MAIN_INDEX_PATH, version);

const banner = new BuildLibrary.Banner(CONFIG.BANNER_PATH);

const settings = new BuildLibrary.SettingsBuilder()
    .setName(name)
    .setVersion(version)
    .setContributors(contributors)
    .setOrganizationName(organizationName)
    .build();

banner.write();
settings.write();
