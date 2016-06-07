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
      scope: {},
      controller: sidebarController,
      controllerAs: 'vm',
      bindToController: true
    }

    /** @ngInject */
    function sidebarController(moment) {
      var vm = this;

      // "vm.creationDate" is available by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }

})();
