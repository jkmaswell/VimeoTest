(function() {
  'use strict';

  angular
    .module('vimeoTest')
    .controller('VideoController', videoController);

  /** @ngInject */
  function videoController($state, $sce, categoriesLinks, videosDetail) {
    var vm = this;
    vm.links = categoriesLinks;
    vm.details = videosDetail;
    vm.details.iframe = $sce.trustAsHtml(vm.details.embed.html);
  }

})();
