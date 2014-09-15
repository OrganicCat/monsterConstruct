(function() {
  var app = angular.module('myApp.monsters', ['ngResource']);

  app.factory('monsterService', ['$http', '$resource', function($http, $resource) {
  	return {
  		monsterList: $resource('data/monsters.json').query()
  	};

  }]);

})();