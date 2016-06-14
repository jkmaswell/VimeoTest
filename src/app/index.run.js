(function() {
  'use strict';

  angular
    .module('vimeoTest')
    .run(runBlock);

  /** @ngInject */
  function runBlock($http, VimeoApiKey) {
    $http.defaults.headers.common.Authorization = 'Bearer ' + VimeoApiKey.vimeoAccessToken;
  }

})();
