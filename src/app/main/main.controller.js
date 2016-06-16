(function() {
  'use strict';

  angular
    .module('vimeoTest')
    .controller('MainController', mainController);

  /** @ngInject */
  function mainController($state, categoriesLinks, videosList, VimeoApiKey) {
    var vm = this;
    vm.links = categoriesLinks;
    vm.videos = videosList;

    // vm.videos = function(videosList) {
    //   $state.go('home.category', {categoryName: videosList.id});
    // };
  }

})();
