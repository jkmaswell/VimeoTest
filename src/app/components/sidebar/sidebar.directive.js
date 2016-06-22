(function() {
  'use strict';

  angular
    .module('vimeoTest')
    .directive('sideBar', sideBar);

  /** @ngInject */
  function sideBar($state) {

    return {
      restrict: 'E',
      templateUrl: 'app/components/sidebar/sidebar.html',
      replace: true,
      scope: {
        links: '='
      },
      link: function(scope) {

        var menuBtn = angular.element('.menu'),
            closeBtn = angular.element('.close-btn'),
            menuContent = angular.element('.sidebar'),
            logoContent = angular.element('.logo');

        if (angular.element(window).width() <= 1024) {
          menuContent.removeClass('active');
          menuContent.addClass('deactive');
        }

        angular.element(window).on("resize", function () {
          if (angular.element(window).width() > 1024) {
            menuContent.removeClass('deactive');
            menuContent.addClass('active');
          } else {
            menuContent.removeClass('active');
            menuContent.addClass('deactive');
          }
        });

        menuBtn.on("click", function () {
          menuContent.removeClass('deactive');
          menuContent.addClass('active');
        });

        closeBtn.on("click", function () {
          menuContent.removeClass('active');
          menuContent.addClass('deactive');
        });

        logoContent.on("click", function () {
          $state.go('home.category', {'categoryName': scope.links[0].params.categoryName, 'page': 1 });
        });
      }
    }
  }
})();
