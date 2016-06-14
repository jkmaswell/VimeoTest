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
        url: '/category/',
        templateUrl: 'app/main/main.html',
        resolve: {
          categoriesList: function(categoriesFactory) {
            return categoriesFactory.allCategoriesList();
          }
        },
        controller: 'MainController',
        controllerAs: 'mainCtrl'
      })

      //Category Videos List State
      .state('home.category', {
        url:'/category/{categoryName}',
        params: {
          categoryName: ''
        },
        templateUrl: 'app/components/categories/categories.html',
        resolve: {
          videosList: function ($stateParams, categoriesFactory) {
            return categoriesFactory.allVideosList($stateParams.categoryName);
          }
        },
        controller: 'MainController',
        controllerAs: 'mainCtrl'
      });

    $urlRouterProvider.otherwise('/category/');
  }

})();
