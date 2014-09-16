/*
 * By Lee Delarm
 * Monster Construct
 *
 * A game to demonstrate basic Angular.js principles. Growing from using
 * basic template structures like Knockout.js to directives, modules, and
 * controllers.
 */
(function() {
  var app = angular.module('monsterconstruct', ['myApp.monsters', 'myApp.combat', 'myApp.worlds', 'myApp.admin']);

  app.directive('mcPlayer', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/player/player.html'
    };
  });

  app.directive('mcMonster', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/monster/monster.html'
    };
  });

  app.directive('mcAdmin', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/admin/admin-formula.html'
    };
  });

})();
