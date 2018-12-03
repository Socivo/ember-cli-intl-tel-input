'use strict';

const path = require('path');
const fastbootTransform = require('fastboot-transform');
const Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-cli-intl-tel-input',

  included: function(app) {
    this._super.included.apply(this, arguments);

    let config = app.options.intlTelInput;
    let assetPath = path.join('node_modules', 'intl-tel-input', 'build');
    let importOptions = {
      using: [{
        transformation: 'fastbootTransform'
      }]
    };

    if (config && true === config.includeUtilsScript) {
      app.import(path.join(assetPath, 'js', 'utils.js'), importOptions);
    }

    app.import(path.join(assetPath, 'js', 'intlTelInput.js'), importOptions);
    app.import(path.join(assetPath, 'css', 'intlTelInput.css'));
  },

  treeForPublic() {
    let intlTelInputImagePath = path.join(this.app.project.root, 'node_modules', 'intl-tel-input', 'build', 'img');
    let publicTree = new Funnel(intlTelInputImagePath, {
      include: ['*.png'],
      destDir: 'img'
    });
    return publicTree;
  },

  importTransforms: function () {
    return {
      fastbootTransform: fastbootTransform
    }
  },
};
