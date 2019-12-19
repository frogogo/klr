/**
  Your global data folder is controlled by the dir.data configuration option.
  All *.json and module.exports values from *.js files in this directory will
  be added into a global data object available to all templates.

  This file can be accessed using: {{ site.title }}
*/

var pkgJSON = require('../../package.json');

module.exports = {
  title: "KLR",
  description: "Официальный сайт компании KLR",
  meta_data: {
    theme_color: '#fff', // used in Chrome, Firefox OS and Opera
  },
  ENV: process.env.ELEVENTY_ENV,
  version: pkgJSON.version
};
