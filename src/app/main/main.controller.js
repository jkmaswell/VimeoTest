(function() {
  'use strict';

  angular
    .module('vimeoTest')
    .controller('MainController', mainController);

  /** @ngInject */
  function mainController($state, $stateParams, categoriesLinks, videosList, VimeoApiKey) {
    var vm = this;
    vm.links = categoriesLinks;
    vm.videos = videosList.data;

    //pagination
    vm.total = videosList.total;
    vm.page = $stateParams.page;
    vm.maxSize = VimeoApiKey.max_size;
    vm.perPage = VimeoApiKey.per_page;
    vm.changePage = function () {
      $state.go('.', { page: vm.page});
    };

    //Go to video detail
    vm.goToVideoDetail = function (Id) {
      $state.go('home.detail', {videoId: Id})
    }
  }

})();
