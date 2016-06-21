(function() {
  'use strict';

  angular
    .module('vimeoTest')
    .directive('search', search);

  /** @ngInject */
  function search($rootScope) {

    return {
      restrict: 'E',
      templateUrl: 'app/components/search/search.html',
      replace: true,
      scope: {},
      link: function(scope,element) {

        scope.searchEvent = function() {
          var queryElement = element[0].querySelector('input[type="search"]');
          $rootScope.$broadcast('searchQuery', queryElement.value);
        }

        scope.searchEnter = function (keyPress) {
          if (keyPress.which === 13) {
            scope.searchEvent();
          }
        }

      }
    }
  }
})();
