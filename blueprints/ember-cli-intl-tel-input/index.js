/**
 * Created by sanketsharma on 2017/04/22.
 */

module.exports = {
  normalizeEntityName: function() {}, // no-op since we're just adding dependencies
  afterInstall: function() {
    return this.addPackagesToProject([{name:'intl-tel-input'}]); // is a promise
  }
};
