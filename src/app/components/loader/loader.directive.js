(function() {
  'use strict';

  angular
    .module('vimeoTest')
    .directive('loader', loader);

  /** @ngInject */
  function loader() {
    return{
      restrict: 'E',
      scope: {},
      replace: true,
      templateUrl: 'app/components/loader/loader.html',
      link: function (scope, element) {

        scope.$on('loadingSt', function () {

          if(element.hasClass('loaded')){
            element.removeClass('loaded');
          }

          if(!element.hasClass('loading')){
            element.addClass('loading');
          }
        });

        scope.$on('loadedSt', function () {
          if(element.hasClass('loading')){
            element.removeClass('loading');
          }

          if(!element.hasClass('loaded')){
            element.addClass('loaded');
          }
        });

      }
    }
  }
})();
