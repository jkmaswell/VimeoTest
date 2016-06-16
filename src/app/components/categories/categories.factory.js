(function() {
  'use strict';

  angular
    .module('vimeoTest')
    .factory('categoriesFactory', categoriesFactory);

  /** @ngInject */
  function categoriesFactory($http, VimeoApiKey) {

    //Object That Has The Categories Id and Links
    return {

      //List of all categories
      allCategoriesList:
      function () {
        return $http.get(VimeoApiKey.vimeoBaseUrl + 'categories').then (
          function success(response) {
            response.data.data.forEach(function(element) {
              element.id = element.uri.split('/').pop();
            });
            return response.data.data;
          },
          function error(error) {return error;}
        );
      },

      //Gets all info for links in category
      allCategoriesLinks:
      function(categories) {
        var categoryLinks;
        categoryLinks = categories.map(function(category){
          var categoryLink = {
            name: category.name,
            state: 'home.category',
            params: {
              categoryName: category.id
            }
          };
          return categoryLink;
        });
        return categoryLinks;
      },

      //List of all videos of a category
      allCategoriesVideos:
      function(category){
        return $http.get(VimeoApiKey.vimeoBaseUrl + 'categories/' + category + '/videos?page=1&per_page=12').then (
          function success(response) {
            response.data.data.forEach(function(element) {
              element.id = element.uri.split('/').pop();
            });
            return response.data.data;
          },
          function error(error) {return error;}
        );
      }
    };
  }

})();
