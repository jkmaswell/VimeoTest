(function() {
  'use strict';

  angular
    .module('vimeoTest')
    .controller('MainController', mainController);

  /** @ngInject */
  function mainController(categoriesList) {
    var vm = this;
    vm.list = categoriesList;
    vm.showCategoryVideos = function(category) {
      console.log(category);
    };
  }

})();
