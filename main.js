/*
 * By Lee Delarm
 * Monster Construct
 *
 * A game to demonstrate basic Angular.js principles. Growing from using
 * basic template structures like Knockout.js to directives, modules, and
 * controllers.
 */
(function() {
  var app = angular.module('monsterconstruct', ['myApp.monsters', 'myApp.combat', 'myApp.worlds']);

  app.directive('mcPlayer', function() {
    return {
      restrict: 'E',
      templateUrl: 'partial/player.html'
    };
  });

  app.directive('mcMonster', function() {
    return {
      restrict: 'E',
      templateUrl: 'partial/monster.html'
    };
  });

  app.directive('mcAdmin', function() {
    return {
      restrict: 'E',
      templateUrl: 'partial/admin-formula.html'
    };
  });


})();
