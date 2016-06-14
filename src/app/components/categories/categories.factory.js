(function() {
  'use strict';

  angular
    .module('vimeoTest')
    .factory('categoriesFactory', categoriesFactory);

  /** @ngInject */
  function categoriesFactory($http, VimeoApiKey) {

    return {

      //List of all categories
      allCategoriesList: function (){
        return $http.get(VimeoApiKey.vimeoBaseUrl + 'categories')
          .then (
          function success(response) {
            response.data.data.forEach(function(element) {
              element.id = element.uri.split('/').pop();
            });
            return response.data.data;
          },
          function error(error) {return error;}
        );
      },

      //List of all videos of a category
      allVideosList: function (category) {
        return $http.get(VimeoApiKey.vimeoBaseUrl + 'categories/' + category + '/videos?page=1&per_page=12')
          .then (
          function success(response) {return response.data.data;},
          function error(error) {return error;}
        );
      }

    }
  }

})();
