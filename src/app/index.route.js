(function() {
  'use strict';

  angular
    .module('vimeoTest')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider

      //Parent state
      .state('home', {
        abstract: true,
        url: '',
        params: {},
        resolve: {
          categoriesList: function(categoriesFactory) {
            return categoriesFactory.allCategoriesList();
          },
          categoriesLinks: function (categoriesFactory, categoriesList) {
            return categoriesFactory.allCategoriesLinks(categoriesList);
          }
        }
      })

      //Category Videos List State
      .state('home.category', {
        url:'/category/{categoryName}',
        resolve: {
          videosList: function ($stateParams, categoriesFactory) {
            return categoriesFactory.allCategoriesVideos($stateParams.categoryName)
          }
        },
        onEnter: function($state, $stateParams, categoriesList){
          if (!$stateParams.categoryName && categoriesList.length > 0) {
            $state.go('home.category', {'categoryName': categoriesList[0].id, 'page': 1 });
          }
        },
        views: {
          'main@': {
            templateUrl: 'app/main/main.html',
            controller: 'MainController',
            controllerAs: 'mainCtrl'
          }
        }
      });

      //Category Videos Detail State
      // .state('home.detail', {
      //   url:'{videoId}',
      //   params: {
      //     videoId: ''
      //   },
      //   templateUrl: 'app/components/videos/videos.html',
      //   resolve: {
      //    videosDetail: function ($stateParams, categoriesFactory) {
      //      return categoriesFactory.allVideosDetail($stateParams.videoId);
      //    }
      //   }
      // });

    $urlRouterProvider.otherwise('/category/');
  }

})();
