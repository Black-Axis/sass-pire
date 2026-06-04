/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */

const path = require('path');

const sassTrue = require('sass-true');

const sassFile = path.join(__dirname, 'test.scss');

const repoRoot = path.join(__dirname, '../../..');

sassTrue.runSass({ describe, it }, sassFile, {
    loadPaths: [path.join(repoRoot, 'node_modules')],
});
