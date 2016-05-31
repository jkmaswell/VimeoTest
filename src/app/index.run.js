(function() {
  'use strict';

  angular
    .module('vimeoTest')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
