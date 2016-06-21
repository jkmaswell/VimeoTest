(function() {
  'use strict';

  angular
    .module('vimeoTest')
    .factory('categoriesFactory', categoriesFactory);

  /** @ngInject */
  function categoriesFactory($http, VimeoApiKey) {

    return {

      //Get list of all categories
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
              categoryName: category.id,
              page: '1'
            }
          };
          return categoryLink;
        });
        return categoryLinks;
      },

      //Get list of videos of a category
      allCategoriesVideos:
      function(category, page, perPage){
        return $http.get(VimeoApiKey.vimeoBaseUrl + 'categories/' + category + '/videos' + '?page=' + page + '&per_page=' + perPage).then (
          function success(response) {
            response.data.data.forEach(function(element) {
              element.id = element.uri.split('/').pop();
            });
            return response.data;
          },
          function error(error) {return error;}
        );
      },

      //Get list of videos by search
      allSearchVideos:
        function(page, perPage, query){
          return $http.get(VimeoApiKey.vimeoBaseUrl + 'videos/' + '?page=' + page + '&per_page=' + perPage + '&query=' + query).then (
            function success(response) {
              response.data.data.forEach(function(element) {
                element.id = element.uri.split('/').pop();
              });
              return response.data;
            },
            function error(error) {return error;}
          );
        }
    };
  }

})();
