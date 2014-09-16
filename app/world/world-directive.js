(function() {
  var app = angular.module('myApp.worlds');

  app.directive('mcWorlds', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/world/world.html'
    };
  });

})();