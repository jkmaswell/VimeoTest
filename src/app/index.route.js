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
        params: {
          page: '1'
        },
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
        url:'/category/{categoryName}?page&per_page',
        params: {
          categoryName: '',
          per_page: '12'
        },
        resolve: {
          videosList: function ($stateParams, categoriesFactory) {
            return categoriesFactory.allCategoriesVideos($stateParams.categoryName, $stateParams.page, $stateParams.per_page)
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
      })

      //Category Videos Detail State
      .state('home.detail', {
        url:'/detail/{videoId}',
        resolve: {
          videosDetail: function ($stateParams, videosFactory) {
            return videosFactory.videoDetails($stateParams.videoId);
          }
        },
        onEnter: function($state, $stateParams, categoriesList){
          if (!$stateParams.videoId && categoriesList.length > 0) {
            $state.go('home.category', {'categoryName': categoriesList[0].id, 'page': 1 });
          }
        },
        views: {
          'main@': {
            templateUrl: 'app/detail/detail.html',
            controller: 'VideoController',
            controllerAs: 'videoCtrl'
          }
        }
      })

      //Search Videos List State
      .state('home.search', {
        url:'/search?page&per_page&query',
        params: {
          per_page: '12',
          query: ''
        },
        resolve: {
          videosList: function ($stateParams, categoriesFactory) {
            return categoriesFactory.allSearchVideos($stateParams.page, $stateParams.per_page, $stateParams.query)
          }
        },
        onEnter: function($state, $stateParams, categoriesList){
          if (!$stateParams.query && categoriesList.length > 0) {
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

    $urlRouterProvider.otherwise('/category/');
  }

})();
