(function() {
  'use strict';

  angular
    .module('vimeoTest')
    .factory('videosFactory', videosFactory);

  /** @ngInject */
  function videosFactory($http, VimeoApiKey) {

    return {

      categoryVideos: function (category) {
        return $http.get(VimeoApiKey.vimeoBaseUrl + 'categories/' + category + '/videos')
          .then (
            function success(response) {return response.data;},
            function error(error) {return error;}
          );
      }

    }
  }

})();
