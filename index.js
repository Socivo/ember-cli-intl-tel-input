/* eslint-env node */
'use strict';
var path = require('path');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-cli-intl-tel-input',
  included: function(app) {
    this._super.included(app);
    var config = app.options.intlTelInput;
    if (config && true === config.includeUtilsScript) {
      app.import('vendor/utils.js');
    }
    app.import('vendor/intlTelInput.js');
    app.import('vendor/intlTelInput.css');
    
  },
  treeForVendor(tree) {
    let intlTelInputJSPath = path.join(this.app.project.root, 'node_modules', 'intl-tel-input', 'build', 'js');
    let vendorTree = new Funnel(intlTelInputJSPath, {
      files: ['intlTelInput.js', 'utils.js']
    });
    return vendorTree;
  },
  treeForPublic(tree) {
    let intlTelInputImagePath = path.join(this.app.project.root, 'node_modules', 'intl-tel-input', 'build', 'img');
    let publicTree = new Funnel(intlTelInputImagePath, {
      include: ['*.png'],
      destDir: 'img'
    });
    return publicTree;
  },
  treeForStyles(tree) {
    let intlTelInputStylePath = path.join(this.app.project.root, 'node_modules', 'intl-tel-input', 'build', 'css');
    let styleTree = new Funnel(intlTelInputStylePath, {
      include: ['*.css'],
      destDir: 'vendor'
      
    });
    return styleTree;
  },
  isDevelopingAddon() {
    return false;
  }

};
