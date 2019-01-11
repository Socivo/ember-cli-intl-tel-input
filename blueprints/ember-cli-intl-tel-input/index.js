/* eslint-env node */
module.exports = {
  description: 'Add intl-tel-input to package.json',

  // locals(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall() {
    return this.addPackagesToProject([
      { name: 'intl-tel-input', target: '^14.0.2' }
    ]);
  }
};
