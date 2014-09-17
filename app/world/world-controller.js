(function() {
  var app = angular.module('myApp.worlds');

  app.controller('WorldController', ['worldFactory', 'monsterFactory', function(worldFactory, monsterFactory) {
    var worldCtrl = this;
    
    worldCtrl.getWorldList = worldFactory.worldList;
    worldCtrl.exploreWorld = function(worldLevel) {
      var worldMobList = monsterFactory.monsterList.filter(function(element) {
        return element.level == worldLevel;
      });
      var randomMonster = worldMobList[Math.floor(Math.random() * worldMobList.length)];
      console.log(randomMonster);
    };
    // console.log(worldCtrl.getWorldList);
    // worldCtrl.getMonsterList = function() {};
    // worldCtrl.getWorldInfo = function(worldID) {};

  }]);

})();