(function() {
  'use strict';

  angular
    .module('vimeoTest')
    .factory('videosFactory', videosFactory);

  /** @ngInject */
  function videosFactory($http, VimeoApiKey) {

    return {

      //Details of video
      videoDetails:
        function (videoId) {
          return $http.get(VimeoApiKey.vimeoBaseUrl + 'videos/' + videoId).then (
            function success(response) {return response.data;},
            function error(error) {return error;}
          );
        }

    };
  }

})();
