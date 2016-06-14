(function() {
  'use strict';

  angular
    .module('vimeoTest')
    .directive('categories', categories);

  /** @ngInject */
  function categories() {

    return {
      restrict: 'E',
      templateUrl: 'app/components/categories/categories.html',
      replace: true,
      scope: {
        list: '='
      },
      link: function() {
      }
    }
  }
})();
