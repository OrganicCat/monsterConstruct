(function() {
  var app = angular.module('myApp.combat', ['myApp.player']);

  app.controller('FightController', ['$http', 'monsterFactory', 'playerFactory', function($http, monsterFactory, playerFactory) {
    var fight = this;

    fight.player = playerFactory;
    fight.monster = {};
    fight.weaponList = {};
    fight.selectedWeapon = {};
    fight.result = [];
    // monsterFactory.monsterList.success(function(data) { fight.monsterList = data });
    fight.monsterList = monsterFactory.monsterList;
    // var test = monsterFactory.monsterList;

    $http.get('data/weapons.json').success(function(data) { fight.weaponList = data; });

    fight.combat = function() {
      fight.monster.hp -= fight.player.getDamage();

      fight.result.push(fight.player.name + " did " + fight.player.getDamage() + " damage.");

      if (fight.monster.hp > 0) {
        fight.player.hp -= fight.monster.damage;
        fight.result.push(fight.monster.name + " did " + fight.monster.damage + " damage.");
      } else {
        fight.rewards();
        fight.result.push(fight.monster.name + " lost the battle!");
      }

      if (fight.player.hp < 1) {
        fight.result.push(fight.player.name + " lost the battle!");
      }
    };

    fight.heal = function() {
      fight.monster.hp = fight.monster.maxhp;
      fight.player.hp = fight.player.maxhp;
      fight.result = [];
    };

    fight.rewards = function() {
      fight.player.exp += fight.monster.reward.exp;
      fight.levelUp();
      fight.player.gold += fight.monster.reward.gold;
    };

    fight.levelUp = function() {
      var expToLevel = fight.player.level * 10;
      
      if (fight.player.exp >= expToLevel) {
        fight.player.exp = 0;
        fight.player.level++;
        fight.player.stats.strength += fight.player.level;
        fight.player.maxhp += 10;
        fight.player.hp = fight.player.maxhp;
      }
    };

    // Move this into a buy/sell controller later
    fight.buyWeapon = function() {
      if (fight.player.gold >= fight.selectedWeapon.cost) {
        fight.player.gold -= fight.selectedWeapon.cost;
        fight.player.weapon = fight.selectedWeapon;
      }
    };

  }]);

})();