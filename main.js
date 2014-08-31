/*
 * By Lee Delarm
 * Monster Construct
 *
 * A game to demonstrate basic Angular.js principles. Growing from using
 * basic template structures like Knockout.js to directives, modules, and
 * controllers.
 */
(function() {
  var app = angular.module('monsterconstruct', ['myApp.controllers']);

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

})();
