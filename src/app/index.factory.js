(function() {
  'use strict';

  angular
    .module('vimeoTest')
    .factory('vimeoApi', vimeoFactory);

  /** @ngInject */
  function vimeoFactory() {
    var generateToken = $http({method: 'POST', url: 'https://api.vimeo.com/oauth/authorize/client'});
    return {
    };
  }

})();
