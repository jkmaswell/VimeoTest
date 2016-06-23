(function() {
  'use strict';

  angular
    .module('vimeoTest')
    .run(runBlock);

  /** @ngInject */
  function runBlock($http, $rootScope, $state, VimeoApiKey) {
    $http.defaults.headers.common.Authorization = 'Bearer ' + VimeoApiKey.vimeoAccessToken;

    var searchEvent = $rootScope.$on('searchQuery', function (event, data) {
      $state.go('home.search', { query: data, page: 1 });
    });

    var stateChange = $rootScope.$on('$stateChangeStart', function (event, toState) {
      if (toState.resolve) {
        $rootScope.$broadcast('loadingSt', '');
      }
    });

    var stateSuccess = $rootScope.$on('$stateChangeSuccess', function (event, toState) {
      if (toState.resolve) {
        $rootScope.$broadcast('loadedSt', '');
      }
    });

    $rootScope.$on('$destroy', function () {
      searchEvent();
      stateChange();
      stateSuccess();
    });

  }

})();
