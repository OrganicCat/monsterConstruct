(function() {
  var app = angular.module('myApp.player', []);

  app.factory('playerFactory', ['$http', function($http) {
    // return $http.get('data/monsters.json');
    
    // Use this for now as a test player
    var player = {
      maxhp: 10,
      hp: 10,
      name: "Hero",
      stats: {
        strength: 2
      },
      level: 1,
      weapon: {
        name: "Rusty Dagger",
        damage: 1
      },
      exp: 0,
      gold: 0,
      getDamage: function() {
        return this.stats.strength + this.weapon.damage;
      }
    };

    return player;
  }]);

})();