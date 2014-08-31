(function() {
  var app = angular.module('myApp.worlds', []);

  app.controller('WorldController', ['$http', function($http) {
    var monster = this;
    monster.monsterList = {};

    $http.get('data/monsters.json').success(function(data) { monster.monsterList = data; });

  }]);

})();