(function() {
  'use strict';

  angular
    .module('vimeoTest')
    .directive('sideBar', sideBar);

  /** @ngInject */
  function sideBar() {

    return {
      restrict: 'E',
      templateUrl: 'app/components/sidebar/sidebar.html',
      replace: true,
      scope: {
        links: '='
      },
      link: function() {
      }
    }
  }
})();
