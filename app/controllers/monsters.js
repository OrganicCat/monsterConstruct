(function() {
  var app = angular.module('myApp.monsters', []);

  app.controller('MonsterController', ['$http', function($http) {
    var monster = this;
    monster.monsterList = {};

    $http.get('data/monsters.json').success(function(data) { monster.monsterList = data; });

  }]);

})();