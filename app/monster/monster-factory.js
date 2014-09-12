(function() {
  var app = angular.module('myApp.monsters', []);

  app.factory('monsterFactory', ['$http', function($http) {
  	return $http.get('data/monsters.json');
  }]);

})();