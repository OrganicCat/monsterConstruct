(function() {

  var app = angular.module('myApp.monsters');

  app.service('monsterService', function(){
    var monster = {};

    return {
      getMonster: function() {
        return monster;
      },
      setMonster: function(value) {
        monster = value;
      }};

  });

})();